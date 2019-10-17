import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { IsUrl } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

interface ITag {
  confidence: number;
  tag: { en: string };
}

@Entity()
export class History {
  @ApiModelProperty({ readOnly: true })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiModelProperty()
  @Column()
  @IsUrl()
  img: string;

  @ApiModelProperty({ readOnly: true })
  @CreateDateColumn()
  date: Date;

  @ApiModelProperty()
  @Column({ type: 'simple-json' })
  tags: ITag[];
}
