class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }

    return hash;
  }

  set(key, value) {
    const hash = this._hash(key);
    this.data[hash] = value;
  }

  get(key) {
    const hash = this._hash(key);
    return this.data[hash];
  }
}

const hashTable = new HashTable(50);
hashTable.set("black", "#000000");
hashTable.set("white", "#ffffff");
const black = hashTable.get("black");
const white = hashTable.get("white");
console.log(black, white);
