import React, { Component } from 'react';

export default class List extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            list
        } = this.props;

        console.log(list);

        return (
            <div className="list-container">
                <ul>
                    <li>
                        <span className="list-title">입금</span>
                        <span className="list-title">출금</span>
                        <span className="list-title">총액</span>
                    </li>


                    {
                        list.map(o => (
                            <li className="list">
                                <span className="list__text">{o.input} 원</span>
                                <span className="list__text">{o.output} 원</span>
                                <span className="list__text">{o.remain} 원</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}