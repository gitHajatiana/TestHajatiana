import { Test, TestingModule } from '@nestjs/testing';
import { EntityuserService } from './entityuser.service';

describe('EntityuserService', () => {
  let service: EntityuserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EntityuserService],
    }).compile();

    service = module.get<EntityuserService>(EntityuserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
