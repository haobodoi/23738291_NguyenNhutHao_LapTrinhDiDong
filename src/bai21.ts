class Repository<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  getAll(): T[] {
    return [...this.items];
  }
}

const userRepository = new Repository<string>();
userRepository.add("Hảo");
userRepository.add("Nhựt");

console.log(userRepository.getAll());
