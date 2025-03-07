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

export enum SupportOptions {
  VOLUNTARIADO = 'VOLUNTARIADO',
  DONACION_ECONOMICA = 'DONACION_ECONOMICA',
  PAGAR_VETERINARIO = 'PAGAR_VETERINARIO',
  DONACION_INSUMOS = 'DONACION_INSUMOS',
  HOGAR_PASO = 'HOGAR_PASO',
  APADRINAR = 'APADRINAR',
  DONACION_ALIMENTOS = 'DONACION_ALIMENTOS',
  ORGANIZAR_COLECTA = 'ORGANIZAR_COLECTA',
}

@Entity({ name: 'supporters' })
export class Supporter {
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

  @Column({ type: 'varchar' })
  cellphone: string;

  @Column({ transformer: new UppercaseTransformer(), type: 'varchar' })
  email: string;

  @Column({
    type: 'enum',
    enum: SupportOptions,
    default: SupportOptions.DONACION_ECONOMICA,
  })
  supportAlternatives: SupportOptions;
}
