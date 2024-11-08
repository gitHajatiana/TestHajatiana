import { Test, TestingModule } from '@nestjs/testing';
import { EntityuserController } from './entityuser.controller';

describe('EntityuserController', () => {
  let controller: EntityuserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EntityuserController],
    }).compile();

    controller = module.get<EntityuserController>(EntityuserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
