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

export interface SubOrder {
  id: string;
  customer: string;
  itemCount: number;
  status: string;
}

export interface ItemsAPIData {
  items: Item[];
  msg: string;
  success: string;
  error: string;
}

export interface OrdersAPIData {
  items: Order[];
  msg: string;
  success: string;
  error: string;
}
