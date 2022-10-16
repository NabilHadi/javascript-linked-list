class MyNode {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
    this.tail = this.getTail();
  }

  append(value) {
    if (!this.head) {
      this.head = new MyNode(value);
      return;
    }
    this.tail = this.getTail();

    const newNode = new MyNode(value);
    this.tail.nextNode = newNode;
    this.tail = newNode;
  }

  prepend(value) {
    if (!this.head) {
      this.head = new MyNode(value);
      return;
    }

    const newNode = new MyNode(value);
    newNode.nextNode = this.head;
    this.head = newNode;
  }

  size() {
    if (!this.head) return 0;

    let count = 1;
    let currNode = this.head;
    while (currNode.nextNode) {
      currNode = currNode.nextNode;
      count++;
    }

    return count;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    if (!this.head) return null;

    let currNode = this.head;
    while (currNode.nextNode) {
      currNode = currNode.nextNode;
    }

    return currNode;
  }

  at(index) {
    if (!this.head) return null;

    let i = 0;
    let currNode = this.head;
    while (currNode) {
      if (i === index) {
        return currNode;
      }
      currNode = currNode.nextNode;
      i++;
    }
    return null;
  }

  pop() {
    let listSize = this.size();
    if (listSize < 1) return null;
    else if (listSize === 1) {
      this.head = null;
      this.tail = null;
    }

    let beforeLastNode = this.at(listSize - 2);
    if (beforeLastNode) {
      let deletedNode = beforeLastNode.nextNode;
      beforeLastNode.nextNode = null;
      this.tail = this.getTail();
      return deletedNode;
    }

    return null;
  }

  contains(value) {
    if (!this.head) return false;

    let currNode = this.head;
    while (currNode) {
      if (currNode.value === value) {
        return true;
      }
      currNode = currNode.nextNode;
    }

    return false;
  }

  find(value) {
    if (!this.head) return false;

    let i = 0;
    let currNode = this.head;
    while (currNode) {
      if (currNode.value === value) {
        return i;
      }
      currNode = currNode.nextNode;
      i++;
    }

    return null;
  }

  toString() {
    if (!this.head) return "Empty";

    let i = 0;
    let currNode = this.head;
    let str = "";
    while (currNode) {
      str += `${i}:( ${currNode.value} ) -> `;
      currNode = currNode.nextNode;
      i++;
    }
    str += `null`;

    return str;
  }

  insertAt(value, index) {
    let listSize = this.size();

    if (index > listSize) {
      return null;
    } else if (index === listSize) {
      this.append(value);
    } else if (index === 0) {
      this.prepend(value);
    } else {
      let prevNode = this.at(index - 1);
      let nextNode = this.at(index);

      let newNode = new MyNode(value);

      prevNode.nextNode = newNode;
      newNode.nextNode = nextNode;

      return newNode;
    }
  }

  removeAt(index) {
    if (!this.head) return null;
    let listSize = this.size();

    if (index >= listSize) {
      return null;
    } else if (index === listSize - 1) {
      return this.pop();
    } else if (index === 0) {
      return (this.head = this.head.nextNode);
    } else {
      let prevNode = this.at(index - 1);
      let nextNode = this.at(index + 1);

      prevNode.nextNode = nextNode;
    }
  }
}

const linkedList = new LinkedList();
console.log(linkedList.toString());
linkedList.append("A");
linkedList.append("B");
linkedList.append("C");
linkedList.append("D");
linkedList.append("E");
console.log(linkedList.toString());
linkedList.removeAt(3);
console.log(linkedList.toString());
