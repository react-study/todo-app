import React, { Component } from 'react';
import InputBox from '../components/InputBox';
import AccountBook from '../components/AccountBook';

import { connect } from 'react-redux';
import * as bankActions from '../actions/bankActions';

const mapStateToProps = state => { // state to props
    return {
        accountList: state.accountList
    }
};

const mapDispatchToProps = dispatch => { // action to props
    return {
        save: money => dispatch(bankActions.save(money)),
        withdraw: money => dispatch(bankActions.withdraw(money))
    }
};

class App extends Component {
    render() {
        const {
            accountList,
            save,
            withdraw
        } = this.props;

        return (
            <div>
                <InputBox
                    save={money => save(money)}
                    withdraw={money => withdraw(money)}
                />
                <AccountBook accountList={accountList} />
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
