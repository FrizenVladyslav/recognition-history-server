import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from './config';
import { HistoriesModule } from './histories/histories.module';
import { FilesModule } from './files/files.module';

const { DB } = config;

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: DB.HOST,
      port: DB.PORT,
      username: DB.USERNAME,
      password: DB.PASSWORD,
      database: DB.NAME,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    HistoriesModule,
    FilesModule,
  ],
})
export class AppModule {}
