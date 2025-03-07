import { UppercaseTransformer } from 'src/uppercase-transformer';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum DniTypeOptions {
  CEDULA_CIUDADANIA = 'CEDULA_CIUDADANIA',
  CEDULA_EXTRANJERIA = 'CEDULA_EXTRANJERIA',
  NUMERO_IDENTIFICACION_PERSONAL = 'NIUP',
  TARJETA_IDENTIDAD = 'TARJETA_IDENTIDAD',
  PASAPORTE = 'PASAPORTE',
}

export enum StratumOptions {
  UNO = 'UNO',
  DOS = 'DOS',
  TRES = 'TRES',
  CUATRO = 'CUATRO',
  CINCO = 'CINCO',
  SEIS = 'SEIS',
}

export enum MaritalStatusOptions {
  CASADO = 'CASADO',
  SOLTERO = 'SOLTERO',
  UNION_LIBRE = 'UNION_LIBRE',
}

export enum LocalityOptions {
  ANTONIO_NARINO = 'ANTONIO_NARINO',
  BARRIOS_UNIDOS = 'BARRIOS_UNIDOS',
  BOSA = 'BOSA',
  CHAPINERO = 'CHAPINERO',
  CIUDAD_BOLIVAR = 'CIUDAD_BOLIVAR',
  ENGATIVA = 'ENGATIVA',
  FONTIBON = 'FONTIBON',
  KENNEDY = 'KENNEDY',
  LA_CANDELARIA = 'LA_CANDELARIA',
  LOS_MARTIRES = 'LOS_MARTIRES',
  PUENTE_ARANDA = 'PUENTE_ARANDA',
  RAFAEL_URIBE_URIBE = 'RAFAEL_URIBE_URIBE',
  SAN_CRISTOBAL = 'SAN_CRISTOBAL',
  SANTA_FE = 'SANTA_FE',
  SUMAPAZ = 'SUMAPAZ',
  TEUSAQUILLO = 'TEUSAQUILLO',
  TUNJUELITO = 'TUNJUELITO',
  USAQUEN = 'USAQUEN',
  USME = 'USME',
}

@Entity({ name: 'candidates' })
export class Candidate {
  @PrimaryColumn({ unique: true, type: 'varchar' })
  id: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @Column({ transformer: new UppercaseTransformer(), type: 'varchar' })
  firstName: string;

  @Column({ transformer: new UppercaseTransformer(), type: 'varchar' })
  lastName: string;

  @Column({
    type: 'enum',
    enum: DniTypeOptions,
    default: DniTypeOptions.CEDULA_CIUDADANIA,
  })
  dniType: DniTypeOptions;

  @Column({ unique: true, type: 'int' })
  dniNumber: number;

  @Column({ type: 'smallint' })
  age: number;

  @Column({ transformer: new UppercaseTransformer(), type: 'varchar' })
  address: string;

  @Column({ transformer: new UppercaseTransformer(), type: 'varchar' })
  neighborhood: string;

  @Column({
    type: 'enum',
    enum: LocalityOptions,
    default: LocalityOptions.BOSA,
  })
  locality: LocalityOptions;

  @Column({
    type: 'enum',
    enum: StratumOptions,
    default: StratumOptions.UNO,
  })
  stratum: StratumOptions;

  @Column({
    type: 'enum',
    enum: MaritalStatusOptions,
    default: MaritalStatusOptions.CASADO,
  })
  maritalStatus: MaritalStatusOptions;

  @Column({ type: 'smallint' })
  children: number;

  @Column()
  cellphone: string;

  @Column({ transformer: new UppercaseTransformer(), type: 'varchar' })
  profession: string;

  @Column({ transformer: new UppercaseTransformer(), type: 'varchar' })
  companyName: string;

  @Column({ transformer: new UppercaseTransformer(), type: 'varchar' })
  companyAddress: string;

  @Column({ transformer: new UppercaseTransformer(), type: 'varchar' })
  companyPhone: string;

  @Column({ transformer: new UppercaseTransformer(), type: 'varchar' })
  email: string;

  @Column({ transformer: new UppercaseTransformer(), type: 'varchar' })
  facebookUser: string;

  @Column({ transformer: new UppercaseTransformer(), type: 'varchar' })
  instagramUser: string;
}
