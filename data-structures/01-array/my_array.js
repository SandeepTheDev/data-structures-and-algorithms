class MyArray {
  constructor() {
    this.data = {};
    this.length = 0;
  }

  push(element) {
    this.data[this.length] = element;
    this.length++;
    return this.length;
  }

  pop() {
    let item = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return item;
  }

  get(index) {
    return this.data[index];
  }

  delete(index) {
    const element = this.data[index];
    delete this.data[index];
    for (let i = index + 1; i < this.length; i++) {
      this.data[i - 1] = this.data[i];
    }
    index < this.length - 1 && delete this.data[this.length - 1];
    this.length--;
    return element;
  }

  print() {
    let string = "";
    for (let key in this.data) {
      string = string + this.data[key] + ", ";
    }
    string = string.substring(0, string.length - 2);
    console.log({ data: this.data, length: this.length });
    return `[${string}] length: ${this.length}`;
  }
}

const colors = new MyArray();
colors.push("green");
colors.push("red");
colors.push("black");
colors.push("white");
colors.delete(3);
colors.print();
