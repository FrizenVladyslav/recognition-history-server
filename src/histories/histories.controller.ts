import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { ApiUseTags } from '@nestjs/swagger';
import { HistoriesService } from './histories.service';
import { History } from './history.entity';

@Crud({
  model: {
    type: History,
  },
})
@ApiUseTags('histories')
@Controller('histories')
export class HistoriesController {
  constructor(public service: HistoriesService) {}
}
