import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { PetEntity } from './pet.entity';

@Entity({ name: 'user', schema: 'public' })
export class UserEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  public id: number;

  @Column()
  public name: string;

  @Column({ nullable: true })
  public age: number;

  @OneToMany(() => PetEntity, (pet) => pet.user)
  public pets: PetEntity[];
}
