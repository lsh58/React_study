import React from 'react';


const User = ({ userInfo, onClick}) => {

  return (
    <li onClick={onClick}>
     {userInfo.name}
    </li>
  );
};

export default React.memo(User);