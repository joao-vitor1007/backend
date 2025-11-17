import { Test, TestingModule } from '@nestjs/testing';
import { UsersTableService } from './users-table.service';

describe('UsersTableService', () => {
  let service: UsersTableService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersTableService],
    }).compile();

    service = module.get<UsersTableService>(UsersTableService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
