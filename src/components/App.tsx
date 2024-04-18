import './App.css'
import { useState } from "react";
import Statistics from "./Statistics";
import FeedbackOptions, { Options } from "./FeedbackOptions";
import Section from "./Section";
import Notification from "./Notification";

// type Props = Record<string, never>;
// type SetState = Record<Options, React.Dispatch<React.SetStateAction<number>>>;

export default function App() {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const setters = {
    good: setGood,
    neutral: setNeutral,
    bad: setBad,
  }
  const countTotalFeedback = () => good + neutral + bad;
  const countPositiveFeedbackPercentage = () => Math.round(good * 100 / countTotalFeedback());

  const onLeaveFeedback = (feedback: Options) => {
    setters[feedback](prevState => prevState + 1);
  }

  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();
  return (
    <Section title="Please leave feedback">
      <FeedbackOptions options={["good", "neutral", "bad"]} onLeaveFeedback={onLeaveFeedback} />
      <h2>Statistics</h2>
      {total === 0 ? <Notification message="No feedback given" /> :
        <Statistics {...{ good, neutral, bad, total, positivePercentage }} />}
    </Section>
  )
}

