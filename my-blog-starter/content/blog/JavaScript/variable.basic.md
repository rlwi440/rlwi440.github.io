---
title: JavaScript 문법공부 (Const,let,var)
date: 2021-09-28 12:09:61
category: javascript
thumbnail: { thumbnailSrc }
draft: false
---

![모던자바스크립트](./images/Deep Dive.png)

## 변수 선언방식은 총 3 가지 가 있습니다.

### var,let,const 차이점 5가지

1.중복선언 가능여부  
 2.재활당 가능여부  
 3.변수 스코프 유효범위  
 4.변수 호이스팅 방식  
 5.전역객체 프로퍼티 여부

### 1.중복선언

1.var:중복선언이 가능하다 .

```
// 첫번째 변수 var a = 10; console.log(a); // 10
//두번째 변수 var a = 20; console.log(a); // 20
```

2.const,let : 중복선언 불가능

```tsx
let a = 10
let b = 10 // SyntaxError: Identifier 'a' has already been declared
```

### 2.재할당

2-1.var,let : 값의 재할당이'가능'한 변수다

```tsx
var a = 10
a = 20
console.log(a) //20

let b = 10
b = 20
console.log(b) //20
```

2.const: 값의 재할당 이'불가능' 한 상수다.

```tsx
const c = 10
c = 20 // TypeError: Assignment to constant variable.
```

### 3.스코프

3-1.스코프 **(유효범위)**를 통해 식별자인 변수이름의 충돌을 방지하여 같은이름의 변수를 사용할수있다

1.함수 레벨 스코프

```tsx
var x = 1
if (true) {
  // x 는 전역변수이며 , 이미 선언된 전역변수 x가 있으며 x 변수는 중복선언된다.
  var x = 10
}
console.log(x) // 10
var i = 10
for (var i = 0; i < 5; i++) {
  // i 는 전역변수이며 , 이미 선언된 전역변수 i 가 있으며 i 변수는 중복선언된다.
  console.log(i) //0 1 2 3 4 5
}
Console.log(i) //5
```

1-1.전역과 전역 스코프

- 전역에서 선언된 변수는 전역 스코프를 갖는 전역변수
- 지역에서 선언된 변수는 지역 스코프를 갖는 지역변수

```tsx
var x = 'global x' // 전역스코프
var y = 'global y'

function outer() {
  //지역 스코프
  var z = 'outer local z'
  console.log(x) //
  console.log(y)
  console.log(z)
  function inner() {
    //지역 스코프
    var x = 'outer local x'

    console.log(x)
    console.log(y)
    console.log(z)
  }
  inner()
}
outer()

console.log(x)
console.log(z)
```

1-2.렉시컬 스코프

- 렉시컬 스코프가 헷갈린다면 스코프 체인 예제를 찾아보길 권장합니다.

```tsx
var x = 1

function foo() {
  var x = 10
  bar() // 함수를 어디서 호출했는지에 따라 함수 상위 스코프를 결정
}
function bar() {
  //함수를 어디서 정의했는지에 따라 함수 상위 스코프를 결정
  console.log(x)
}
foo()
bar()
```

- 첫번째 방식은 동적스코프 (Dynamic Scope)
- 두번째 방식은 정적스코프 (static Scope)

### 4.호이스팅

자바스크립트는 코드를 실행하기전 , 일종의 **코드 평가 과정** 거치는데
이 때 '변수 선언문'을 미리 실행두기 때문에 뒤에서 선언된 변수도 앞의 코드에서 참조할 수 있게 된다.
이를 변수 호이스팅이라고 한다.

4-1.var:변수 호이스팅이 발생

```tsx
// foo 변수가 선언(1.선언단계)
// (2.초기화 단계)
console.log(foo) // undefined
//(3.할당 단계)
foo = 123
console.log(foo)
var foo
```

4-2.let,const 변수 호이스팅이 발생 하지만 다른방식으로 작동

let/const로 변수를 선언하는 경우,

코드 실행 전에는

1. 변수 선언
2. 초기화는 코드 실행 과정에서 변수 선언문을 만났을 때 수행이 가능하다.

```tsx
console.log(bar) // ReferenceError: bar is not defined
let bar = 10
```

### 5.전역객체 프로퍼티여부

- var 키워드로 선언한 전역변수는 전역객체의 window의프로퍼티로 이다.

```tsx
var x = 1
console.log(window.x) //1
```

-let 키워드로 선언한 전역변수는 전역객체의 window 의 프로퍼티가 아니다.

```tsx
let x = 1
console.log(window.x)
console.log(x)
```
