import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HistoriesService } from './histories.service';
import { HistoriesController } from './histories.controller';
import { History } from './history.entity'

@Module({
  imports: [TypeOrmModule.forFeature([History])],
  providers: [HistoriesService],
  controllers: [HistoriesController],
})
export class HistoriesModule {}
