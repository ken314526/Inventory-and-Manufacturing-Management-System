export interface Item {
  id: string;
  name: string;
  stock: number;
}

export interface Order {
  id: string;
  customer: string;
  items: Item[];
  status: string;
}
