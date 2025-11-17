import { PartialType } from '@nestjs/mapped-types';
import { CreateUsersTableDto } from './create-users-table.dto';

export class UpdateUsersTableDto extends PartialType(CreateUsersTableDto) {}
