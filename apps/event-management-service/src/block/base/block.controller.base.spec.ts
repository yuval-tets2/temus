import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { MorganModule } from "nest-morgan";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { BlockController } from "../block.controller";
import { BlockService } from "../block.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  createdAt: new Date(),
  difficulty: 42.424242424,
  graffiti: "exampleGraffiti",
  hash: "exampleHash",
  id: 42,
  main: "true",
  networkVersion: 42,
  previousBlockHash: "examplePreviousBlockHash",
  sequence: 42,
  size: 42,
  timeSinceLastBlockMs: 42,
  timestamp: new Date(),
  transactionsCount: 42,
  updatedAt: new Date(),
  work: 42.424242424,
};
const CREATE_RESULT = {
  createdAt: new Date(),
  difficulty: 42.424242424,
  graffiti: "exampleGraffiti",
  hash: "exampleHash",
  id: 42,
  main: "true",
  networkVersion: 42,
  previousBlockHash: "examplePreviousBlockHash",
  sequence: 42,
  size: 42,
  timeSinceLastBlockMs: 42,
  timestamp: new Date(),
  transactionsCount: 42,
  updatedAt: new Date(),
  work: 42.424242424,
};
const FIND_MANY_RESULT = [
  {
    createdAt: new Date(),
    difficulty: 42.424242424,
    graffiti: "exampleGraffiti",
    hash: "exampleHash",
    id: 42,
    main: "true",
    networkVersion: 42,
    previousBlockHash: "examplePreviousBlockHash",
    sequence: 42,
    size: 42,
    timeSinceLastBlockMs: 42,
    timestamp: new Date(),
    transactionsCount: 42,
    updatedAt: new Date(),
    work: 42.424242424,
  },
];
const FIND_ONE_RESULT = {
  createdAt: new Date(),
  difficulty: 42.424242424,
  graffiti: "exampleGraffiti",
  hash: "exampleHash",
  id: 42,
  main: "true",
  networkVersion: 42,
  previousBlockHash: "examplePreviousBlockHash",
  sequence: 42,
  size: 42,
  timeSinceLastBlockMs: 42,
  timestamp: new Date(),
  transactionsCount: 42,
  updatedAt: new Date(),
  work: 42.424242424,
};

const service = {
  create() {
    return CREATE_RESULT;
  },
  findMany: () => FIND_MANY_RESULT,
  findOne: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("Block", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: BlockService,
          useValue: service,
        },
      ],
      controllers: [BlockController],
      imports: [MorganModule.forRoot(), ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /blocks", async () => {
    await request(app.getHttpServer())
      .post("/blocks")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        timestamp: CREATE_RESULT.timestamp.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /blocks", async () => {
    await request(app.getHttpServer())
      .get("/blocks")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          timestamp: FIND_MANY_RESULT[0].timestamp.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /blocks/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/blocks"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /blocks/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/blocks"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        timestamp: FIND_ONE_RESULT.timestamp.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /blocks existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/blocks")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        timestamp: CREATE_RESULT.timestamp.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/blocks")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
