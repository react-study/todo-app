import React, {Component} from 'react';
import ClassNames from 'classnames';

export default class Footer extends Component {
  render() {
    const {activeLength, completedLength, nowShowing, changeShowing, deleteCompleted} = this.props;
    return (
      <footer className="footer">
        <span className="todo-count">
          {activeLength} item{activeLength > 1 ? 's' : ''} left
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
        <button className={ClassNames('todo-delete-completed', {hidden: !completedLength})}
                onClick={() => deleteCompleted()}>Clear completed
        </button>
      </footer>
    );
  }
}