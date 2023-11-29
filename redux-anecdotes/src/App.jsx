import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote, createAnecdote } from './reducers/anecdoteReducer'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'

const App = () => {
  const anecdotes = useSelector(state => state.sort((a, b) => b.votes - a.votes))
  const dispatch = useDispatch()

  const vote = (id) => {
    dispatch(voteAnecdote(id));
  }

  const onSubmit = (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = '';
    dispatch(createAnecdote(content));
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      <AnecdoteList vote={vote} anecdotes={anecdotes} />
      <AnecdoteForm onSubmit={onSubmit} />
    </div>
  )
}

export default App