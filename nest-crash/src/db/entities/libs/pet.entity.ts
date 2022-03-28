import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from './user.entity';

@Entity({ name: 'pet', schema: 'public' })
export class PetEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  public id: number;

  @Column()
  public name: string;

  @ManyToOne(() => UserEntity, (user) => user.pets)
  public user: UserEntity;
}
