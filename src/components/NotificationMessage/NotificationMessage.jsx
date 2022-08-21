import PropTypes from 'prop-types';

export const NotificationMessage = ({ message }) => {
  return <h2>{message}</h2>;
};
NotificationMessage.propTypes = {
  message: PropTypes.string.isRequired,
};
