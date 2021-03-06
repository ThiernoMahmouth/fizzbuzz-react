import {render, screen, cleanup } from '@testing-library/react';
import FizzBuzz from '../FizzBuzz';

test('test de validité', () =>{
    const start=1, end= 100;
    render(<FizzBuzz start={start} end={end} />)
    const line100 = screen.getByTestId(99);
    const line23 = screen.getByTestId(22);
    const line58 = screen.getByTestId(57);
    const line60 = screen.getByTestId(59);
    const line37 = screen.getByTestId(36);
    const line3 = screen.getByTestId(2);
    expect(line3).toHaveTextContent("Fizz");
    expect(line23).toHaveTextContent("Fizz");
    expect(line37).toHaveTextContent("Fizz");
    expect(line58).toHaveTextContent("Buzz");
    expect(line60).toHaveTextContent("FizzBuzz");
    expect(line100).toHaveTextContent("Buzz");
})