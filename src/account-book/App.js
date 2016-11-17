import './style/index.css';

import React, { Component } from 'react';

import Input from './component/Input';
import Button from './component/Button';
import List from './component/List';

import initialState from './data/data';

export default class AccoutBook extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    }

    input() {
        let {
            total,
            input,
            output = 0,
        } = this.state;

        this.state.total = Number(total) + Number(input);

        this.state.list.push({
            input,
            output,
            remain: this.state.total
        });

        this.state.input = 0;

        this.setState({
            ...this.setState
        });
    }

    output() {
        let {
                total,
                input = 0,
                output,
                } = this.state;

        this.state.total = Number(total) - Number(input);

        this.state.list.push({
            input,
            output,
            remain: this.state.total
        });

        this.state.input = 0;

        this.setState({
            ...this.setState
        });
    }

    change(e) {
        this.setState({
            ...this.state,
            input: e.target.value
        });
    }

    render() {
        return (
            <div className="content">
                <header className="function-wrap">
                    <Input
                        className="input"
                        type="number"
                        value={this.state.input}
                        onChange={e => this.change(e)}
                    />
                    <Button
                        className="input-btn"
                        value="입금"
                        onClick={e => this.input(e)}
                    />
                    <Button
                        className="output-btn"
                        value="출금"
                        onClick={e => this.output(e)}
                    />
                </header>

                <List { ...this.state } />
            </div>
        );
    }
}