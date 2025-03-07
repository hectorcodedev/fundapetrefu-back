import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'supports' })
export class Support {
  @PrimaryColumn()
  id: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ unique: true })
  supportTitle: string;

  @Column('longtext')
  supportContent: string;

  @Column()
  supportImg: string;

  @Column()
  supportLink: string;
}
