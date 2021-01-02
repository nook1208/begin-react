# Instroduction to React
기본적인 React 의 기능들을 하나씩 사용해본다.

## How to Run 
```
yarn start
```
Runs the app in the development mode.

## Terminology
### JSX
JSX 는 리액트에서 생김새를 정의할 때 사용하는 문법  
e.g.) HTML 같아도 실제론 자바스크립트이다. 
```javascript
return <div>안녕하세요</div>;
```

### Babel
Babel 은 자바스크립트의 문법을 확장해주는 도구이며 리액트 컴포넌트 파일에서 XML 형태로 코드를 작성하면 babel 이 JSX 를 JavaScript 로 변환을 해줌  

## Knowledge of React
### 불변성 지키기
리액트에서 객체를 업데이트하게 될 때에는 기존 객체를 직접 수정하면 안되고, 새로운 객체를 만들어서, 새 객체에 변화를 주어야 한다.  
```javascript
// X
inputs[name] = value;

// O
setInputs({
      ...inputs,
        [name]: value
        });

```

### 동적 배열에서 Key 존재 유무에 따른 업데이트 방식
```javascript
const array = ['a', 'b', 'c', 'd'];

array.map(item => <div>{item}</div>);
```
위 배열의 b 와 c 사이에 z 를 삽입하게 된다면, 리렌더링을 하게 될 때 <div>b</div> 와 <div>c</div> 사이에 새 div 태그를 삽입을 하게 되는 것이 아니라, 기존의 c 가 z 로바뀌고, d 는 c 로 바뀌고, 맨 마지막에 d 가 새로 삽입됨.  

```javascript
const array = [
  {
    id: 0,
    text: 'a'
  },
  {
    id: 1,
    text: 'b'
  },
  {
    id: 2,
    text: 'c'
  },
  {
    id: 3,
    text: 'd'
  }
];

array.map(item => <div key={item.id}>{item.text}</div>);
```
위와 같이 key 가 있으면 배열이 업데이트 될 때 key 가 없을 때 처럼 비효율적으로 업데이트 하는 것이 아니라, 수정되지 않는 기존의 값은 그대로 두고 원하는 곳에 내용을 삽입하거나 삭제한다고 함.  
