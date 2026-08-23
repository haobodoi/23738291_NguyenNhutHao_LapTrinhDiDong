class Book {
  constructor(
    public title: string,
    public author: string,
    public year: number
  ) {}
}

class User {
  constructor(public name: string) {}
}

class Library {
  private items: (Book | User)[] = [];

  addBook(book: Book): void {
    this.items.push(book);
  }

  addUser(user: User): void {
    this.items.push(user);
  }

  listItems(): void {
    console.log(this.items);
  }
}

const library = new Library();
library.addBook(new Book("Hảo bá đạo", "Author", 2025));
library.addUser(new User("Học sinh A"));
library.listItems();
