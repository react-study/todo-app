import React from 'react';
import { render } from 'react-dom';
import App from './App';

// root라는 껍데기 안에 app이라는 최상위 컴포넌트를 던진다. App.js 자체는 객체이다.
render(
    <App />,
    document.getElementById('root')
);