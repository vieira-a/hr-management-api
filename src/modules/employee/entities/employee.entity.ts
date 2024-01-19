import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('employees')
export class EmployeeEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ name: 'document_id', nullable: false })
  documentId: number;

  @Column({ name: 'first_name', nullable: false })
  firstname: string;

  @Column({ name: 'last_name', nullable: false })
  lastname: string;

  @Column({ name: 'birth_date', nullable: false })
  birthdate: Date;

  @Column({ name: 'address', nullable: false })
  address: string;

  @Column({ name: 'departament', nullable: false })
  departament: string;

  @Column({ name: 'role', nullable: false })
  role: string;

  @Column({ name: 'salary', nullable: false })
  salary: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;
}