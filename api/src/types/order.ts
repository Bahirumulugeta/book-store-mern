export default interface IOrderDoc {
  id: number;
  user_id: number;
  book_id: number;
  address: string;
  quantity: number;
  total_price: number;
  status: string;
  created_at: Date;
}

export interface ICreateOrder {
  user_id: number;
  book_id: number;
  address: string;
  quantity: number;
  total_price: number;
}
