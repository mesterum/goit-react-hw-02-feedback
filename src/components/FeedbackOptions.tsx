import PropTypes from "prop-types";

export type Options = "good" | "neutral" | "bad"

export default function FeedbackOptions(props: {
  options: Options[],
  onLeaveFeedback: (option: Options) => void
}) {
  return props.options.map(option => <button key={option} onClick={() => props.onLeaveFeedback(option)}>
    {option[0].toUpperCase() + option.slice(1)}</button>)
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.oneOf([
      "good",
      "neutral",
      "bad"
    ]).isRequired
  ).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired
}