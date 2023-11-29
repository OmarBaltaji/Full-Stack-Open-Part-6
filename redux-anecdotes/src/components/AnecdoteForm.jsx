import PropTypes from 'prop-types';

const AnecdoteForm = ({ onSubmit }) => {
  return (
    <>
      <h2>create new</h2>
      <form onSubmit={onSubmit}>
        <div><input name="anecdote" /></div>
        <button>create</button>
      </form>
    </>
  )
}

AnecdoteForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default AnecdoteForm;