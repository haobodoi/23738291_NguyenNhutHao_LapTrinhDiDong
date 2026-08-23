class Book {
  constructor(
    public title: string,
    public author: string,
    public year: number
  ) {}
}

const book = new Book("Đắc nhân tâm bị sát nhân đâm", "Hảo Davinci Nguyễn", 2005);
console.log(book);
