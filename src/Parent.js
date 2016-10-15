import React, {Component} from 'react';
import Child from './Child';

const data = [
	
	{ gender : 'male'  , name  : 'gomugom' , phone : '010-1111-2222' , show  : false },
    { gender : 'male'  , name  : 'iu'	   , phone : '010-2222-3333' , show  : false },
	{ gender : 'female', name  : 'akmu'    , phone : '010-1133-3245' , show  : false }
];
       
export default class Parent extends Component{

    render(){

        const children = data.map(({gender, ...v},i) => (
            <Child
				key = {'Child'+i}
				name = {'person '+ name}
				{...v}
            />
        ));
        return(
            <ul>
                {children}
            </ul>
        )
    }
}
