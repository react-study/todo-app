import React, {Component} from 'react';
import ClassNames from 'classnames';

export default class Footer extends Component {
  render() {
    const {cntLeftItems, nowShowing, changeShowing, deleteCompleted} = this.props;
    return (
      <footer className="footer">
        <span className="todo-count">
          {cntLeftItems} item{cntLeftItems > 1 ? 's' : ''} left
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
        <button className="clear-completed"
                onClick={() => deleteCompleted()}>Clear completed
        </button>
      </footer>
    );
  }
}