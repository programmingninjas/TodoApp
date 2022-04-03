import React, { useState } from 'react'

export default function AddTodo(props) {
  let [todo, setTodo] = useState('')
  const submit = (e) => {
    e.preventDefault()
    if (!todo) {
      alert("Todo is Empty, Yes like your life")
      setTodo('')
    }
    else {
      props.addTodo(todo)
      setTodo('')
    }
  }
  return (
    <form className='container' onSubmit={submit}>
      <h3 className='my-5'>Add Todo</h3>
      <div class="mb-3">
        <label htmlFor="todo" class="form-label"><h6>Todo</h6></label>
        <input type="text" value={todo} onChange={(e) => { setTodo(e.target.value) }} class="form-control" id="todo" />
      </div>
      <button type="submit" class="btn btn-success">Submit</button>
    </form>
  )
}
