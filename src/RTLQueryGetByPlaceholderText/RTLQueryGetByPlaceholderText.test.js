import { render, screen } from '@testing-library/react'
import RTLQueryGetByLabelText from './RTLQueryGetByPlaceholderText'


// test('RTLQuery getbyplaceholdertext testcase 1', () =>{
//     render(<RTLQueryGetByLabelText/>);

//     const text = screen.getByPlaceholderText('enter name')
//     expect(text).toBeInTheDocument()
// })


test('RTLQuery getbyplaceholdertext testcase 1', () =>{
    render(<RTLQueryGetByLabelText/>);

    const text = screen.getAllByPlaceholderText('enter name')

    for(let i=0; i< text.length; i++){
        expect(text[i]).toBeInTheDocument()
    }

})
