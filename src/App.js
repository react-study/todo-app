import React, { Component } from 'react';
import Header from './Header';
import CashList from './CashList';

class App extends Component {
    constructor(props){
        super(props);
        this.state={
            cashs: [
                {deposit: 0, withdraw: 0, balance: 0}
            ]
        }
    }
    handleDeposit(deposit) {
        const newCashs = [...this.state.cashs];
        const lastIndex = newCashs.length;
        this.setState({
            cashs: [...this.state.cashs, {
                deposit,
                withdraw: 0,
                balance: newCashs[lastIndex - 1].balance + deposit
            }]
        });
    }
    handleWithdraw(withdraw) {
        const newCashs = [...this.state.cashs];
        const lastIndex = newCashs.length;
        this.setState({
            cashs: [...this.state.cashs, {
                deposit: 0,
                withdraw,
                balance: newCashs[lastIndex - 1].balance - withdraw
            }]
        });
    }
    render(){
        const {
            cashs
        } = this.state;
        return(
            <div>
                <Header
                    handleDeposit={(deposit)=> this.handleDeposit(deposit)}
                    handleWithdraw={(withdraw)=> this.handleWithdraw(withdraw)}
                />
                <CashList
                    cashs={cashs}
                />
            </div>
        )
    }
}

export default App;