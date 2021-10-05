---
title: Jest
date: 2021-10-01 22:10:48
category: Vue
thumbnail: { ./images/JestBlack.png }
draft: false
---

![Jest](./images/JestBlack.png)

### Test 파일 작성규칙

- `__tests__` 폴더에 들어있는 test 파일 들은 작성한다.
- 폴더에 들어있는 test 파일 의 이름은 `테스트파일이름.test.js`로 파일 을 작성한다.

## Vue Test Utils(VTU)

- Vue.js환경에서 단위 테스트를 하기 위한 공식 라이브러리
- 작성한 코드가 제대로 동작하는지 확인할때 사용가능하다.

> test.js 테스트 코드작성 에서는
> Vuetify 가 localVue 인스턴스에서 사용되지 않는다 [Vuetify 문서참조 ](https://vuetifyjs.com/en/getting-started/unit-testing/#bootstrapping-vuetify)

```tsx
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'
import store from '@/store'
import SearchBar from '../SearchBar'

const localVue = createLocalVue()
localVue.use(Vuetify)

describe('SearchBar Component', () => {
  let wrapper
  beforeEach(() => {
    // 설정
    wrapper = shallowMount(SearchBar, {
      localVue,
      store
    })
  })

```

## 단위 테스트

단위(Unit) 테스트 란 상태,메소드,컴포넌트 등의 정의된 프로그램 최소 단위들이 독립적으로
정상 동작하는지 확인하는것을 말하며,이를 통해 프로그램 전체의 신뢰도를 향상하고 코드 리팩터링(Code refactoring)의 부담을 줄일수가있다

### 모듈 설명

|      모듈      | 설명                                                          |
| :------------: | ------------------------------------------------------------- |
|    **jest**    | 페이스북에서 만든 테스트 프레임워크                           |
|  **vue-jest**  | Vue 파일을 Jest가 실행할 수 있는 자바스크립로 컴파일한다.     |
| **babel-jest** | JS/JSx 파일을 Jest가 실행할 수있는 자바스크립로 컴파일합니다. |

## jest.config.js 설정

```tsx
module.exports = {
  // 파일 확장자를 지정하지 않은 경우, Jest가 검색할 확장자 목록입니다.
  // 일반적으로 많이 사용되는 모듈의 확장자를 지정합니다.
  moduleFileExtensions: ['js', 'jsx', 'json', 'vue'],
  // `@` 같은 경로 별칭을 매핑합니다.
  // E.g. `import SearchBar from '@/components/SearchBar'`
  // `<rootDir>` 토큰을 사용해 루트 경로를 참조할 수 있습니다.
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  // 일치하는 경로에서는 모듈을 가져오지 않습니다.
  // `<rootDir>` 토큰을 사용해 루트 경로를 참조할 수 있습니다.
  modulePathIgnorePatterns: [
    '<rootDir>/node_modules',
    '<rootDir>/build',
    '<rootDir>/dist',
  ],
  // 정규식과 일치하는 파일의 변환 모듈을 지정합니다.
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.jsx?$': 'babel-jest',
  },
  // 각 테스트 파일이 실행되기 전,
  // 테스트 프레임워크를 구성하거나 설정하기 위해,
  // 일부 코드 실행 모듈의 경로를 지정합니다.
  setupFilesAfterEnv: ['./jest.setup.js'],
}
```

### Globals 의 자주 사용되는종류

|                |                                                                                                                                                                |
| :------------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  **describe**  | 그룹으로 정의하고 목적에 맞는 세부 테스트를 진행할때 사용한다.                                                                                                 |
|    **test**    | 테스트 파일에 필요한테스트 `test`를 실행하는 메서드, 첫번째 인수로는 `name` 테스트이름 , `fn` 테스트할 콜백함수 `timeout` 밀리초단위 **참고 기본제한시간:5초** |
|  **afterAll**  | 모든 테스트가 완료된 후 함수를 실행합니다.                                                                                                                     |
| **beforeAll**  | 테스트가 실행되기전에 함수를 실행합니다.                                                                                                                       |
| **beforeEach** | 테스트에서 사용할 전역 상태를 재설정하려는 경우에 유용 (기본시간제한은 5초)                                                                                    |
| **afterEach**  | 테스트가 완료된 후 함수를 실행 테스트에서 생성된 일부임시상태를 정리 하려는경우 사용한다.                                                                      |

### Test Matcher의 자주 사용되는 종류 (Update.2021.10.03)

|     모듈      | 설명                                                               |
| :-----------: | ------------------------------------------------------------------ |
|   **toBe**    | 숫자,문자열 같은 객체가 아닌 기본형 (primitive)값을 비교할 때 사용 |
|  **toEqual**  | 객체 모든속성을 재귀적으로 비교하는데 사용한다.                    |
| **toContain** | 객체 모든속성을 재귀적으로 비교하는데 사용한다.                    |

### toEqual 과 toBe 차이

- toBe는 값이 정확히 같은지 비교
- toEqal 는 객체결과를 비교

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

### mocks

- 호출 jest.mocks 클래스 생성자 와 모든 메서드 에 대한 호출을 감시하는 `자동모의`를 반환한다.

```tsx
//실제 사용한 예제
import movie from '../movie'
import cloneDeep from 'lodash/cloneDeep'
import axios from 'axios'
//가짜 모듈 만들기
jest.mock('axios')
describe('movie store', () => {
  let store
  beforeEach(() => {
    store = cloneDeep(movie)
    store.state = movie.state()
    //this.$store.commit('NAME',payload)
    store.commit = function(name, payload) {
      store.mutations[name](store.state, payload)
    }
    //this.$store.dispatch('searchMovies' ,payload)
    //return store.actions 비동기 처리 만듬
    store.dispatch = function(name, payload) {
      const context = {
        state: store.state,
        commit: store.commit,
        dispatch: store.dispatch,
      }
      return store.actions[name](context, payload)
    }
  })
  test('state 가 정상적으로 업데이트 ', () => {
    store.commit('updateState', {
      loading: true,
      title: 'Hello!',
      movies: [1, 2, 3],
    })
    expect(store.state.loading).toBe(true)
    expect(store.state.title).toBe('Hello!')
    expect(store.state.movies).toEqual([1, 2, 3])
  })

  test('영화목록에 push', () => {
    expect(store.state.movies).toEqual([])
    store.commit('pushIntoMovies', [{ Title: '영화 제목' }])
    expect(store.state.movies).toEqual([{ Title: '영화 제목' }])
  })
  test('영화목록 을 가져왔을때', async () => {
    axios.get.mockResolvedValue({
      data: {
        totalResults: '1',
        Search: [
          {
            imdbID: '123456',
            Title: '영화 제목',
            Poster: 'image.jpg',
            Year: '2021',
          },
        ],
      },
    })
    await store.dispatch('searchMovies')
    expect(store.state.movies).toEqual([
      {
        imdbID: '123456',
        Title: '영화 제목',
        Poster: 'image.jpg',
        Year: '2021',
      },
    ])
  })
  test('영화 목록을 가져오지 못했을 때', async () => {
    axios.get.mockRejectedValue(new Error('Network Error!'))
    await store.dispatch('searchMovies')
    expect(store.state.error).toEqual(new Error('Network Error!'))
  })
})
```

> 실제로 공부하면서 사용한 예제 이며 공부한 내용들을 기록하고 싶어서 적어놓게 되었습니다.
> 공부하기 좋은예제라 생각하게 되어 블로그를 쓰게 되었습니다.
> 공부하면서 버전관리 가 중요하다는것 깨달았습니다.

- 참조문서
  1. [Jest 참조](https://jestjs.io/docs/api)
  2. [Vuetify](https://vuetifyjs.com/en/getting-started/unit-testing/)
