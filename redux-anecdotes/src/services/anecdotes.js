import axios from 'axios';

const baserUrl = 'http://localhost:3001/anecdotes';

const getAll = async () => {
  const response = await axios.get(baserUrl);
  return response.data;
}

const create = async (content) => {
  const newAnecdote = {
    content,
    votes: 0,
  };

  const response = await axios.post(baserUrl, newAnecdote);
  return response.data;
}

const update = async (anecdote) => {
  const response = await axios.put(`${baserUrl}/${anecdote.id}`, anecdote);
  return response.data;
}

const anecdoteService ={ getAll, create, update };

export default anecdoteService;