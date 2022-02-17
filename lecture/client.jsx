const React = require('react');
const ReactDom = require('react-dom'); 
// 예전엔 스크립트로 불러왓지만 노드모듈을 이용하면 위처럼 불러올 수 있음

// class WordRelay extends React.Component{
//     state ={
//         // 컴포넌트 안써도 됨!
//     };
//     render(){

//     }
// }
// 위처럼 class를 사용해도 되지만 페이스북처럼 클래스가 2만개가 되면 감당할 수 있을까,,?  NO
// => 다른 파일로 쪼개주자! worldRelay.jsx파일 생성

const WordRelay = require('./WorldRelay');
// 필요한 파일만 가져오기때문에 효율적임

ReactDom.render(<WordRelay/>, document.querySelector('#root')) 
//안에 jsx문법을 사용할거라면 파일 확장자를 jsx로 해주는것이 좋음
// jsx확장자로 이 파일이 리액트를 사용한다고 알려줄 수있음
