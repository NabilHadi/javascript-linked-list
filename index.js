class MyNode {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(value) {
    let newNode = new MyNode(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.nextNode = newNode;
    }
    this.tail = newNode;
    this.size++;
  }

  prepend(value) {
    let newNode = new MyNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else if (this.head === this.tail) {
      this.head = newNode;
      this.head.nextNode = this.tail;
    } else {
      let nextNode = this.head;
      this.head = newNode;
      this.head.nextNode = nextNode;
    }
    this.size++;
    console.log(this.head);
  }

  at(index) {
    if (!this.head) return null;
    if (index < 1) return this.head;

    let counter = 0;
    let nextNode = this.head;
    while (nextNode) {
      if (counter === index) {
        return nextNode;
      } else {
        nextNode = nextNode.nextNode;
        counter++;
      }
    }
    return null;
  }

  pop() {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.nextNode === this.tail) {
        let removedNode = this.tail;
        currentNode.nextNode = null;
        this.tail = currentNode;
        this.size--;
        return removedNode;
      }
      currentNode = currentNode.nextNode;
    }
  }

  contains(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      } else {
        currentNode = currentNode.nextNode;
      }
    }
    return false;
  }

  find(value) {
    let index = 0;
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        return index;
      } else {
        currentNode = currentNode.nextNode;
        index++;
      }
    }
    return null;
  }

  toString() {
    let str = "";
    let currentNode = this.head;
    while (currentNode) {
      str = str + `( ${currentNode.value} ) -> `;
      currentNode = currentNode.nextNode;
    }
    str = str + `( null )`;
    return str;
  }

  insertAt(value, index) {
    if (index < 1) {
      this.prepend(value);
      return;
    }
    let counter = 0;
    let currentNode = this.head;
    while (currentNode) {
      if (counter === index) {
        const newNode = new MyNode(value);
        newNode.nextNode = currentNode.nextNode;
        currentNode.nextNode = newNode;
        this.size++;
        return;
      } else {
        currentNode = currentNode.nextNode;
        counter++;
      }
    }
  }

  removeAt(index) {
    let counter = 0;
    let currentNode = this.head;
    while (currentNode) {
      if (counter === index - 1 && currentNode.nextNode) {
        const removedNode = currentNode.nextNode;
        if (!removedNode.nextNode) {
          return this.pop();
        } else {
          currentNode.nextNode = removedNode.nextNode;
          removedNode.nextNode = null;
          this.size--;
          return removedNode;
        }
      } else {
        currentNode = currentNode.nextNode;
        counter++;
      }
    }
  }
}

const ll = new LinkedList();

ll.append(1);
ll.append(2);
ll.append(3);
ll.append(4);
ll.prepend(0);

console.log(ll.size);
console.log(ll.at(4));
console.log(ll.tail);
console.log(ll.contains(4));
console.log(ll.find(4));
console.log(ll.toString());
ll.pop();
console.log(ll.at(3));
console.log(ll.tail === ll.at(ll.size - 1));
console.log(ll.tail);
console.log(ll.contains(4));
console.log(ll.find(4));
console.log(ll.toString());
ll.insertAt("inserted value", 2);
console.log(ll.toString());
console.log(ll.removeAt(3));
console.log(ll.toString());
console.log(ll.removeAt(3));
console.log(ll.toString());
ll.insertAt("start", 0);
console.log(ll.toString());
console.log(ll.head === ll.at(0));
console.log(ll.tail === ll.at(ll.size - 1));
