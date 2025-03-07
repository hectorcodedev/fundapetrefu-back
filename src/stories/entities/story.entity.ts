import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'stories' })
export class Story {
  @ApiProperty()
  @PrimaryColumn()
  id: string;

  @ApiProperty()
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty()
  @UpdateDateColumn()
  updatedAt: Date;

  @ApiProperty()
  @Column({ unique: true })
  storyTitle: string;

  @ApiProperty()
  @Column('longtext')
  storyContent: string;

  @ApiProperty()
  @Column()
  storyImg: string;
}
