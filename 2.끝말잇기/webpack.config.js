const path = require('path'); // 외워라
// 노드에서 경로를 쉽게 조작하도록 만들어줌 , 노드깔려있음 자동으로 깔려있음

module.exports={ 
    name: 'word-relay-setting', 
    mode: 'development', // 실서비스 : production
    devtool: 'eval', // 빠르게하겠다~
    resolve:{
        extensions: ['.js','jsx']
    },

    // 중요!
    entry: {
        app:['./client'], // 확장자도 쓸필요없다.. resolve안에 쓰면됨
        // 이미 다른 파일이 불러오고있는 파일은 따로 불러올 필요가 없음
        // client.jsx에게 ,'WordReplay.jsx'가 있음
    },// 입력
    output:{
        path : path.join(__dirname,'dist'),
        // __dirname : 현재폴더 . 안의 'dist'
        filename : 'app.js'
    },// 출력
}