import { Pet } from 'src/pets/entities/pet.entity';
import { UppercaseTransformer } from 'src/uppercase-transformer';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'adopters' })
export class Adopter {
  @PrimaryColumn({ unique: true, type: 'varchar' })
  id: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @Column({ unique: true, type: 'int' })
  adopterDniNumber: number;

  @Column({ transformer: new UppercaseTransformer(), type: 'varchar' })
  adopterFirstName: string;

  @Column({ transformer: new UppercaseTransformer(), type: 'varchar' })
  adopterLastName: string;

  @OneToMany(() => Pet, (pet) => pet.adopter, {
    onDelete: 'CASCADE',
  })
  adoptedPets: Pet[];
}
