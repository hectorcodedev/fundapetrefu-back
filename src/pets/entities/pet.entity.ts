import { Adopter } from 'src/adopters/entities/adopter.entity';
import { PetImage } from 'src/pet-images/entities/pet-image.entity';
import { UppercaseTransformer } from 'src/uppercase-transformer';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum PetAgeOptions {
  CACHORRO = 'CACHORRO',
  ADULTO = 'ADULTO',
  SENIOR = 'SENIOR',
}

export enum PetGenderOptions {
  MACHO = 'MACHO',
  HEMBRA = 'HEMBRA',
}

export enum PetSpeciesOptions {
  PERRO = 'PERRO',
  GATO = 'GATO',
}

export enum PetSizeOptions {
  GRANDE = 'GRANDE',
  MEDIANO = 'MEDIANO',
  PEQUENO = 'PEQUENO',
}

export enum PetSpecialConditionOptions {
  NINGUNA = 'NINGUNA',
  CIEGO = 'CIEGO',
  DISCAPACITADO = 'DISCAPACITADO',
}

@Entity({ name: 'pets' })
export class Pet {
  @PrimaryColumn({ unique: true, type: 'varchar' })
  id: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @Column({
    unique: true,
    type: 'varchar',
    transformer: new UppercaseTransformer(),
  })
  petName: string;

  @Column({
    type: 'enum',
    enum: PetAgeOptions,
    default: PetAgeOptions.CACHORRO,
  })
  petAge: PetAgeOptions;

  @Column({
    type: 'enum',
    enum: PetGenderOptions,
    default: PetGenderOptions.MACHO,
  })
  petGender: PetGenderOptions;

  @Column({
    type: 'enum',
    enum: PetSpeciesOptions,
    default: PetSpeciesOptions.PERRO,
  })
  petSpecies: PetSpeciesOptions;

  @Column({
    type: 'enum',
    enum: PetSizeOptions,
    default: PetSizeOptions.MEDIANO,
  })
  petSize: PetSizeOptions;

  @Column({
    type: 'enum',
    enum: PetSpecialConditionOptions,
    default: PetSpecialConditionOptions.NINGUNA,
  })
  petSpecialCondition: PetSpecialConditionOptions;

  @Column({ type: 'boolean' })
  isAdopted: boolean;

  @Column({ type: 'boolean' })
  isFeatured: boolean;

  @Column({ nullable: true, type: 'varchar' })
  featuredImg: string;

  @Column({ type: 'longtext', transformer: new UppercaseTransformer() })
  description: string;

  @Column({ nullable: true, type: 'int' })
  adopterDniNumber: number;

  @OneToMany(() => PetImage, (petImage) => petImage.pet, {
    onDelete: 'CASCADE',
  })
  petImages: PetImage[];

  @ManyToOne(() => Adopter, (adopter) => adopter.adoptedPets, {
    onDelete: 'CASCADE',
  })
  
  adopter: Adopter;
}
