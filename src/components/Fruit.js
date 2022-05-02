import React, { Component } from 'react';

class Fruit extends Component {
    
    state = {  }

    
    render() { 
        const {src, title, description, price, off} = this.props;
        return <div className='card'>
           <div className="card__body">
               <img src={src} alt="" />
               <h2 className='card__title'>{title}</h2>
               <p className='card_description'>
                   {description}
               </p>
               <h1 className='card_price'>$ {price}</h1>
               <button  className='card_btn'>VIEW PRODUCT</button>
               <span className='off_price'> - %{off} </span>
           </div>
        
        </div>;
    }
}
 
export default Fruit;