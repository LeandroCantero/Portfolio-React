import React from 'react'
import Lottie from 'react-lottie';
import * as animationData from '../../assets/lotties/296-react-logo.json'
 
export default class ReactLottie extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {isStopped: false, isPaused: false};
  }
 
  render() {
    const buttonStyle = {
      display: 'block',
      margin: '10px auto'
    };
 
    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };
 
    return <div>
      <Lottie options={defaultOptions}
              height={400}
              width={400}
              isStopped={this.state.isStopped}
              isPaused={this.state.isPaused}/>
    </div>
  }
}