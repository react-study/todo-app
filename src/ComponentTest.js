import React, { Component } from 'react';

class ComponentTest extends Component {
    constructor(){
        super();
        this.state = { toggleColor: false }
    }
    componentWillMount(){
        console.log('1. 컴포넌트가 마운트될 예정입니다.')
    }
    componentDidMount(){
        console.log('2. 컴포넌트가 마운트 되었습니다')
    }
    componentWillReceiveProps(nextProps){
        console.log('3. 컴포넌트가 새로운 props를 받을 예정입니다')
    }
    shouldComponentUpdate(nextProps, nextState){
        console.log('4. 컴포넌트 업데이트 여부를 결정합니다 :', nextProps, nextState);
        const shouldUpdate = confirm('업데이트할까요?');
        return !!shouldUpdate;
    }
    componentWillUpdate(nextProps,nextState){
        console.log('5. 컴포넌트가 업데이트 될 예정입니다 :', nextProps, nextState);
    }
    componentDidUpdate(prevProps, prevState){
        console.log('6. 컴포넌트가 업데이트 되었습니다 :', prevProps, prevState);
        console.log('현재데이터는 :', this.props, this.state);
    }
    componentWillUnmount(){
        console.log('7. 컴포넌트가 언마운트될 예정입니다')
    }
    bgToggle(){
        this.setState({
            toggleColor: !this.state.toggleColor
        })
    }
    render(){
        const toggleColor = this.state.toggleColor;
        const children = this.props.list.map((v,i) => (
            <li key={i}>
                {v}
            </li>
        ));
        return(
            <div>
                <ul style={{
                    backgroundColor: toggleColor ? '#acf' : '#fca'
                }}>
                    {children}
                </ul>
                <button onClick={ ()=> this.bgToggle() }>
                    색상변경
                </button>
            </div>
        )
    }
}

export default ComponentTest;