import { connect } from 'react-redux'

const Notification = (props) => {

  const message = props.notification
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  if (message) {
    return (
      <div style={style}>
        {message}
      </div>
    )
  }
  return null
}

const mapStateToProps = (state) => {
  return {notification: state.notification ? state.notification.message : null}
}

const ConnectedNotification = connect(mapStateToProps)(Notification)

export default ConnectedNotification