import React, { Component } from 'react';

class PlayerModal extends Component {
   
    state = {  };

    hideModal = ()=>{
        this.props.closeModal();
    }
    
    changeCurrentData(type, isInc,){
       this.props.changeCurrentData(type, isInc);
    }
    saveChanges = (e)=>{
      this.props.saveChanges(e);
    }
    changeName = (e)=>{
      this.props.changeName(e);
    }
    changeClub = (event)=>{
        this.props.changeClub(event);
    }
   
    componentWillUnmount(){
        this.props.clearCurrentData();
    }

    render() {
        const {currentData} = this.props; 
        return ( <div className="card">
            <div className="card-header">
               ✔ Add Player Modal
            </div>
            <div className="card-body">
                <div className="row text-center">
                <div className="col-2">
                    <h5>Player name:</h5>
                    <input type="text" 
                    onChange={ (e)=> this.changeName(e)}
                    className='form-control' />
                </div>
                <div className="col-3">
                    <h5>Players age:</h5>
                    <div className="btn-group">
                        <button 
                        className="btn btn-secondary" 
                        onClick={ ()=> this.changeCurrentData("age", false)
                        }
                        >-</button>
                        <button className="btn">{currentData ? currentData.age : 0  }</button>
                        <button
                         className="btn btn-info"
                         onClick={()=> this.changeCurrentData("age", true)}
                         >+</button>
                    </div>  
                </div>
                
                <div className="col-1">
                    <img className='img-fluid text-center' src="https://www.sportyfied.com/thumbs/regular/select_player_shirt_ss_argentina_striped_redwhite_700x700.png" alt="" />
                </div>
                <div className="col-2">
                    <h5>Club name:</h5>
                    <input type="text" 
                    onChange={ (e)=> this.changeClub(e)}
                    className='form-control' />
                </div>
                <div className="col-3">
                    <h5>Players value:</h5>
                    <div className="btn-group">
                        <button 
                        className="btn btn-secondary"
                        onClick={()=> this.changeCurrentData("value", false)}
                        >-</button>
                        <button className="btn">$💰 {currentData ? currentData.value : 0}.00m</button>
                        <button 
                        className="btn btn-info"
                        onClick={()=> this.changeCurrentData("value", true)}
                        >+</button>
                    </div>  
                </div>
              </div>
            </div>
            <div className="card-footer">
                <button className='btn btn-warning m-1'
                onClick={this.hideModal}
                >Cancel</button>
                <button className='btn btn-success m-1'
                onClick={this.saveChanges}
                > Save Changes</button>
            </div>
        </div> );
    }
}
 
export default PlayerModal;