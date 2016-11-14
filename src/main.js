import React from 'react';
import { render } from 'react-dom';
// 이걸하면 router 모듈중에 이런것들을 가져다 쓴다. Router, route, browserHistory가 무얼 하는지는 아직 모름
import { Router, Route, browserHistory } from 'react-router'

import App from './App';

render(
	// restApi랑 비슷하다고 해야되나... 실질적으로 url 주소가 바뀌는것과는 다른데 parameter를 던지는 개념인듯.
    <Router history={browserHistory}>
        <Route path="/(:filter)" component={App} />
    </Router>
    , document.getElementById('root')
);
