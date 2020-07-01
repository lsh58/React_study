import React from 'react';

function Create({onCreate}){
    return (
      <form action="/" onSubmit={onCreate} method="post">
        <div> 
            <input name="username" type="text" placeholder="Name"></input>
            <input name="number" type="tel" pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}" placeholder="PhoneNumber"></input>
        </div>
        <button>Create new user</button>
      </form>
    );
};


export default React.memo(Create);
