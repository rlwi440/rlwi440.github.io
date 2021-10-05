---
title: Vue Basic(SPA 와  History mode 와 Hash mode)
date: 2021-09-27 22:09:48
category: Vue
thumbnail: { ./images/SPA(Single Page Application).png }
draft: false
---

![SPA](./images/SPA(Single Page Application).png)

# Vue.Js 란

- 웹 페이지 화면을 개발하기 위한 프론트엔드 프레임워크 기반이다.
- 컴포넌트 기반으로 SPA(Single Page Application)를 구축할 수 있게 해주는 프레임워크이다.

## SPA 란

**한개의 페이지 로 이루어진 어플리케이션을 명칭한다.**

- index.html (메인페이지)를 한개페이지를 보여주기위한 예제입니다.

## 1-1.Hash Mode Vs History Mode 차이점

**Hash Mode**  
Hash mode는 모든 URL을 HASH(#) 형태로 서비스합니다. URL이 변경될 때 페이지가 다시 로드 되지 않는다.

```tsx
export default new VueRouter({ routes })
```

**History Mode**

페이지를 다시로드 하지않고 URl을 탐색할수 가 있다 . SPA의 단일 페이지 클라이언트앱이기 때문에 그렇다.

```tsx
export default new VueRouter({
  routes,
  mode: 'history',
})
```

정확한 히스토리 모드는 [History Mode](https://router.vuejs.org/kr/guide/essentials/history-mode.html#%EC%84%9C%EB%B2%84-%EC%84%A4%EC%A0%95-%EC%98%88%EC%A0%9C) 정확한
히스토리 문서를 통해 확인할수가있습니다.

- 참조 : [[VUE] SPA 웹 프론트앤드 개발을 위한 정리](https://okky.kr/article/831473) 를 참조하였습니다.
