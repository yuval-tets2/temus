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
import { FaucetTransactionController } from "../faucetTransaction.controller";
import { FaucetTransactionService } from "../faucetTransaction.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  completedAt: new Date(),
  createdAt: new Date(),
  email: "exampleEmail",
  hash: "exampleHash",
  id: 42,
  publicKey: "examplePublicKey",
  startedAt: new Date(),
  tries: 42,
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  completedAt: new Date(),
  createdAt: new Date(),
  email: "exampleEmail",
  hash: "exampleHash",
  id: 42,
  publicKey: "examplePublicKey",
  startedAt: new Date(),
  tries: 42,
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    completedAt: new Date(),
    createdAt: new Date(),
    email: "exampleEmail",
    hash: "exampleHash",
    id: 42,
    publicKey: "examplePublicKey",
    startedAt: new Date(),
    tries: 42,
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  completedAt: new Date(),
  createdAt: new Date(),
  email: "exampleEmail",
  hash: "exampleHash",
  id: 42,
  publicKey: "examplePublicKey",
  startedAt: new Date(),
  tries: 42,
  updatedAt: new Date(),
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

describe("FaucetTransaction", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: FaucetTransactionService,
          useValue: service,
        },
      ],
      controllers: [FaucetTransactionController],
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

  test("POST /faucetTransactions", async () => {
    await request(app.getHttpServer())
      .post("/faucetTransactions")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        completedAt: CREATE_RESULT.completedAt.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        startedAt: CREATE_RESULT.startedAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /faucetTransactions", async () => {
    await request(app.getHttpServer())
      .get("/faucetTransactions")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          completedAt: FIND_MANY_RESULT[0].completedAt.toISOString(),
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          startedAt: FIND_MANY_RESULT[0].startedAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /faucetTransactions/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/faucetTransactions"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /faucetTransactions/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/faucetTransactions"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        completedAt: FIND_ONE_RESULT.completedAt.toISOString(),
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        startedAt: FIND_ONE_RESULT.startedAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /faucetTransactions existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/faucetTransactions")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        completedAt: CREATE_RESULT.completedAt.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        startedAt: CREATE_RESULT.startedAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/faucetTransactions")
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
