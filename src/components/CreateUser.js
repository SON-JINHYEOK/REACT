import React from 'react';

function CreateUser({ username, email, onChange, onCreate}) {
    return(
        <div>
            <input 
                name="username"
                placeholder="ID"
                onChange={onChange}
                value={username}
            />
            <input
                name="email"
                placeholder="e-mail"
                onChange={onChange}
                value={email}
            />
            <button onClick={onCreate}>登録</button>
        </div>
    );
};

export default CreateUser;