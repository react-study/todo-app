import React from 'react';
import { render } from 'react-dom';
import Parent from './Parent';
import Child from './Child'
import LifeCycleParent from './LifeCycleParent';

render(
    <LifeCycleParent />
    , document.getElementById('root')
);
