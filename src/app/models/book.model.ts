export interface Book {
    id: number;
    title: string;
    author: string;
    genre: string;
    cover_type: string;
    amount: number;
    price: number;
    purpose: string;
  }
  //интерфейс можно указать и в самом component.ts внизу вне экспорта класса, потом в перменной просто к нему обратиться
  