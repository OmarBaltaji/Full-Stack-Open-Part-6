import axios from 'axios';

const baserUrl = 'http://localhost:3001/anecdotes';

const getAll = async () => {
  const response = await axios.get(baserUrl);
  return response.data;
}

const anecdoteService ={ getAll };

export default anecdoteService;