import React from 'react';

const ToDo = props => {
  return (
    <h2
      onClick={() => props.strikeThru(props.todo.id)}
      className='heading'
      style={{ textDecoration: props.todo.strike }}
    >
      {props.todo.task}
    </h2>
  )
}

export default ToDo