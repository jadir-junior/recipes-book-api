import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Recipe {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  title: string;

  @Column({ type: 'varchar' })
  prepTime: string;

  @Column({ type: 'varchar' })
  cookTime: string;

  @Column({ type: 'int' })
  servings: number;

  @Column('varchar', { array: true })
  steps: string[];

  @Column('varchar', { array: true })
  ingredients: string[];

  @Column('varchar')
  imageUrl: string;
}
