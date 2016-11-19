import React, { Component } from 'react';
import InputBox from './InputBox';
import AccountBook from './AccountBook';

class App extends Component {
    constructor() {
        super();
        this.state = {
            accountList: [],
            total: 0
        }
    }
    save(money) {
        money = money * 1;
        if(typeof money !== 'number') return;
        const total = this.state.total + money;
        this.setState({
            accountList: [...this.state.accountList, {
                type: 'save',
                money: money,
                result: total
            }],
            total: total
        });
    }
    withdraw(money) {
        money = money * 1;
        if(typeof money !== 'number') return;
        const total = this.state.total - money
        this.setState({
            accountList: [...this.state.accountList, {
                type: 'withdraw',
                money: money,
                result: total
            }],
            total: total
        });
    }
    render() {
        return (
            <div>
                <InputBox
                    save={money => this.save(money)}
                    withdraw={money => this.withdraw(money)}
                />
                <AccountBook accountList={this.state.accountList}/>
            </div>
        )
    }
}

export default App;
