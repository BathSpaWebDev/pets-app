import { useState } from 'react'; // this a React hook

function Button(props) {

    //define the state variable using this syntax - you just have to learn it
    const [ buttonColour, setButtonColour ] = useState('blue');

    const buttonStyles = {
        borderRadius: '5px',
        border: '1px solid black',
        backgroundColor: buttonColour,
        color: '#fff',
        fontSize: '2rem',
        padding: '0.6rem 1rem'
    }

    const changeColour = () => {
        setButtonColour('red');
    }

    return (
        <button className="button" style={buttonStyles} onClick={changeColour}>
            {buttonColour} 
        </button>
    )

}

export default Button;


/*
For homework create a state variable using the useState hook like we have done here.
It should be something that is going to change when the user does some kind of user event eg click, mouseover, etc..
Create a button that updates the state.
Then you need to output the state on the page.
*/
