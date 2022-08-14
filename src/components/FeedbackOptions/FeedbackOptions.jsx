import { Box } from 'components/Box';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Box as="ul" display="inline-flex" gridGap="15px">
      {Object.keys(options).map(name => (
        <li key={name}>
          <Box
            as="button"
            p="5px"
            type="button"
            onClick={() => onLeaveFeedback(name)}
          >
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </Box>
        </li>
      ))}
    </Box>
  );
};
