import React from 'react';
import "../index.css";
import Button from './button';
//component
class Clock extends React.Component
{
    state={
        date:new Date(),
        locale:'bn-BD'
    } //because here no props will be used or changed

    // constructor(props) {
    //     super(props);
    //     this.state={
    //         date:new Date()
    //     };
    // }

    componentDidMount() {
      this.clockTimer= setInterval(()=>this.tick(),1000);
    }

    componentWillUnmount() {
        clearInterval(this.clockTimer);
    }

    tick()
    {
        this.setState({
            date:new Date()
        });
    }

    handleClick =(locale)=> {
       this.setState({
           locale,
       });
    }

    render()
    {
        console.log("clock")
        const {date,locale}=this.state;
        return (
            <div>
                <h1> স্বাগতম,তানভীর হোসেন বাপ্পী
                    <br/>
                    <span> এখন সময় :  {date.toLocaleTimeString(locale)}</span>
                </h1>
                   <Button change={this.handleClick} locale="en-US">
                        Click Here
                   </Button>
            </div>

        )
    }
}

export default Clock;