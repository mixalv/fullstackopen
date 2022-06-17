import anecdoteService from "../services/anecdotes"
import { createSlice } from "@reduxjs/toolkit"




const initialState = []

const anecdoteSlice = createSlice(
  {
    name: 'anecdotes',
    initialState,
    reducers: {
      setAnecdotes(state, action) {
        return action.payload
      },
      addAnecdote(state, action) {
        return state.concat(action.payload)
      },
      voteForAnecdote(state, action) {
        const anecdoteToVote = action.payload
        const newState = state.map(e => e.id === anecdoteToVote.id ? anecdoteToVote : e)
        return newState
      }

    }
  }
)

// const reducer = (state = initialState, action) => {
//   console.log('state now: ', state)
//   console.log('action', action)
//   switch(action.type) {
//     case 'VOTE':
//       const anecdoteToVote = state.find(e => e.id === action.id)
//       const votedAnecdote = {
//         ...anecdoteToVote,
//         votes: anecdoteToVote.votes + 1
//       }
//       const newState = state.map(e => e.id === votedAnecdote.id ? votedAnecdote : e)
//       return newState
//     case 'CREATE':
//       return state.concat(action.anecdote)
//     case 'SET':
//       return action.anecdotes
//     default:
//       return state
//   }
// }

// export const voteCreator = (id) => {
//   return {
//       type: 'VOTE',
//       id: id
//   }
  
// }

// export const addAnecdoteCreator = (content) => {
//   return {
//     type: 'CREATE',
//     anecdote: content
//   }
// }

// export const anecdotesCreator = (anecdotes) => {
//   return {
//     type: 'SET',
//     anecdotes: anecdotes
//   }

// }

export const anecdotesInitializer = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = (content) => {
  return async dispatch => {
    const response = await anecdoteService.createAnecdote(content)
    dispatch(addAnecdote(response))
  }
}

export const voteFor = (anecdote) => {
  return async dispatch => {
    const id = anecdote.id
    const modifiedAnecdote = {
      content: anecdote.content,
      votes: anecdote.votes + 1
    }
    const response = await anecdoteService.changeAnecdote(id, modifiedAnecdote)
    dispatch(voteForAnecdote(response))

  }
} 

export const { setAnecdotes, addAnecdote, voteForAnecdote } = anecdoteSlice.actions
export default anecdoteSlice.reducer
