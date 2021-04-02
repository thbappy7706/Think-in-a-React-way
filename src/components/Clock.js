import React from 'react';
import "../index.css";
//component
class Clock extends React.Component
{
    // state={date:new Date()} //because here no props will be used or changed

    constructor(props) {
        super(props);
        this.state={
            date:new Date()
        };
    }

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

    render()
    {
        return (
            // <h1 className="heading">
            //    <span className="text">
            //    Time is {this.state.date.toLocaleTimeString(this.props.locale)}
            //    </span>
            // </h1>

            <h1> স্বাগতম,তানভীর হোসেন বাপ্পী
                <br/>
                <span> এখন সময় :  {this.state.date.toLocaleTimeString(this.props.locale)}</span></h1>
        )
    }
}

export default Clock;