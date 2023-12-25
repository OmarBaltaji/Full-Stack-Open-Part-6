import { useQueryClient, useMutation } from "@tanstack/react-query";
import { createAnecdote } from "../requests";
import { useNotificationDispatch } from "../contexts/NotificationContext";

const AnecdoteForm = () => {
  const queryClient = useQueryClient();
  const notificationDispatch = useNotificationDispatch();

  const newAnecdoteMutation = useMutation({
    mutationFn: createAnecdote,
    onSuccess: (newNote) => {
      const notes = queryClient.getQueryData(['anecdotes']);
      queryClient.setQueryData(['anecdotes'], notes.concat(newNote));
      notificationDispatch({ type: 'set', payload: `New note "${newNote.content}" has been created` });
      setTimeout(() => {
        notificationDispatch({ type: 'set', payload: null });
      }, 5000);
    }
  });

  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    newAnecdoteMutation.mutate({ content, votes: 0 });
}

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
