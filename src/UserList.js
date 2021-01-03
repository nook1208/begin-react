import React from 'react';

function User({user, onRemove}) {
    return (
        <div>
            <b>{user.username}</b>
            <span>({user.email})</span>
            <button onClick={() => onRemove(user.id)}>삭제</button>
        </div>
    );
}

function UserList({users, onRemove}) {
    
    return (
        <div>
            {users.map(i => (
            <User user={i} key={i.id} onRemove={onRemove}/>
            ))}
        </div>
    );
}

export default UserList;