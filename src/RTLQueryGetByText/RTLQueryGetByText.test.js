import { render, screen } from '@testing-library/react'
import RTLQueryGetByText from './RTLQueryGetByText'


// test('RTLQuery getByText testcase 1', () =>{
//     render(<RTLQueryGetByText/>);

//     const button = screen.getByText('Login')
//     const para = screen.getByText('This is paragarph tag')
//     expect(button).toBeInTheDocument()
//     expect(para).toBeInTheDocument()
//     expect(para).toHaveClass('para')
//     expect(para).toHaveAttribute('id')
// })



test('RTLQuery getByText testcase 2', () =>{
    render(<RTLQueryGetByText/>);

    const para = screen.getAllByText('hello')
    for(let i= 0; i< para.length; i++){
        expect(para[i]).toBeInTheDocument()
    }
})
