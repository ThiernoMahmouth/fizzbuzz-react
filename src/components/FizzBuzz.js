import React, { Component } from 'react';



class FizzBuzz extends Component 
{
    constructor(props)
    {
        super(props);
    }
    
    getFizzBuzzNumbers(debut, fin)
    {
        let result = []
        for (let index = debut; index <= fin; index++) 
        {
            if (this.isFizzNumber(index) && this.isBuzzNumber(index))
                result.push("FizzBuzz")
            else if (this.isBuzzNumber(index))
                result.push("Buzz")
            else if (this.isFizzNumber(index))
                result.push("Fizz")
            else 
                result.push(index)
        }
        return result
    }

    isFizzNumber(number)
    {
        return (number % 3 === 0) || ((number + " ").indexOf("3") > -1)
    }
    isBuzzNumber(number)
    {
        return (number % 5 === 0) || ((number + " ").indexOf("5") > -1)
    }
    
    render() 
    {
        return ( <div data-testid="fizzELement">  {
            this.getFizzBuzzNumbers(this.props.start, this.props.end).map((element, k) => <p data-testid={k} >{ element }</p>)
        }</div>)
    }
}

export default FizzBuzz;
