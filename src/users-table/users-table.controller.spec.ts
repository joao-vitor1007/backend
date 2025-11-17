import { Test, TestingModule } from '@nestjs/testing';
import { UsersTableController } from './users-table.controller';
import { UsersTableService } from './users-table.service';

describe('UsersTableController', () => {
  let controller: UsersTableController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersTableController],
      providers: [UsersTableService],
    }).compile();

    controller = module.get<UsersTableController>(UsersTableController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
