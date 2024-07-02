import { render, screen } from '@testing-library/react'
import RTLQueryGetByDisplayValue from './RTLQueryGetByDisplayValue'


// test('RTLQuery getByText testcase 1', () =>{
//     render(<RTLQueryGetByDisplayValue/>);

//     const input = screen.getByDisplayValue('chinu')
//     expect(input).toBeInTheDocument()

//     const textArea = screen.getByDisplayValue('chinu1')
//     expect(textArea).toBeInTheDocument()
// })



test('RTLQuery getByText testcase 2', () =>{
    render(<RTLQueryGetByDisplayValue/>);

    const input = screen.getAllByDisplayValue('chinu')
    for(let i= 0; i< input.length; i++){
        expect(input[i]).toBeInTheDocument()
    }
})
