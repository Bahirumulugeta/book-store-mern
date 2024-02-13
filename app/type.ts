
export interface AuthState {
  user: null | { username: string };
  loading: boolean;
  error: boolean;
}

/////
export interface Book {
  id: number;
  title: string;
  image: string;
  price: number;
  tags: string[];
}


export interface BookState {
  books: Book[];
  loading: boolean;
  error: boolean;
  errorMsg: string | null
}