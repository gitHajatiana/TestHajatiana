import { Test, TestingModule } from '@nestjs/testing';
import { EntityControllerController } from './entity-controller.controller';

describe('EntityControllerController', () => {
  let controller: EntityControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EntityControllerController],
    }).compile();

    controller = module.get<EntityControllerController>(EntityControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
