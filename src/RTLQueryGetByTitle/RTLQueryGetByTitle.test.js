import { render, screen } from '@testing-library/react'
import RTLQueryGetByTitle from './RTLQueryGetByTitle'


test('RTLQuery getByText testcase 1', () =>{
    render(<RTLQueryGetByTitle/>);

    const button = screen.getByTitle('my new button')
    expect(button).toBeInTheDocument()
})


test('RTLQuery getByText testcase 2', () =>{
    render(<RTLQueryGetByTitle/>);

    const span = screen.getAllByTitle('new-span')
    for(let i= 0; i< span.length; i++){
        expect(span[i]).toBeInTheDocument()
    }
})
