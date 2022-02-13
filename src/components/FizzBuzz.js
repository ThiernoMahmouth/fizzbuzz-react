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
            if (index % 15 === 0)
                result.push("FizzBuzz")
            else if (index % 5 === 0)
                result.push("Buzz")
            else if (index % 3 === 0)
                result.push("Fizz")
            else 
                result.push(index)
        }
        return result
    }
    
    render() 
    {
        return ( <div>  {
            this.getFizzBuzzNumbers(this.props.start, this.props.end).map((element, k) => <p data-testid={k} >{ element }</p>)
        }</div>)
    }
}

export default FizzBuzz;
