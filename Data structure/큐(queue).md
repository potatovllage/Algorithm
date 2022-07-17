# 큐(queue)

**큐(queue)**는 컴퓨터 과학 분야에서 쓰이는 컴퓨터의 기본적인 자료 구조의 한가지로,
먼저 집어 넣은 데이터가 먼저 나오는 **FIFO(First In First Out)**구조로 저장하는 형식을 말한다.
나중에 집어 넣은 데이터가 먼저 나오는 **스택**과는 반대되는 개념이다



## 큐의 용어

큐(queue)는 put,get을 이용하여 구현된다. **put**은 큐에 자료를 넣는 것을 **get**은 큐에서 자료를
꺼내는 것을 의미한다. 또한 **front**와 **tail**이 있다 두 용어는 위치를 가리킨다. front는 데이터를
get할 수 있는 위치를 tail은 데이터를 put 할 수 있는 위치를 의미한다. 그리고 큐가 꽉 차서
더 이상 자료를 넣을 수 없는 경우 즉 put 할 수 없는 경우를 **오버플로우(Overflow)**라 하고
반대로 꺼낼 수 없는 경우를 **언더플로우(Underflow)**라고 한다.



## 큐의 종류

* **선형 큐**
  * 막대 모양으로 된 큐이다. 크기가 제한되어 있고 빈 공간을 사용하려면 모든 자료를 꺼내거나
    한 칸씩 옮겨야 한다는 단점이 있다.
* **환형 큐**
  * 선형 큐의 문제점을 보완한 것이 환형 큐이다. front가 큐의 끝에 닿으면 큐의
    맨 앞으로 자료를 보내어 원형으로 연결하는 방식이다.



## JS에서의 큐 구현

```javascript
class Queue {
  constructor() {
    this._arr = [];
  }
  enqueue(item) {
    this._arr.push(item);
  }
  dequeue() {
    return this._arr.shift();
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.dequeue(); // 1
```

