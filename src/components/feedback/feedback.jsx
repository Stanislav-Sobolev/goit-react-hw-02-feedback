import { Component  } from "react";
import PropTypes from 'prop-types';
import { StateListStyled, StateElStyled, BtnListStyled, BtnStyled } from "./feedback.styled";


const Btn = ({stateKey, onAddStat}) => {
    
    
    return (
   
//    <BtnStyled onClick={() => onAddStat({el})}>{el}</BtnStyled>
   <button onClick={() => onAddStat({stateKey})}>{stateKey}</button>
)}




export class Feedback extends Component {
    state = {
        good: 10,
        neutral: 0,
        bad: 0
      }

      addRate = ({stateKey}) => {
        
        this.setState(prevState => {
            console.log('prevState :>> ', prevState);  //{good: 10, neutral: 0, bad: 0}
            console.log('stateKey :>> ', stateKey);  //good
            console.log('prevState.stateKey :>> ', prevState.stateKey);  // undefined ???
            return ({
                [stateKey]: prevState.stateKey + 1
             })}
             )
      }

      countTotalFeedback() {
        return Object.values(this.state).reduce((acc, number) => {
            return acc + number}, 0)
       }

      countPositiveFeedbackPercentage() {
        const factor = this.countTotalFeedback() / this.state.good;
        return `${(Math.round(100 / factor))}%`
      }

      render() {
        return (
            <>
            <h3>Please leave feedback</h3>
            
            <BtnListStyled>
                {Object.keys(this.state).map(stateKey => (
                    <Btn key={stateKey} stateKey={stateKey} onAddStat={this.addRate}/>
                ))
                }
            </BtnListStyled>
            <p>Statistics</p>
            <StateListStyled>
                {Object.entries(this.state).map(el => (
                    <StateElStyled key={el[0]}>
                        {el[0]}: {el[1]}
                    </StateElStyled>
                ))
                }
            </StateListStyled>
            <p>Total: {this.countTotalFeedback()}</p>
            <p>Positive feedback: {this.countPositiveFeedbackPercentage()}</p>

            </>
        )
      }

      

}