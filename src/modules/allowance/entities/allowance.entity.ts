import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('allowances')
export class AllowanceEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ name: 'type', nullable: false })
  type: string;

  @Column({ name: 'description', nullable: false })
  description: string;

  @Column({ name: 'has_fgts', nullable: false })
  hasFgts: boolean;

  @Column({ name: 'has_inss', nullable: false })
  hasInss: boolean;

  @Column({ name: 'has_ir', nullable: false })
  hasIr: boolean;

  @Column({ name: 'has_hazard', nullable: false })
  hasHazard: boolean;

  @Column({ name: 'has_unsanitary', nullable: false })
  hasUnsanitary: boolean;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;
}
