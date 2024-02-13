export default interface IBookDoc {
  id: number;
  title: string;
  image?: string;
  tags: string[];
  price: number;
  writer: number;
  created_at: Date;
}

export interface ICreateBook {
  title: string;
  image?: string;
  tags: string[];
  price: number;
  writer: number;
}
