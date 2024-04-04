import PropTypes from "prop-types";

export default function Statistics(props: {
  good: number,
  neutral: number,
  bad: number,
  total: number,
  positivePercentage: number
}) {
  return <>
    <p>Good: {props.good}</p>
    <p>Neutral: {props.neutral}</p>
    <p>Bad: {props.bad}</p>
    <p>Total: {props.total}</p>
    <p>Positive feedback: {props.positivePercentage}%</p>
  </>
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired
}