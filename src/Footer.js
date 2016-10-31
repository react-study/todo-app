import React, {Component} from 'react';
import ClassNames from 'classnames';

export default class Footer extends Component {
  render() {
    const {nowShowing, changeShowing, getLeftItems} = this.props;
    return (
      <footer className="footer">
        <span className="todo-count">
          {getLeftItems()}
          item{getLeftItems() > 1 ? 's' : ''} left
        </span>
        <ul className="todo-filters">
          <li>
            <a className={ClassNames({selected: nowShowing === 'All'})}
               onClick={() => changeShowing('All')}>All</a>
          </li>
          <li>
            <a className={ClassNames({selected: nowShowing === 'Active'})}
               onClick={() => changeShowing('Active')}>Active</a>
          </li>
          <li>
            <a className={ClassNames({selected: nowShowing === 'Completed'})}
               onClick={() => changeShowing('Completed')}>Completed</a>
          </li>
        </ul>
      </footer>
    );
  }
}