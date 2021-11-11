---
title: Symbol
date: 2021-11-11 12:11:73
category: javascript
thumbnail: { ./images/Deep_Dive.png }
draft: false
---

![모던자바스크립트](./images/Deep_Dive.png)

### 심벌값은 `Symbol` 함수는 ES6에서 도입된 7번째 데이터 타입 으로 변경 불가능한 원시타입의 값 이다 .

```tsx
const symbol = new Symbol()
console.log(typeof symbol) // symbol
//심벌 값에 대한 설명이 같더라도 유일무이한 심벌 값을 생선한다.
const mySymbol1 = symbol('mySymbol')
const mySymbol2 = symbol('mySymbol')

console.log(mySymbol1 === mySymbol2) //false
```

`Symbol.for` 메서드는 인수로 전달받은 문자열을 키로 사용 하여 키와 심벌 값의 쌍들이
저장되어 있는 전역 심벌 레지스토리 에서 해당 키와 일치하는 심벌 값을 검색한다.

```tsx
const s1 = symbol.for('mySymbol')
const s2 = symbol.for('mySymbol')

console.log(s1 === s2) //true

Array.prototype[Symbol.for('sum')] =function (){
  return this.reduce = ((acc+cur)=> acc+cur,0)
}
[1,2][Symbol.for('sum')]() //3

```
