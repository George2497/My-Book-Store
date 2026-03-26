export class Book {
  id!: string;
  name!: string;
  price!: number;
  favourite!: boolean;
  stars!: number;
  Author!: string;
  imageUrl!: string;
  tags?: string[];
  rating?: number;
}
