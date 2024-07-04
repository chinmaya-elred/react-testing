import { render, screen } from "@testing-library/react";
import TestMatch from "./TestMatch";

test('test1 the regex and patteren', () =>{
    render(<TestMatch/>)

    const regex = screen.getByText(/Hello World/i)
    expect(regex).toBeInTheDocument()
})

test('test2 the regex and patteren testcase 2', () =>{
    render(<TestMatch/>)

    const regex = screen.getByText(/Hello/, {exact: false})
    expect(regex).toBeInTheDocument()
})

test('test3 the regex and patteren testcase 3', () =>{
    render(<TestMatch/>)

    const regex = screen.getByText((content, element)=> content.startsWith('He'))
    expect(regex).toBeInTheDocument()

    const regex2 = screen.getByText((content, element)=> content.endsWith('ld'))
    expect(regex2).toBeInTheDocument()
})
