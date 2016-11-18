import React, { Component } from 'react';

class Header extends Component{
    constructor(){
        super();
    }
    inputHandleClick() {
        this._input.value = '';
    }
    depositHandleClick() {
        let val = this._input.value;
        const regNum = /^[0-9]+$/;

        val = Number(val);
        if(!regNum.test(val)) return;
        this.props.handleDeposit(val);
    }
    withdrawHandleClick() {
        let val = this._input.value;
        const regNum = /^[0-9]+$/;

        val = Number(val);
        if(!regNum.test(val)) return;
        this.props.handleWithdraw(val);
    }
    render() {
        return(
            <header>
                <input
                    onClick={()=> this.inputHandleClick()}
                    type="text"
                    defaultValue="숫자를 입력하세요"
                    ref={ref => { this._input = ref; }}
                />
                <button
                    onClick={(deposit)=> this.depositHandleClick(deposit)}
                >
                    입금
                </button>
                <button onClick={(withdraw)=> this.withdrawHandleClick(withdraw)}>출금</button>
            </header>
        )
    }
}

export default Header;