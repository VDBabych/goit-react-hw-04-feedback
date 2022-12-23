import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onBtnClick = e => {
    this.setState(prevState => {
      return {
        [e.target.name]: prevState[e.target.name] + 1,
      };
    });
  };
  countTotalFeedback = () =>
    Object.values(this.state).reduce((acc, el) => acc + el, 0);

  countPositiveFeedbackPercentage = () =>
    `${Math.round((this.state.good / this.countTotalFeedback()) * 100)}%`;

  render() {
    const totalFeedbacks = this.countTotalFeedback();
    const options = Object.keys(this.state);
    return (
      <>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onBtnClick}
          />
        </Section>
        <Section title={'Statistics'}>
          {totalFeedbacks > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={totalFeedbacks}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}
