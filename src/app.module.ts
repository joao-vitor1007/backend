import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { UsersTableModule } from './users-table/users-table.module';

@Module({
  imports: [UsersModule, UsersTableModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
