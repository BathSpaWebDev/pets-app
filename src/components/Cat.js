function Cat(props) {
    
    // const { name, colour, lackOfCommonSense } = props;
  
    const styles = {
        backgroundColor: props.colour
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
        </div>
    )
} 

export default Cat;