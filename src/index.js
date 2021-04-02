import ReactDOM from 'react-dom';
import React from 'react';
//component
class Clock extends React.Component
{
   render()
   {
       return (
           <h1 className="heading">
               <span className="text">
               Time is time of {this.props.children} {new Date().toLocaleTimeString(this.props.locale)}
               </span>
           </h1>
       )
   }
}

// component end
 ReactDOM.render(<Clock locale="bn-BD">Bappy</Clock>,document.getElementById('root'));


