import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';

export const App = () => {
  const [marks, setMarks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const onBtnClick = e => {
    setMarks({ ...marks, [e.target.name]: marks[e.target.name] + 1 });
  };
  const countTotalFeedback = () =>
    Object.values(marks).reduce((acc, el) => acc + el, 0);

  const countPositiveFeedbackPercentage = () =>
    `${Math.round((marks.good / countTotalFeedback()) * 100)}%`;

  const totalFeedbacks = countTotalFeedback();
  const options = Object.keys(marks);
  return (
    <>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions options={options} onLeaveFeedback={onBtnClick} />
      </Section>
      <Section title={'Statistics'}>
        {totalFeedbacks > 0 ? (
          <Statistics
            good={marks.good}
            neutral={marks.neutral}
            bad={marks.bad}
            total={totalFeedbacks}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};
