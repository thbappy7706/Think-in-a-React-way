import React from 'react';
import "../index.css";
import Button from './button';
//component
class Clock extends React.Component
{
    state={
        date:new Date(),
        greetings:'Welcome,Tanvir Hossen Bappy',
        rightNow:'Now The Time is',
        locale:'en-US'
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
        const {date,locale}=this.state;
        let button;
        let greetings;
        let rightNow;
        if (locale==='bn-BD')
        {
            greetings ='স্বাগতম,তানভীর হোসেন বাপ্পী';
        }
        else
        {
            greetings ='Welcome,Tanvir Hossen Bappy' ;
        }

        if (locale==='bn-BD')
        {
            rightNow= 'এখন সময়';
        }
        else
        {
            rightNow='Now The Time is';
        }


        if (locale==='bn-BD')
        {
            button= (
                <Button change={this.handleClick} locale="en-US">
                    Click Here
                </Button>
            );
        }else
        {
            button= (
                <Button change={this.handleClick} locale="bn-BD">
                    Click Here
                </Button>
            );
        }
        return (
            <div>
                <h1> {greetings.toLocaleString(locale)}
                    <br/>
                    <span> {rightNow.toLocaleString(locale)} :  {date.toLocaleTimeString(locale)}</span>
                </h1>
                {button}
            </div>

        )
    }
}

export default Clock;