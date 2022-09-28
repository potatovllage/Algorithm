# 스택(Stack)

스택(Stack)은 제한적으로 접근할 수 있는 나열 구조이다.  스택은 한 쪽 끝에서만 자료를 넣거나 뺄 수 
있는 선형 구조 **LIFO(Last In First Out)**으로 되어 있다. 자료를 넣는 것을 **push**라고 하고 반대로
넣어둔 자료를 꺼내는 것을 **pop**이라고 하는데, 이때 꺼내지는 자료는 가장 최근에 push한 자료부터 
나오게 된다. 이처럼 나중에 넣은 값이 먼저 나오는 것을 LIFO 구조라고 한다.



## 스택(Stack)의 연산

스택(Stack)은 LIFO를 따른다. 즉, 가장 최근에 스택에 추가한 항목이 가장 먼저 제거될 항목이다. 

* pop(): 스택에서 가장 위에 있는 항목을 제거한다.
* push(item): item 하나를 스택의 가장 윗 부분에 추가한다.
* peek():  스택의 가장 위에 있는 항목을 반환한다.
* isEmpty(): 스택이 비어 있을 때에 true를 반환한다.



## JS에서의 스택 구현

```javascript
class Stack {
  constructor() {
    this._arr = [];
  }
  push(item) {
    this._arr.push(item);
  }
  pop() {
    return this._arr.pop();
  }
  peek() {
    return this._arr[this._arr.length - 1];
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.pop(); // 3
```

