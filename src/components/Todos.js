import React,{ useState } from 'react';

// Componentの最適化のため、React.memoを使う
const TodoItem = React.memo(function TodoItem({ todo, onToggle }) {
    return (
      <li
        style={{ textDecoration: todo.done ? 'line-through' : 'none' }}
        onClick={() => onToggle(todo.id)}
      >
        {todo.text}
      </li>
    );
  });

// Componentの最適化のため、React.memoを使う
const TodoList = React.memo(function TodoList({ todos, onToggle }) {
    return (
      <ul>
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />
        ))}
      </ul>
    );
  });

function Todos({ todos, onCreate, onToggle }) {
    // 必ずしもReduxでStateの管理をする必要はない
    const [text, setText] = useState('');
    const onChange = event => setText(event.target.value);
    const onSubmit = event => {
        event.preventDefault(); // Submit event が　発生した際、再読み込みを防ぐ
        onCreate(text);
        setText('');
    };

    return (
        <div>
            <h1>Todos ページ</h1>
            <form onSubmit={onSubmit}>
                <input 
                    value={text}
                    placeholder="入力してください"
                    onChange={onChange}
                />
                <button type="submit">登録</button>
            </form>
            <TodoList todos={todos} onToggle={onToggle} />
        </div>
    );
}

export default Todos;