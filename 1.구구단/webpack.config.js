const path = require('path');

module.exports={ 
    mode : 'development',
    devtool : 'eval', // hidden-source-map
    resolve:{
        extensions: ['.jsx','.js'],
    },

    entry:{
        app: './client',
    },
    module : {
        rules: [{
            test: /\.jsx?/,
            loader: 'babel-loader',
            options:{
                presets : [ // 기본적으로는 얘만 하지만 실행시 플러그인 에러가 난다면 해당 플러그인도 같이 써주자
                    '@babel/env',{ // 자동으로 옛날 브라우저를 지원해주는 얘. 좀더 구체적으로 써줄 수 있음
                        targets:{
                            browsers:['> 5% in KR' ,'last 2 chrome versions'],
                        },
                    },
                    '@babel/react'
                ],
            },
        }],
    },
    output :{
        filename : 'app.js',
        path : path.join(__dirname,'dist'),
    },
} // 예전에 했던 세팅들이 재탕되는즁 )) 