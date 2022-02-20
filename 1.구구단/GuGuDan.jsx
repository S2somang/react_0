const React = require('react');
const ReactDOM = require('react-dom');
const {useState, useRef} = React; // 구조분해 문법 사용

const GuGuDan = () => { 
    //함수 컴포넌트. 보통 안에서 setState와 ref를 할 필요가 없는 경우에 사용했음. 깔끔.
    // but, 여기서도 setState와 ref를 사용할 수 있게 해달라함
    // 그래서 쓸수 있게 만들어준게 바로 react Hooks!
    // 함수 컴포넌트 + setState + ref = Hooks
    // 리액트르 Hooks를 더 권장한다.!
    //    [ state , setState ]
    // 변수자리에 [] , {}를 쓰는 것을 비구조화할당 === 구조분해할당이라 부름
    const [first, setFirst] = useState(Math.ceil(Math.random()*9));
    const [second, setSecond] = useState(Math.ceil(Math.random()*9));
    const [value, setValue] = useState('');
    const [result, setResult] = useState(''); // 컴포넌트 안에 꼭 들어가있어야함
    const inputRef = useRef(null); // ref

    // class에서는 하나로 묶어줬지만 Hooks는 하나씩 분리하는게 좋음!
    // return <div>{first} {second} {value} {result} </div>;

    // onChange같은 이벤트 리스너는 클레스가 없어서 클래스때처럼 사용할 수 없음
    // 아래처럼 함수를 만들어서 넣어주면 됨!!
    const onChangeInput =(e) => {
        setValue(e.target.value); 
    };

    const onSubmitForm = (e) => {
        e.preventDefault();
        if (parseInt(this.state.value) === this.state.first * this.state.second) {
            setReault('정답: ' + value);
            setFirst(Math.ceil(Math.random() * 9));
            setSecond(Math.ceil(Math.random() * 9));
            setValue('');
            inputRef.current.focus();
        }else {
            setResult('땡');
            setVlaue('');
            inputRef.current.focus();
        }
    }

    return (
        <>  {/* <- fragment 대신 사용할 수있음 */}
            <div>{first} 곱하기 {second} </div>
            <form onSubmit={onSubmitForm}>
                <input ref={inputRef} onChange={onChangeInput} value={value}/>
                <button> 입력! </button> 
            </form>
            <div id="result">{result}</div>
        </>
    );
}

module.exports= GuGuDan;