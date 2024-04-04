import { Component } from "react";
import Statistics from "./Statistics";
import FeedbackOptions, { Options } from "./FeedbackOptions";
import Section from "./Section";
import Notification from "./Notification";

type Props = Record<string, never>;
// type Options = "good" | "neutral" | "bad"
type State = Record<Options, number>;

export default class App extends Component<Props, State> {
  // static defaultProps = {};
  // static propTypes = {};

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  countTotalFeedback = () => this.state.good + this.state.neutral + this.state.bad;
  countPositiveFeedbackPercentage = () => Math.round(this.state.good * 100 / this.countTotalFeedback());
  #onLeaveFeedback = (feedback: Options, prevState: Readonly<State>): Partial<State> =>
    ({ [feedback]: prevState[feedback] + 1 })

  onLeaveFeedback = (feedback: Options) => {
    this.setState(prevState => this.#onLeaveFeedback(feedback, prevState) as State);
  }
  render() {
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <Section title="Please leave feedback">
        <FeedbackOptions options={["good", "neutral", "bad"]} onLeaveFeedback={this.onLeaveFeedback} />
        <h2>Statistics</h2>
        {total === 0 ? <Notification message="No feedback given" /> :
          <Statistics {...this.state} {...{ total, positivePercentage }} />}
      </Section>
    )
  }
}

