import React, { Component } from 'react';
import PlayerModal from './components/PlayerModal';


class App extends Component {
    state= {
      players: [],
      modalVisibility: false,
      currentData: "",
    }
  componentDidMount (){
    const players = [
      {
        firstName: "Mbappe",
        age: 23,
        club: "PSJ",
        value: 160,
      },
      {
        firstName: "Salah",
        age: 29,
        club: "Liverpool",
        value: 100,
      },
      {
        firstName: "Lukaku",
        age: 28,
        club: "Chelsea",
        value: 100,
      },
      {
        firstName: "Neymar",
        age: 30,
        club: "PSJ",
        value: 90,
      }
    ];
    this.setState({
      players,
    })
  };

  removePlayer = (index)=>{
    const players = this.state.players;
    players.splice(index, 1);
    this.setState({
      players,
    })
  }

  openModal = ()=>{
   this.setState({
     modalVisibility: true
   })
  }
  closeModal = ()=>{
    this.setState({
      modalVisibility: false
    })
   };

   changeCurrentData = (type, isInc)=>{
    const newCurrentData = this.state.currentData 
    ? this.state.currentData
    : { firstName: "none", age: 0, club: "none", value: 0 };

    if(type === "age"){
        if(isInc){
            newCurrentData.age++;
        } else if(newCurrentData.age < 1){
              newCurrentData.age = 0
        } else{
            newCurrentData.age--;
        }
    }
    if(type === "value"){
        if(isInc){
            newCurrentData.value++;
        } else if(newCurrentData.value < 1){
            newCurrentData.value = 0
        } else{
            newCurrentData.value--;
        }
    }

    this.setState({
        currentData: newCurrentData
    })

   }
  
   saveChanges = (e)=>{
     const {players, currentData, } = this.state;
     players.push(currentData);
     this.setState({
       players: players,
       modalVisibility: false,
      
     })
   }
   changeName = (e)=>{
    const newChangeName = this.state.currentData 
    ? this.state.currentData
    : { firstName: "", age: 0, club: "", value: 0 };
    newChangeName.firstName = e.target.value;
    this.setState({
     currentData: newChangeName
    })

   }
   changeClub = (event)=>{
    const newChangeClub = this.state.currentData 
    ? this.state.currentData
    : { firstName: "", age: 0, club: "", value: 0 };
    newChangeClub.club = event.target.value;
    this.setState({
     currentData: newChangeClub
    })

   }

   clearCurrentData = ()=>{
     this.setState({
       currentData: "",
     })
   }
   

   
  render() { 
   const {players, modalVisibility, currentData} = this.state;
    return ( <div className='market'>
      <div className="container">
        <h1>⚽ TRANSFER MARKET</h1>
        <div className="row">
          <div className="col">
            <button className='btn btn-primary m-2'
            onClick={this.openModal}
            >Add a player</button>
            {
            modalVisibility ? <PlayerModal 
            closeModal={this.closeModal} 
            currentData={currentData} 
            changeCurrentData={this.changeCurrentData} 
            saveChanges={this.saveChanges}
            clearCurrentData={this.clearCurrentData}
            changeName={this.changeName}
            changeClub={this.changeClub}
            /> : "" 
            }
          </div>  
          
        </div>
        <div className="row mt-2">
          <div className="col">
            <table className='table table-hover table-sm'>
                <thead className='thead-light'>
                  <tr>
                    <th>№</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Club</th>
                    <th>Market Value</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {
                   players.map( (item, index)=> (
                     <tr>
                        <td>{index + 1}</td>
                        <td>{item.firstName}</td>
                        <td>{item.age}</td>
                        <td>{item.club}</td>
                        <td> <span className='badge badge-primary p-2'>💰${item.value}.00m</span> </td>
                        <td>
                          <button className='btn btn-danger btn-sm p-1' 
                          onClick={()=> this.removePlayer(index)}
                          >Remove </button>
                          </td>
                     </tr>
                   ))
                  }
                </tbody>

            </table>
          </div>

        </div>

      </div> 
    </div> );
  }
}
 
export default App;