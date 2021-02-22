import React from 'react';
import "./DateTime.css"

class DateTime extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          date: new Date(),
        };
    }
  
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick() {
      this.setState({
        date: new Date()
      });
    }
  
    render() {
      return (
        <div className="dateTime">
            <h6 className="date">Date Now : {this.state.date.toDateString()}</h6>
            <h6 className="time">Time Now : {this.state.date.toLocaleTimeString()}</h6>
        </div>
      );
    }
  }
  export default DateTime;
