export interface ICategory {
  id: number;
  name: string;
  description: string;
  isActive: boolean;
  sortingOrder: number;
  subCategories: string[];
}
