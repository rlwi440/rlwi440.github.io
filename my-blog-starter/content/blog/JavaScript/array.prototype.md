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

-Array.isArray메서드는 전달된 인수가 배열이면 true, 배열이아니면 false

```tsx
//true
Array.isArray([])
Array.isArray([1, 2])

//false
Array.isArray()
Array.isArray({})
```

> Array 타입별 정리 요약  
> Array 정리별 부족했던 부분들을 채우기 위해  
> 모던자바스크립트 DeepDive 참고
