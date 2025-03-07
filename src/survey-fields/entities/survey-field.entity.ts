import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum HouseTypeOptions {
  APARTAMENTO = 'APARTAMENTO',
  CASA_PEQUENA = 'CASA_PEQUENA',
  CASA_GRANDE = 'CASA_GRANDE',
  CASA_RURAL = 'CASA_RURAL',
}

export enum TimeAloneOptions {
  NUNCA = 'NUNCA',
  DOS_A_CUATRO = 'DOS_A_CUATRO',
  CUATRO_A_SIETE = 'CUATRO_A_SIETE',
  SIETE_MAS = 'SIETE_MAS',
}

export enum AnyKidsOptions {
  NO = 'NO',
  AVECES = 'AVECES',
  PRONTO = 'PRONTO',
  SI = 'SI',
}

export enum ReasonsOptions {
  COMPANIA = 'COMPANIA',
  REGALO = 'REGALO',
  OTRA = 'OTRA',
}

export enum HadPetOptions {
  NO = 'NO',
  SI = 'SI',
}

export enum HavePetOptions {
  NO = 'NO',
  SI = 'SI',
}

@Entity({ name: 'survey-fields' })
export class SurveyField {
  @ApiProperty()
  @PrimaryColumn({ unique: true })
  id: string;

  @ApiProperty()
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty()
  @UpdateDateColumn()
  updatedAt: Date;

  @ApiProperty()
  @Column({ unique: true })
  dniNumber: number;

  @ApiProperty()
  @Column()
  familyComposition: string;

  @ApiProperty()
  @Column()
  adultsQty: number;

  @ApiProperty()
  @Column()
  childrenQty: number;

  @ApiProperty()
  @Column()
  babiesQty: number;

  @ApiProperty()
  @Column({
    type: 'enum',
    enum: HouseTypeOptions,
    default: HouseTypeOptions.APARTAMENTO,
  })
  houseType: HouseTypeOptions;

  @ApiProperty()
  @Column({
    type: 'enum',
    enum: TimeAloneOptions,
    default: TimeAloneOptions.NUNCA,
  })
  timeAlone: TimeAloneOptions;

  @ApiProperty()
  @Column({
    type: 'enum',
    enum: AnyKidsOptions,
    default: AnyKidsOptions.NO,
  })
  anyKids: AnyKidsOptions;

  @ApiProperty()
  @Column({ nullable: true })
  childrenAges: string;

  @ApiProperty()
  @Column({
    type: 'enum',
    enum: ReasonsOptions,
    default: ReasonsOptions.COMPANIA,
  })
  reasons: ReasonsOptions;

  @ApiProperty()
  @Column({ nullable: true })
  reasonsOther: string;

  @ApiProperty()
  @Column({
    type: 'enum',
    enum: HadPetOptions,
    default: HadPetOptions.NO,
  })
  hadPet: HadPetOptions;

  @ApiProperty()
  @Column({ nullable: true })
  hadPetOther: string;

  @ApiProperty()
  @Column({
    type: 'enum',
    enum: HavePetOptions,
    default: HavePetOptions.NO,
  })
  havePet: HavePetOptions;

  @ApiProperty()
  @Column({ nullable: true })
  havePetOther: string;

  @ApiProperty()
  @Column('longtext')
  getFundapetInfo: string;

  @ApiProperty()
  @Column('longtext')
  adoptReason: string;

  @ApiProperty()
  @Column()
  ref1Name: string;

  @ApiProperty()
  @Column()
  ref1Cellphone: string;

  @ApiProperty()
  @Column()
  ref2Name: string;

  @ApiProperty()
  @Column()
  ref2Cellphone: string;
}
