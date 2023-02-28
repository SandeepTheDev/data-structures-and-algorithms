class MyArray {
  constructor() {
    this.data = {};
    this.length = 0;
  }

  push(value) {
    this.data[this.length] = value;
    this.length++;
    return this;
  }

  pop() {
    // is `length` greater than 0?
    if (this.length > 0) {
      // delete the last element
      delete this.data[this.length - 1];
      this.length--;
    }

    return this;
  }

  // insert element at the start of an array
  unshift(value) {
    // is `length` greater than 0?
    if (this.length > 0) {
      // create a new object
      const newData = {};
      // insert the new element
      newData[0] = value;

      // copy the `data` to `newData` with incremented key by 1
      for (let i = 0; i < this.length; i++) {
        newData[i + 1] = this.data[i];
      }

      this.data = { ...newData };
      this.length++;
    } else {
      this.push(value);
    }

    return this;
  }

  // remove the first element
  shift() {
    // is `length` greater than 0?
    if (this.length > 0) {
      // replace all elements with the element next to it
      for (let i = 0; i < this.length; i++) {
        this.data[i] = this.data[i + 1];
      }

      // delete the last element
      delete this.data[this.length - 1];
      this.length--;
    }

    return this;
  }

  delete(index) {
    // is index exists?
    if (this.data[index]) {
      // replace all elements from given index with the element next to it
      for (let i = index; i < this.length; i++) {
        this.data[i] = this.data[i + 1];
      }

      // delete the last element
      delete this.data[this.length - 1];
      this.length--;
    }

    return this;
  }
}
