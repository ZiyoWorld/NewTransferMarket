import React, { Component } from 'react';
import './Stopwatch.css';

class StopWatch extends Component {
  
  state = { 
    second: 0,
    minute: 0,
    hour: 0,
    btnDisabled: false,
    interval: "",
    intervalStorage: [],
   }

   startCliceked = ()=>{
       this.setState({
         btnDisabled:true,
       })
       let timer = setInterval(() => {
         const {second, minute, hour} = this.state;
         if(second === 59){
               if(minute === 59){
                  this.setState({
                    second: 0,
                    minute: 0,
                    hour: hour + 1
                  }) 
               }
               else {
                 this.setState({
                  second: 0,
                  minute: minute + 1
                 })
               }      
         }else {
           this.setState({
             second: second + 1
           })
         }


        }, 1000);
        this.setState({
          interval: timer,
        })

   };
   stopClicked = ()=>{
     clearInterval(this.state.interval);
     this.setState({
       btnDisabled: false,
     })
   };

   intervalClicked = ()=>{
      const {second, minute, hour,  intervalStorage} = this.state;
      intervalStorage.push(`${hour}:${minute}:${second}`);
      this.setState({
        intervalStorage,
      });
   };

   clearClicked = ()=>{
     this.stopClicked();
     this.setState({
       second: 0,
       minute:0,
       hour: 0,
       intervalStorage: []
     })
   }
  render() { 
       const {minute, second, hour, intervalStorage, btnDisabled} = this.state;
    return ( 
    <div>
       <div>
            
            <div className="timer-container">
                <h1>Online <span className='text-warning' >Stopwatch</span></h1>

                <div className="timer-col">
                  <p className="timer-hours">{hour}</p>
                  <p className='timer-label'>Hours</p>
                </div>
                <div className="timer-col">
                  <p className="timer-minutes">{minute}</p>
                  <p className='timer-label'>Minutes</p>
                </div>
                <div className="timer-col">
                  <p className="timer-seconds">{second}</p>
                  <p className='timer-label'>Seconds</p>
                </div>
            </div>
            <div className="timer-container text-center">
                <div className="timer-btn">
                  <button type='button' className='btn btn-success' onClick={this.startCliceked} disabled={btnDisabled} >Start</button>
                </div>
                <div className="timer-btn">
                  <button type='button' className='btn btn-danger' onClick={this.stopClicked}>Stop</button>
                </div>
                <div className="timer-btn">
                  <button type='button' className='btn btn-primary' disabled={!btnDisabled} onClick={this.intervalClicked}>Interval</button>
                </div>
                <div className="timer-btn">
                  <button type='button' className='btn btn-warning' onClick={this.clearClicked}>Clear</button>
                </div>
            </div>
            <div className="timer-container-intervals text-center">
                    {intervalStorage.map( (item, index) => <p>{index + 1} .=&gt; {item}</p> )}
            </div>
       </div>
    </div> );
  }
}
 
export default StopWatch;