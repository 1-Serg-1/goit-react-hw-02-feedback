import PropTypes from 'prop-types';

export const SectionTitle = ({ title, children }) => {
  return (
    <>
      <h2>{title}</h2>
      <div>{children}</div>
    </>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.shape().isRequired,
};
