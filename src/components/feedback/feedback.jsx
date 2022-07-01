import React from "react";
import { Component  } from "react";
import PropTypes from 'prop-types';
import { Statistics } from "./Statistics";
import { FeedbackOptions } from "./FeedbackOptions";
import { Section } from "./Section";
import { Notification } from "./Notification";


export class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
      }


      onLeaveFeedback = (stateKey) => {
        this.setState(prevState => {
            return ({
                [stateKey]: prevState[stateKey] + 1
             })}
             )
      }

      countTotalFeedback = () => (
        Object.values(this.state).reduce((acc, number) => {
            return acc + number}, 0)
      )

      countPositiveFeedbackPercentage= () => {
        const factor = this.countTotalFeedback() / this.state.good;
        return `${(Math.round(100 / factor))}%`
      }

      render() {
        return (
            <>
            <Section title="Please leave feedback">
                
                <FeedbackOptions  ackOptions 
                    options={this.state} 
                    onLeaveFeedback={this.onLeaveFeedback} />

                {Object.values(this.state).some(e => e > 0)
                    ? <Statistics 
                    allStates={this.state} 
                    total={this.countTotalFeedback()} 
                    positivePercentage={this.countPositiveFeedbackPercentage()} />
                    : <Notification message="There is no feedback"/>
            
            
            }
                

                
                
            </Section>
            </>
        )
      }

      

}



Section.propTypes = {
    title: PropTypes.string
}

FeedbackOptions.propTypes = {
    options: PropTypes.object,
    onLeaveFeedback: PropTypes.func
}

Statistics.propTypes = {
    allStates: PropTypes.object,
    total: PropTypes.number,
    positivePercentage: PropTypes.string
}