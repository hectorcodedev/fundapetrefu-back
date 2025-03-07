import { Pet } from 'src/pets/entities/pet.entity';
import { UppercaseTransformer } from 'src/uppercase-transformer';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'pet-images' })
export class PetImage {
  @PrimaryColumn({ unique: true, type: 'varchar' })
  id: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @Column({
    transformer: new UppercaseTransformer(),
    unique: true,
    type: 'varchar',
  })
  petImageName: string;

  @Column({ type: 'varchar' })
  petImageLink: string;

  @Column({ transformer: new UppercaseTransformer(), type: 'longtext' })
  petImageDescription: string;

  @Column({ nullable: true, type: 'varchar' })
  petName: string;

  @ManyToOne(() => Pet, (pet) => pet.petImages, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({
    name: 'petName',
    referencedColumnName: 'petName',
  })
  pet: Pet;
}
