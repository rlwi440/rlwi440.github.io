---
title: Jest
date: 2021-10-01 22:10:48
category: vue
thumbnail: { ./images/JestBlack.png }
draft: false
---

![lifecycle](./images/JestBlack.png)

### Vue Test Utils(VTU)

- Vue.js환경에서 단위 테스트를 하기 위한 공식 라이브러리
- 작성한 코드가 제대로 동작하는지 확인할때 사용가능하다.

### Test 파일 작성규칙

- `__tests__` 폴더에 들어있는 test 파일 들은 작성한다.
- 폴더에 들어있는 test 파일 의 이름은 `테스트파일이름.test.js`로 파일 을 작성한다.

### 단위 테스트

단위(Unit) 테스트란 상태, 메소드, 컴포넌트 등의 정의된 프로그램 최소 단위들이 독립적으로 정상 동작하는지 확인하는 것을 말합니다.
이를 통해 프로그램 전체의 신뢰도를 향상하고 코드 리팩토링(Code refactoring)의 부담을 줄일 수 있습니다.

### mount 와 shallwmount 차이

- mount는 하위컴포넌트 까지 전달
- shallowmonunt는 stub 이 된다. 가짜 컴포넌트 전달이 가능 합니다.

```tsx
//describe 그룹화
describe('HelloWorld Component', () => {
  test('mounting', () => {
    // mount 는 하
    const wrapper = mount(HelloWorld)
    console.log(wrapper.html())
    expect(wrapper.text()).toBe('HelloWorld!')
  })
  test('shallowMount', () => {
    const wrapper = shallowMount(HelloWorld)
    console.log(wrapper.html())
    expect(wrapper.text()).toBe('Hello')
  })
})
```

### Test Matcher의 종류 (Update.2021.10.03)

|          |                                                                    |
| :------: | ------------------------------------------------------------------ |
| **toBe** | 숫자,문자열 같은 객체가 아닌 기본형 (primitive)값을 비교할 때 사용 |

\*참조 : [Jest 참조](https://jestjs.io/)
