import ReactDOM from 'react-dom';
//component
function Clock({locale})
{
    // element of this clock
    return ( <h1 className="heading">
        <span className="text">
            The time is {new Date().toLocaleTimeString(locale)}
        </span>
    </h1>
);
    // element of this clockend
}
// component end
 ReactDOM.render(<Clock locale="bn-BD"/>,document.getElementById('root'));


