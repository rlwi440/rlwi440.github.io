---
title: JSON
date: 2021-11-11 12:11:97
category: javascript
thumbnail: { ./images/Deep_Dive.png }
draft: false
---

![모던자바스크립트](./images/Deep_Dive.png)

`JSON`은 클라이언트 와 서버 간의 HTTP 통신을 위한 텍스트 데이터 포맷

## JSON.stringfy (클라이언트 ➡️ 서버 )

- 객체를 JSON 포맷의 문자열로 변환한다. 클라이언트 가 서버로 객체를 전송하려면,
  객체를 문자열화 해야하는데 이를 `직렬화` 라고 표현한다.

```tsx
const obj = {
  name: 'Lee',
  age: 20,
  alive: true,
  hobby: ['traceling', 'tennis'],
}
const json = JSON.stringfy(obj)
console.log(typeof json, json)

// JSON.stringfy메서드는 객체뿐만이 아닌 배열도  JSON포맷의 문자열로 가능하다
const arr = [
  { id: 1, content: 'HTML', complete: false },
  { id: 2, content: 'JSON', complete: false },
  { id: 3, content: 'JavaScript', complete: true },
]
const isJson = JSON.stringfy(arr)
console.log(typeof isJson, isJson)
```

## JSON.parse(서버 ➡️ 클라이언트)

- JSON 포맷의 문자열을 객체 변환한다. 서버로부터 클라이언트가 전송된 JSON 데이터는 문자열이다. 이 문자열을 객체로서 사용하려면 JSON 포맷의 문자열을 객체화해야 하는데
  이를 `역직렬화` 라고한다.

```tsx
const obj = {
  name: 'Lee',
  age: 20,
  alive: true,
  hobby: ['traceling', 'tennis'],
}
const json = JSON.porse(obj)
console.log(typeof json, json)

// 객체뿐만이 아닌 배열도  JSON포맷의 문자열로 가능하다
const arr = [
  { id: 1, content: 'HTML', complete: false },
  { id: 2, content: 'JSON', complete: false },
  { id: 3, content: 'JavaScript', complete: true },
]
const isJson = JSON.parse(arr)
console.log(typeof isJson, isJson)
```

[XmlHttpRequest](https://developer.mozilla.org/ko/docs/Web/API/XMLHttpRequest)
XmlHttpRequest 예제는 사이트 를보면서 예제 참고 !✅
