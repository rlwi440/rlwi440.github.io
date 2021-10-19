---
title: Array type별 (Method정리)
date: 2021-10-06 22:10:80
category: javascript
thumbnail: { ./images/Deep Dive.png }
draft: false
---

![모던자바스크립트](./images/Deep Dive.png)

### 정리안된부분 정리

- Array.of 메서드 는 전달된 인수를 요소로 갖는배열 생성

```tsx
Array.of(1) // [1]
Array.of(1, 2, 3) // [1,2,3]
Array.of('string') //['string']
```

- Array.from 메서드 는 유사배열객체 ,이터러블 객체를 인수로 전달받아 배열로 변환하여 반환

```tsx
//유사 배열객체를 변환하여 배열 을생성
Array.from({ length: 2, 0: 'a', 1: 'b' }) // ['a','b']
//이터러블을 변환하여 배열을 생성
Array.from('Hi') //['H','i']
```

- Array.isArray메서드는 전달된 인수가 배열이면 true, 배열이아니면 false

```tsx
//true
Array.isArray([])
Array.isArray([1, 2])

//false
Array.isArray()
Array.isArray({})
```

- Array.entries 매서드는 배열의 각 인데스에 대한 K/V 새로운 객체 를 반환한다.

```tsx
const array1 = ['a', 'b', 'c']

const iterator1 = array1.entries()

console.log(iterator1.next().value)
console.log(iterator1.next().value)
```

- Array.fill 매서드 는 배열의 시작 인덱스 부터 끝 인덱스 이전까지 정적인 값 하나로 채운다.

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

*참고 :[MDNV 문서](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array)
