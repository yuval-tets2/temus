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
import { BlockDailyController } from "../blockDaily.controller";
import { BlockDailyService } from "../blockDaily.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  averageBlockSize: 42.424242424,
  averageBlockTimeMs: 42,
  averageDifficulty: 42.424242424,
  blocksCount: 42,
  blocksWithGraffitiCount: 42,
  chainSequence: 42,
  createdAt: new Date(),
  cumulativeUniqueGraffiti: 42,
  date: new Date(),
  id: 42,
  transactionsCount: 42,
  uniqueGraffitiCount: 42,
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  averageBlockSize: 42.424242424,
  averageBlockTimeMs: 42,
  averageDifficulty: 42.424242424,
  blocksCount: 42,
  blocksWithGraffitiCount: 42,
  chainSequence: 42,
  createdAt: new Date(),
  cumulativeUniqueGraffiti: 42,
  date: new Date(),
  id: 42,
  transactionsCount: 42,
  uniqueGraffitiCount: 42,
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    averageBlockSize: 42.424242424,
    averageBlockTimeMs: 42,
    averageDifficulty: 42.424242424,
    blocksCount: 42,
    blocksWithGraffitiCount: 42,
    chainSequence: 42,
    createdAt: new Date(),
    cumulativeUniqueGraffiti: 42,
    date: new Date(),
    id: 42,
    transactionsCount: 42,
    uniqueGraffitiCount: 42,
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  averageBlockSize: 42.424242424,
  averageBlockTimeMs: 42,
  averageDifficulty: 42.424242424,
  blocksCount: 42,
  blocksWithGraffitiCount: 42,
  chainSequence: 42,
  createdAt: new Date(),
  cumulativeUniqueGraffiti: 42,
  date: new Date(),
  id: 42,
  transactionsCount: 42,
  uniqueGraffitiCount: 42,
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

describe("BlockDaily", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: BlockDailyService,
          useValue: service,
        },
      ],
      controllers: [BlockDailyController],
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

  test("POST /blockDailies", async () => {
    await request(app.getHttpServer())
      .post("/blockDailies")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        date: CREATE_RESULT.date.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /blockDailies", async () => {
    await request(app.getHttpServer())
      .get("/blockDailies")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          date: FIND_MANY_RESULT[0].date.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /blockDailies/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/blockDailies"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /blockDailies/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/blockDailies"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        date: FIND_ONE_RESULT.date.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /blockDailies existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/blockDailies")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        date: CREATE_RESULT.date.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/blockDailies")
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
