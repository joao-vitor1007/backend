import { Injectable } from '@nestjs/common';
import { CreateUsersTableDto } from './dto/create-users-table.dto';
import { UpdateUsersTableDto } from './dto/update-users-table.dto';

@Injectable()
export class UsersTableService {
  create(createUsersTableDto: CreateUsersTableDto) {
    return 'This action adds a new usersTable';
  }

  findAll() {
    return `This action returns all usersTable`;
  }

  findOne(id: number) {
    return `This action returns a #${id} usersTable`;
  }

  update(id: number, updateUsersTableDto: UpdateUsersTableDto) {
    return `This action updates a #${id} usersTable`;
  }

  remove(id: number) {
    return `This action removes a #${id} usersTable`;
  }
}
