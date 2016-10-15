import React from 'react';
import { render } from 'react-dom';
import Parent from './Parent'
import ComponentTestParent from './ComponentTestParent'

render(
    <Parent a={10} b={20}/>
    , document.getElementById('root')
);
