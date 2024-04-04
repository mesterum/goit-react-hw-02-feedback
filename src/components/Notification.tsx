import PropTypes from "prop-types";

export default function Notification(props: {
  message?: string;
} = {
    message: "There is no feedback"
  }) {
  return <div className="Notification">{props.message}</div>
}

Notification.propTypes = {
  message: PropTypes.string,
}