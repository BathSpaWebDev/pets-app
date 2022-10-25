import Button from './Button';

function Cat(props) {
    // const { name, colour, lackOfCommonSense } = props;
    
    const styles = {
        backgroundColor: props.colour,
        color: props.textColour
    }

    return (
        <div style={styles}>
            <h2>Hi, iam a cat.</h2>
            <p>My name is {props.name}</p>
            {/* 
            this is using ternary statements which are just shortthand conditional statements
            condition ? thingtodoifconditionTrue : thingtodoifflase 
            */}
            {
                props.lackOfCommonSense ? 
                <p>I have NO common sense</p>
                :
                <p>I do have some common sense</p>
            }
            <Button />
        </div>
    )
} 


// create a new component called ButtonComponent 
// It should receive props for 
//     - colour of button, 
//     - textColour of the button
//     - function to invert the colours

// The button should invert the background colour of the the Cat div.


export default Cat;