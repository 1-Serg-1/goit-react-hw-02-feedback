import PropTypes from 'prop-types';
import { StatisticItem } from './Statistic.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <ul>
      <StatisticItem>
        <p>Good: {good} </p>
      </StatisticItem>
      <StatisticItem>
        <p>Neutral: {neutral} </p>
      </StatisticItem>
      <StatisticItem>
        <p>Bad: {bad} </p>
      </StatisticItem>
      <StatisticItem>
        <p>Total: {total} </p>
      </StatisticItem>
      <StatisticItem>
        <p>Positive feedback: {positivePercentage}% </p>
      </StatisticItem>
    </ul>
  );
};

Statistics.propTypes = {
  options: PropTypes.exact({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    totalFeedback: PropTypes.number.isRequired,
    positiveFeedbackPercentage: PropTypes.number.isRequired,
  }),
};
