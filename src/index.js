
import ReactDOM from 'react-dom';

setInterval(()=>
{
    const element = (
        <h1 className="heading">
        <span className="text">
            The time is {new Date().toLocaleTimeString()}
        </span>
        </h1>
    );
    ReactDOM.render(element,document.getElementById('root'))
},100);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

