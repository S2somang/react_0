const path = require('path'); // 외워라
// path : 노드에서 경로를 쉽게 조작하도록 만들어줌 , 노드깔려있음 자동으로 깔려있음

module.exports={ 
    name: 'word-relay-setting', 
    mode: 'development', // 실서비스 : production
    devtool: 'eval', // 빠르게하겠다~
    resolve:{
        extensions: ['.js','.jsx'] // 여기서 써주면 웹팩이 알아서 찾아서 사용함
    },

    // 중요!
    entry: {
        app:['./client'], // 확장자도 쓸필요없다.. 위에 resolve안에 쓰면됨
        //(client에서)이미 다른 파일(wordRelay)이 불러오고있는 파일은 따로 불러올 필요가 없음
        // client.jsx에게 ,'WordReplay.jsx'가 있음
    },// 입력

    module :{
        rules :[{
            test : /\.jsx?/,  //규칙을 정할 파일등
            loader : 'babel-loader',
            options : {
                presets : [
                    '@babel/env',
                    '@babel/react'
                ],
                plugins: [ '@babel/plugin-proposal-class-properties'],
            },
        }],
    }, 

    output:{
        path : path.join(__dirname,'dist'),
        // __dirname : 현재폴더 . 안의 'dist'폴더
        // C:users\... 앞의 경로가 다 다른데, 현재 폴더안에 dist폴더를 자동으로 만들어줌. 
        filename : 'app.js'
    },// 출력
}// 이곳 설정만 잘해주면 알아서 파일을 합쳐줌
// entry에있는 파일을 읽고 거기에 모듈을 적용한 후 output에 뺀다