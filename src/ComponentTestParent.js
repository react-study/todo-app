import React, { Component } from 'react';
import ComponentTest from './ComponntTest';

class ComponentTestParent extends Component {
    constructor(){
        super();
        this.state = {
            list : [0]
        }
    }
    
    addChild(){
        const nextList = [...this.state.list];
        nextList.push(nextList.length);
        this.setState({list: nextList});
    }
    
    removeChild(){
        const nextList = [...this.state.list];
        nextList.pop();
        this.setState({list:nextList});
    }
    
    render(){
        if(!this.state.list.length){
            return(
                <button onClicl = {()=>this.addChild()}>
                    자식추가
                </button>
            )
        }
        return (
            <div>
                <ComponentTest list = {this.state.list} />
                <button onClick = {()=>this.addChild()}
                    자식추가
                </button>
                <button onClick = {()=>this.removeChild()}
                    자식삭제
                </button>
            </div>
        )
    }


}

export default ComponentTestParent;
