import React from 'react';

function User({user}) {
    return (
        <div>
            <b>{user.username}</b>
            <span>({user.email})</span>
        </div>
    );
}

function UserList({users}) {
    
    return (
        <div>
            {users.map(i => (<User user={i} key={i.id} />))}
        </div>
    );
}

export default UserList;