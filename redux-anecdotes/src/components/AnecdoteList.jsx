import { useSelector, useDispatch } from 'react-redux';
import { updateAnecdote } from '../reducers/anecdoteReducer';
import { setNotification } from '../reducers/notificationReducer';

const AnecdoteList = () => {
  const dispatch = useDispatch()

  const anecdotes = useSelector(({ anecdotes, filter }) => {
    const filteredAnecdotes = anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(filter)); 
    return filteredAnecdotes.sort((a, b) => b.votes - a.votes);
  })

  const vote = (anecdote) => {
    dispatch(updateAnecdote({...anecdote, votes: anecdote.votes + 1}));
    dispatch(setNotification(`You voted '${anecdote.content}'`, 5000))
  }

  return (
    <>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </>
  )
}

export default AnecdoteList;