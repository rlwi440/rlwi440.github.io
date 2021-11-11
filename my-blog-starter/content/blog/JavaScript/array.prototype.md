---
title: Array type별 (Method정리)
date: 2021-10-06 22:10:80
category: javascript
thumbnail: { ./images/Deep_Dive.png }
draft: false
---

![모던자바스크립트](./images/Deep_Dive.png)

`Array.proptotype.forEach` 는 for 문을 대체할수 있는 고차 함수 이다.  
`prototype`은 프로토콜 객체이다.  
실무에서 항상 많이 사용하는 예제이다.

```tsx
const numbers = [1, 2, 3]
const pow = []

numbers.forEach(item => pow.push(item ** 2))
```

`Array.prototype.includes` 배열 내에 특정요소가 포함되어 있는지 true 또는 false 를 반환한다.

```tsx
const arr = [1, 2, 3]
arr.includes(2) //true
arr.includes(100) //false
```

- 로또의 최고순위 와 최저순위 프로그래머스 예제 이다
  `filter`를 사용하여 반복호출 호출 후에 `lotto => win_nums.includes(lotto)`  
  true /false 비교를 했습니다.

```tsx
function solution(lottos, win_nums) {
  var answer = []

  const idx = lottos.filter(lotto => win_nums.includes(lotto)).length
  const zero = lottos.filter(lotto => lotto === 0).length // 최저 순위

  let min = 7 - idx >= 6 ? 6 : 7 - idx
  let max = min - zero < 1 ? 1 : min - zero
  answer = [max, min]
  return answer
}
```

`Array.filter`는 자신을 호출한 배열의 모든요소를 순회 하면서 인수로 전달받은
콜백함수 반복호출 `콜백 함수의 반환값이 true인 요소로만 구성된 새로운배열을 반환한다.`

- `constructor`생성자

```tsx
class Users{
  constructor(){
    this.users={
      {id:1,name:'Lee'},
      {id:2,name:'ki'}
    }
  }
  findById(id){
    return users.filter(user=> user.id === id)
  }
  removeId(id){
    this.users = users.filter(user==> user.id===id)
  }
}
const user = new Users()

let user =findById(1)
console.log(user)

user.removeId(1)

user= users.findById(1)
console.log(user)
```

`Array.of` 메서드 는 전달된 인수를 요소로 갖는배열 생성

```tsx
Array.of(1) // [1]
Array.of(1, 2, 3) // [1,2,3]
Array.of('string') //['string']
```

`Array.from` 메서드 는 유사배열객체 ,이터러블 객체를 인수로 전달받아 배열로 변환하여 반환

```tsx
//유사 배열객체를 변환하여 배열 을생성
Array.from({ length: 2, 0: 'a', 1: 'b' }) // ['a','b']
//이터러블을 변환하여 배열을 생성
Array.from('Hi') //['H','i']
```

`Array.isArray` 메서드는 전달된 인수가 배열이면 true, 배열이아니면 false

```tsx
//true
Array.isArray([])
Array.isArray([1, 2])

//false
Array.isArray()
Array.isArray({})
```

`Array.entries` 매서드는 배열의 각 인데스에 대한 K/V 새로운 객체 를 반환한다.

```tsx
const array1 = ['a', 'b', 'c']

const iterator1 = array1.entries()

console.log(iterator1.next().value)
console.log(iterator1.next().value)
```

`Array.fill` 매서드 는 배열의 시작 인덱스 부터 끝 인덱스 이전까지 정적인 값 하나로 채운다.

```tsx
const array1 = [1, 2, 3, 4]

// fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4))
// expected output: [1, 2, 0, 0]

// fill with 5 from position 1
console.log(array1.fill(5, 1))
// expected output: [1, 5, 5, 5]

console.log(array1.fill(6))
// expected output: [6, 6, 6, 6]
```

> Array 타입별 정리 요약  
> Array 정리별 부족했던 부분들을 채우기 위해  
> 모던자바스크립트 DeepDive 참고

참고 :[MDNV 문서](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array)
