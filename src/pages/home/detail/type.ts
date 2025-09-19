export interface ICategory {
  id: string;
  category: string;
}

export interface IRelatedProduct {
  id: number;
  name: string;
  alias: string;
  feature: boolean;
  price: number;
  description: string;
  image: string;
  shortDescription: string;
}

export interface IDetailAPI {
  id: number;
  name: string;
  alias: string;
  price: number;
  feature: boolean;
  description: string;
  size: string[];
  shortDescription: string;
  quantity: number;
  image: string;
  categories: ICategory[];          // <-- dùng ICategory
  relatedProducts: IRelatedProduct[]; // <-- dùng IRelatedProduct
}
