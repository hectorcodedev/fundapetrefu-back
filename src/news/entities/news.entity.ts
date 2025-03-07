import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'news' })
export class News {
  @PrimaryColumn({ unique: true, type: 'varchar' })
  id: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @Column({ unique: true, type: 'varchar' })
  newsTitle: string;

  @Column({ type: 'longtext' })
  newsContent: string;

  @Column({ type: 'varchar' })
  newsImg: string;
}
