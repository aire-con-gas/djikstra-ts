import { IComparable } from "../interfaces/IComparable";

interface PriorityItem {
  priority: number;
  value: any;
}

export class PriorityQueue {
  private queue: any[];

  constructor() {}

  public enqueue(item: IComparable): void {
    const currentLength = this.queue.length;
    let i = 0;
    let p = 0;
    let temp = null;

    if (currentLength) {
      this.queue.push({ priority: -1000, value: item });
      i = currentLength;
      p = (i - 1) >> 1; //Math.floor((i - 1) * 0.5);	// parent
      while (p >= 0) {
        const parentItem = this.queue[p];
        if (parentItem.compareTo(this.queue[i])) {
          temp = this.queue[i];
          this.queue[i] = parentItem;
          this.queue[p] = temp;
          i = p;
          p = (i - 1) >> 1;
        } else {
          break;
        }
      }
    } else {
      this.queue.push({ priority: 1000, value: item });
    }
  }

  public dequeue(): any {
    let result = null;
    let i = 0;
    let leftChild = 1; // left child
    let rightChild = 2; // right child
    let priority0 = 0.0;
    let priority1 = 0.0;
    let priority2 = 0.0;
    let temp = null;

    if (this.size()) {
      result = this.queue.shift().value; // grab the first item

      while (leftChild < this.size()) {
        if (rightChild < this.size()) {
          priority0 = this.queue[i].priority; // this assumes parent is always at the head of the queue
          priority1 = this.queue[leftChild].priority; // this assumes left child follows after parent
          priority2 = this.queue[rightChild].priority; // this assumes right child follow after left child

          if (priority1 < priority2 && priority0 < priority2) {
            temp = this.queue[i];
            this.queue[i] = this.queue[rightChild];
            this.queue[rightChild] = temp;
            i = rightChild;
          } else if (priority0 < priority1) {
            temp = this.queue[i];
            this.queue[i] = this.queue[leftChild];
            this.queue[leftChild] = temp;
            i = leftChild;
          } else {
            break;
          }

          leftChild = (i << 1) + 1;
          rightChild = (i << 1) + 2;
        } else {
          priority0 = this.queue[i].priority;
          priority1 = this.queue[leftChild].priority;

          if (priority0 < priority1) {
            temp = this.queue[i];
            this.queue[i] = this.queue[leftChild];
            this.queue[leftChild] = temp;
          }
          break;
        }
      }

      return result;
    } else {
      // this means we have nothing in here
      return null;
    }
  }

  public top() {
    return this.queue[0].value;
  }

  public size(): number {
    return this.queue.length;
  }
}
