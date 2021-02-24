import React, { useRef, useState } from 'react';
import CreateUser from './components/CreateUser';
import UserList from './components/UserList';

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });

  const { username , email } = inputs;
  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]:value
    });
  };

  const [users , setUsers] = useState([
      {id: 1, username: 'JIN', email: 'JIN@gmail.com'},
      {id: 2, username: 'KIM', email: 'KIM@gmail.com'},
      {id: 3, username: 'LEE', email: 'LEE@gmail.com'},
    ]);

  // currentのデフォルト値になる
  const nextId = useRef(4);

  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email
    };
    setUsers([...users, user])
    
    console.log(user);
    setInputs({
      username: '',
      email: ''
    });
    nextId.current += 1;
  };  
  return(
    <>
      <CreateUser 
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} />
    </>
  );
}

export default App;