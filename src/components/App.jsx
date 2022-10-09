import { Component } from "react";

import Statistics  from "./Statistics"
import FeedbackOptions from "./Feedback";
import Section from "./Section";
import Notification from "./Notification";

export class App extends Component{
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  countTotalFeedback = () => {
    const {good, neutral, bad} = this.state;
    return good + neutral + bad
  };

  countPositiveFeedbackPercentage = () => {
    const totalFeedback = this.countTotalFeedback();
    return Math.round(this.state.good * 100 / totalFeedback);
  };

  onLeaveFeedback = (event) => {
   return this.setState((prevState) => ({[event.target.name]: prevState[event.target.name] + 1}))
  };

  render () {
    const {good, neutral, bad} = this.state;

  return (
    <div>

      <Section title="Please leave feedback">
      <FeedbackOptions options={{good, neutral, bad}} onLeaveFeedback={this.onLeaveFeedback}/>
      </Section>

      <Section title="Statictics">
     {this.countTotalFeedback() > 0 ? (<Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} positivePercentage = {this.countPositiveFeedbackPercentage()}/>)
     : (<Notification message='There is no feedback yet!'/>)}
      </Section>

    </div>
  );
}
};
