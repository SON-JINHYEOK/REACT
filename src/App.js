import React from 'react';
import CounterContainer from './containers/CounterContainer';
import TodosContainer from './containers/TodosContainer';
import { Route , Link } from 'react-router-dom';
import Home from './components/Home';

const App = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/counter">Counter</Link>
        </li>
        <li>
          <Link to="/todos">Todos</Link>
        </li>
      </ul>
      <hr />
      <Route path="/" exact={true} component={Home} />
      <Route path="/counter" component={CounterContainer}/>
      <Route path="/todos" component={TodosContainer} />
    </>
  );
};

export default App;