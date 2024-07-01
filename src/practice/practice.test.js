import { render, screen } from "@testing-library/react";
import Practice from "../practice/practice";

test('get by role example 1', ()=>{
    render(<Practice/>);
    const btn1 = screen.getByRole('button', {name: 'click 1'})
    expect(btn1).toBeInTheDocument()
    // const btn2 = screen.getByRole('button', {name: 'click 2'})
    // expect(btn2).toBeInTheDocument()
})