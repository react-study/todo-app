import React, {Component} from 'react';

export default class Header extends Component {
  isNaturalNum(val) {
    const isNaturalNum = 0 < val && val < Infinity;
    if(!isNaturalNum) {
      this.money.focus();
      return alert('자연수만 입력해주세요.');
    }
    return true;
  }

  pay() {
    const money = +this.money.value;
    if(!this.isNaturalNum(money)) return;
    this.props.transaction('deposit', money);
    this.money.value = '';
    this.money.focus();
  }

  withdraw() {
    const money = +this.money.value;
    const isWithdrawable = this.props.change >= money;
    if(!this.isNaturalNum(money)) return;
    if(!isWithdrawable) {
      this.money.focus();
      return alert('잔액이 부족합니다.');
    }
    this.props.transaction('withdraw', money);
    this.money.value = '';
    this.money.focus();
  }

  render() {
    return (
      <header>
        <h1>통장</h1>
        <input type="text"
               placeholder="숫자를 입력하세요"
               ref={ref => {
                 this.money = ref
               }} />
        <button onClick={() => this.pay()}>입금</button>
        <button onClick={() => this.withdraw()}>출금</button>
      </header>
    )
  }
}