export default class Queue<T> {
  private queue: T[] = []
  private readonly limit: number
  constructor(limit: number) {
    this.limit = limit
  }
  public push(item: T): void {
    if (this.queue.length < this.limit) {
      this.queue.push(item)
    }
  }
  public pop(): T | undefined {
    return this.queue.shift()
  }
  public size(): number {
    return this.queue.length
  }
  public isEmpty(): boolean {
    return this.queue.length === 0
  }
  public isFull(): boolean {
    return this.queue.length === this.limit
  }
  public peek(): T | undefined {
    return this.queue[0]
  }
  public clear(): void {
    this.queue = []
  }
  public getQueue(): T[] {
    return this.queue
  }
}
