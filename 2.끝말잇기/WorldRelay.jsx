const React = require('react'); // 사용하는 얘를 npm에서 불러와야함
const {Component} = React;

class WordRelay extends Component{
    state ={
        // 컴포넌트 안써도 됨!
        text : 'Hello, webpack'
    };
    render(){
        return <h1>{this.state.text}</h1>
    }
}

module.exports = WordRelay; // 파일을 쪼개는 경우 필수로 적어줘야함
// 쪼갠파일에서 만든 컴포넌트를 밖에서 사용할 수 있게 하는 것