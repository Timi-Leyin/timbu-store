export interface GetProducts {
  reverse_sort?: boolean;
  page?: number;
  size?: number;
}


export interface Price{
    // {
    [key:string]: number[];
  // }
}

export interface ProductContext {
  loading: boolean;
  data: GetProductsResponse | null;
}

export interface Photo {
  model_name: string;
  model_id: string;
  organization_id: string;
  filename: string;
  url: string;
  is_featured: boolean;
  save_as_jpg: boolean;
  is_public: boolean;
  file_rename: boolean;
  position: unknown | number;
}

export interface Products {
  name: string;
  description?: string | null;
  unique_id: string;
  url_slug: string;
  is_available: boolean;
  is_service: boolean;
  previous_url_slugs?: string | null;
  unavailable: boolean;
  unavailable_start: unknown;
  unavailable_end: unknown;
  id: string;
  parent_product_id?: unknown;
  parent?: unknown;
  organization_id: string;
  stock_id: unknown;
  product_image: [];
  categories: [];
  date_created: string | Date | number;
  last_updated: string | Date | number;
  user_id: string;
  photos: Photo[];
  prices: unknown;
  stocks: unknown;
  current_price: Price[];
  is_deleted: boolean;
  available_quantity: unknown;
  selling_price: unknown;
  discounted_price: unknown;
  buying_price: unknown;
  extra_infos: unknown;
  featured_reviews: unknown;
  unavailability: unknown[];
}

export interface GetProductsResponse {
  page: number;
  size: number;
  total: number;
  debug: unknown;
  previous_page?: string | null;
  next_page?: string | null;
  items: Products[];
}
