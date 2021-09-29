---
title: 동기 와 비동기 처리의 이해
date: 2021-09-28 22:09:81
category: vue
thumbnail: { thumbnailSrc }
draft: false
---

### 1.동기식 과 비동기식 처리

- 1-1. 동기식 처리 

코드가 작성된 순서대로 실행됩니다. 

```
function a(){
  console.log('a')
}

function b(){
  console.log('b')
}
a() //a
b() //b
```
- 1-2.비동기식 처리 
코드가 작성된 순서와는 상관없이 지정된 순서에 의해 실행됩니다.
비동기 처리 로는 `callback` `promise` 등이 있습니다. 

## callback 

 - 비동기 처리를 하기위한 하나의 패턴으로 콜백함수를사용한다.
 - 전통적인 콜백패턴은 **콜백 헬로 인해 가독성이 나쁘고** 비동기 처리중
   발생한 에러의 처리가 곤란하며 여러개의 비동기처리를 한번에 하는곳에대한 한계도있다
   밑에있는 예제들을 참고하시면 됩니다.

```
function a(cb){
  setTimeout(function(){
    console.log('a')
    cb()
  },1000)
}

function b(cb){
  setTimeout(function(){
    console.log('b')
    cb()
  },1000)
}
function c(cb){
  setTimeout(function(){
    console.log('c')
    cb()
  },1000)
}
function d(cb){
  setTimeout(function(){
    console.log('d')
    cb()
  },1000)
}

a(function(){
  b(function(){
    c(function(){
      d()  // 가독성 과 효율성이 떨어진다.
    })
  })
})

```

## promise 
- promise 객체와 resolve를 할당받은 메소드만이 async와 await 키워드를 사용할 수 있다.
- promise 객체를 부여받은 메소드는 내부에는 resolve() 메소드를 부여한다.
### resolve
- 로직이 마무리 가 되었을때 실행되는 구조입니다.
### reject
- 비동기처리에서 error 가 발생했을때 갖는구조 입니다.

```
  function a(){
    return new Promise((resolve,reject) => {
      if(isError){
        reject(Error)
      }
      setTimeout(()=>{
        console.log('a')
        resolve('done')
      },1000)
    })
  }
```

### promise 에외처리
- promise의 기본적인 예외처리는 try,catch를 사용한다.

```
  async function asyncFunc(){
    try{
      const res=  await a () 
      console.log(res)
    } catch (error) {
      console.log(error)
      alert(error.message)
    } finally{
      console.log('done!')
    }
  }

  asyncFunc()
  ```
## async-await 
- 같은 개념이라고 생각하시면 편합니다.
-  async -await 을 사용하는이유 가 `가독성`과 `코드가 간결해 질수가있다`는 장점들이 있다.

```
function a(){
  return new Promise( resolve => {
    setTimeout(function(){
      console.log('a')
      resolve()
    },1000)
  })
}

function b() {
  return new Promise( resolve =>{
    setTimeout(function(){
      console.log('b')
      resolve()
    },1000) 
  })
}
function c() {
  return new Promise( resolve =>{
    setTimeout(function(){
      console.log('c')
      resolve()
    },1000) 
  })
}
function d() {
  return new Promise( resolve =>{
    setTimeout(function(){
      console.log('d')
      resolve()
    },1000) 
  })
}
a()
  .then(() => b())
  .then(() => c())
  .then(() => d())
```
###  async, await없아 비동기처리 하기 
 -then(): resolve() 가 실행되고 난 뒤 동작할 코드 
 - catch(): 에러 또는 연산실패 를 동작할 코드
 - finally(): promise의 결과에 상관없이  promise 실행후 동작할 


 ```
 
  function a(){
    return new Promise((resolve,reject) => {
      if(isError){
        reject(Error)
      }
      setTimeout(()=>{
        console.log('a')
        resolve('done')
      },1000)
    })
  }

  a() 
  .then((res)=>{
    console.log(res)
  })
  .catch((error)=>{
      console.log(error)
      alert(error.message)
  })
  .finally(()=>{

  })
```

### 정리한 이유  

> 1.동기 와 비동기 처리의 이해 를 정리하는 글을 올리게되었습니다.  
> 2.실무에서 많이 사용하는 예제이며 ,핵심내용이기에 정리 해보았습니다.
> 3.MovieApp을 만들면서 필요한 예제들은 프로젝트 업로드 후 정리해서 코드와 같이 업로드 하겠습니다.