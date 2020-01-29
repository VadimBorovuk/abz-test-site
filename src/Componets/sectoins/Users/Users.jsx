import React, {Component} from 'react';

const Users = ({items, isReady, id}) => {

    return (
        <div className="users" id="users">
            {
                !isReady ? 'loading...' :
                    items.users.map(item => <div key={item.id}>{item.name}</div>)
            }
        </div>
    );
};

export default Users;