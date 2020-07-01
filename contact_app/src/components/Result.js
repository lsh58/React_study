import React from 'react';


const Result = ({name, number, result, onEdit, onRemove, onChange, onChange2}) => {
  return (
    <form onSubmit={onEdit}>
        <input name="username" type="text" placeholder={result.name} onChange={onChange} value={name}></input>
        <input name="number" type="text" placeholder={result.number} onChange={onChange2} value={number}></input>
        <div>
        <button type="submit">Edit</button>
        <button onClick={onRemove}>Remove</button>
        </div>
    </form>
  );
};

export default React.memo(Result);