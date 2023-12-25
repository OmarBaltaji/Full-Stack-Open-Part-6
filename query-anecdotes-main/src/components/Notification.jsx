import { useNotificationValue } from "../contexts/NotificationContext"

const Notification = () => {
  let style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 5
  }

  const notification = useNotificationValue();

  if (notification && notification.type) {
    const color = notification.type === 'success' ? 'green' : 'red';
    style = { ...style, borderColor: color, color };
  }

  return (
    <>
      {notification && notification.message && <div style={style}>
        {notification.message}
      </div>}
    </>
  )
}

export default Notification
