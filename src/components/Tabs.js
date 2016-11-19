import React, { Component } from 'react';

const tablist = [
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, repellendus!',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, aut ab a ex iure tenetur maxime sed aliquam modi error!',
    'Lorem ipsum dolor sit amet.',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
];

class Tabs extends Component {
    render() {
        const {
            focused,
            changeTab
        } = this.props;
        return (
            <ul>
                {tablist.map((tab, i) => (
                    <li key={'tablist'+i} onClick={()=> changeTab(i)}>
                        <span>#{i}</span>{' '}
                        <span style={{
                            display: i === focused ? 'inline-block' : 'none'
                        }}>{tab}</span>
                    </li>
                ))}
            </ul>
        )
    }
}
export default Tabs;
