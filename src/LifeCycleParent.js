/**
 * Created by imcts on 2016. 10. 15..
 */
import React, { Component } from 'react';
import LifeCycle from './LifeCycle';

export default class LifeCycleParent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list: []
        };
    }

    addChild() {
        const nextList = [...this.state.list];
        nextList.push(nextList.length);
        this.setState({
            list: nextList
        });
    }

    removeChild() {
        const nextList = [...this.state.list];
        nextList.pop();
        this.setState({
            list: nextList
        });
    }

    render() {
        if(!this.state.list.length) {
            return (
                <button onClick={() => this.addChild()}>자식추가1</button>
            );
        }

        return (
            <div>
                <LifeCycle list={this.state.list} />
                <button onClick={() => this.addChild()}>자식추가</button>
                <button onClick={() => this.removeChild()}>자식삭제</button>
            </div>
        );
    }
}