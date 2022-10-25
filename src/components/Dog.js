function Dog({dogYears, colour, breed, name}) {
    //logic goes at the top outside of the return statement
    const styles = {
        backgroundColor: colour
    }

    function calculateHumanYears(n){
        return n * 7;
    }

    const humanYears = calculateHumanYears(dogYears);

    return (
        <div style={styles}>
        <h2>Hi, i am a dog.</h2>
        <p>My name is {name} and I am a {breed}</p> 
        {/* create a sentence that says how old I am in dog years and human years */}
        <p>I am {dogYears} years old in dogs years. That is {humanYears} human years</p>
    </div>
        
    )
} 

export default Dog;