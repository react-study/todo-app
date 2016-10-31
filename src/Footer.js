import React, {Component} from 'react';
import ClassNames from 'classnames';

export default class Footer extends Component {
  render() {
    const {activeLength, doneLength, filter, changeFilter, deleteDone} = this.props;
    return (
      <footer className="footer">
        <span className="todo-count">
          {/* 1이나 0은 복수가 아니라 s를 안 붙여줌. */}
          {activeLength} item{activeLength > 1 ? 's' : ''} left
        </span>
        <ul className="todo-filters">
          <li>
            <a className={ClassNames({selected: filter === 'All'})}
               onClick={() => changeFilter('All')}>All</a>
          </li>
          <li>
            <a className={ClassNames({selected: filter === 'Active'})}
               onClick={() => changeFilter('Active')}>Active</a>
          </li>
          <li>
            <a className={ClassNames({selected: filter === 'Done'})}
               onClick={() => changeFilter('Done')}>Done</a>
          </li>
        </ul>
        {/* 완료된 todo가 없다면 버튼을 보여줄 필요가 없음. */}
        <button className={ClassNames('todo-delete-completed', {hidden: !doneLength})}
                onClick={() => deleteDone()}>Delete done
        </button>
      </footer>
    );
  }
}