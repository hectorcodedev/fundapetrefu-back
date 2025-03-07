import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'shelter-contents' })
export class ShelterContent {
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
  infoTitle: string;

  @ApiProperty()
  @Column()
  infoImgLink: string;

  @ApiProperty()
  @Column('longtext')
  infoContent: string;
}
