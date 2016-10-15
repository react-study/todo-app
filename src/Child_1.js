import React, {Component} from 'react';

class Child extends Component{
	constructor(){//초기값을 다 constructor안에 넣어줌
		super();//습관적으로 써주는게 좋음 왜요. 이것은 뭐죠? 슈퍼가 없으면 아래 객체가 생성이 안됨

		this.state = {
			isToggle: false
		}
		//this.handleClick = this.handleClick.bind(this); //3
	}
    // getInitialState() {

    //     return {
    //         isToggle: false
    //     };
    // },

    handleClick() {
        this.setState({
            isToggle: !this.state.isToggle
        });
    }//, 객체가 아니므로 콤마 필요없음

    render() {
        const { isToggle } = this.state;

        return (//jsx 문법 사용
            <h2 
            	className = {this.props.className}
            	style={{color: isToggle ? '#f00' : '#00f', cursor: 'pointer'}} 
            	//onClick={this.handleClick.bind(this)} //1 지양함 worst 랜더링 될때마다 바인딩을 다시 해줘야함
            	onClick={()=> this.handleClick()}//2 이 방식이 제일 많이 쓰임
            	//onClick={this.handleClick}//3 //어트리 뷰트 안에서는 {/**/} 주석 안먹힘
            >
                나는 자식입니다.
            </h2>
        );
    }
};

export default Child;
