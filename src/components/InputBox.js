import React, { Component } from 'react';

class InputBox extends Component {
    handleSave() {
        this.props.save(this._input.value);
        this._input.value = '';
        this._input.focus();
    }
    handleWithdraw() {
        this.props.withdraw(this._input.value);
        this._input.value = '';
        this._input.focus();
    }
    handleClick() {
        this._input.focus();
    }
    render() {
        return (
            <div onClick={()=> this.handleClick()}>
                <input ref={ref=> this._input = ref} type="text"/>
                <button onClick={()=> this.handleSave()}>입금</button>
                <button onClick={()=> this.handleWithdraw()}>춭금</button>
            </div>
        )
    }
}

export default InputBox;
