import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersTableService } from './users-table.service';
import { CreateUsersTableDto } from './dto/create-users-table.dto';
import { UpdateUsersTableDto } from './dto/update-users-table.dto';

@Controller('users-table')
export class UsersTableController {
  constructor(private readonly usersTableService: UsersTableService) {}

  @Post()
  create(@Body() createUsersTableDto: CreateUsersTableDto) {
    return this.usersTableService.create(createUsersTableDto);
  }

  @Get()
  findAll() {
    return this.usersTableService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersTableService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsersTableDto: UpdateUsersTableDto) {
    return this.usersTableService.update(+id, updateUsersTableDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersTableService.remove(+id);
  }
}
