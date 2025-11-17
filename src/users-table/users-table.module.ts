import { Module } from '@nestjs/common';
import { UsersTableService } from './users-table.service';
import { UsersTableController } from './users-table.controller';

@Module({
  controllers: [UsersTableController],
  providers: [UsersTableService],
})
export class UsersTableModule {}
