import { createAsyncThunk } from '@reduxjs/toolkit'
import { client } from '../../api/client'

const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const { todos } = await client.get('/fakeApi/todos')
  return todos
})

const postTodo = createAsyncThunk('todos/postTodo', async todoText => {
  const { todo } = await client.post('/fakeApi/todos', { text: todoText })
  return todo
})

export { fetchTodos, postTodo }
