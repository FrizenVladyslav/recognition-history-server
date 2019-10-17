import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { History } from './history.entity';

@Injectable()
export class HistoriesService extends TypeOrmCrudService<History>  {
  constructor(@InjectRepository(History) repo) {
    super(repo);
  }
}
