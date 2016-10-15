/**
 * Created by imcts on 2016. 10. 15..
 */
import React, { Component } from 'react';

export default class LifeCycle extends Component {


    constructor(props) {
        super(props);
        this.state = {
            toggleColor: false
        };
    }

    componentWillMount() {
        console.log('1. 컴포넌트가 마운트 시작되기 직전');
    }

    componentDidMount() {
        console.log('2. 컴포넌트가 그려졌음');
    }

    componentWillReceiveProps(nextProps) {
        console.log('3. 컴포넌트가 새로운 props을 받을 예정임', nextProps);
    }

    shouldComponentUpdate(prev, next) {
        console.log('4. 컴포넌트 업데이트 여부 결정', next, prev);
        console.log(this.props, this.state);
        return prev !== next;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('5. 컴포넌트 업데이트될 예정, 다음 데이터는', nextProps, nextState);
        console.log('현재 데이터는', this.props, this.state);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('6. 컴포넌트가 업데이트 됨', prevProps, prevState);
        console.log('현재 데이터 : ', this.props, this.state);
    }

    componentWillUnmount() {
        console.log('7. 컴포넌트가 이제 주근당');
    }

    bgToggle() {
        this.setState({
            toggleColor: !this.state.toggleColor
        });
    }

    render() {
        const toggleColor = this.state.toggleColor;
        const list = this.props.list.map((v, i) => <li key={i}>{v}</li>);

        return (
            <div>
                <ul style={{backgroundColor: toggleColor ? '#acf' : '#fca'}}>
                    {list}
                </ul>
                <button onClick={()=> this.bgToggle()}>색상변경</button>
            </div>
        );
    }
}