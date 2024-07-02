import { render, screen } from '@testing-library/react'
import RTLQueryGetByLabelText from './RTLQueryGetByLabelText'


// test('RTLQuery getbylabeltext testcase 1', () =>{
//     render(<RTLQuery/>);

//     const text = screen.getByLabelText('Username')
//     expect(text).toBeInTheDocument()
// })


test('RTLQuery getAllByLabelText testcase 1', () =>{
    render(<RTLQueryGetByLabelText/>);

    const text = screen.getAllByLabelText('Username')

    for(let i=0; i< text.length; i++){
        expect(text[i]).toBeInTheDocument()
    }

})

test('RTLQuery getAllByLabelText testcase 2', () =>{
    render(<RTLQueryGetByLabelText/>);

    const text = screen.getAllByLabelText('Skill')

    for(let i=0; i< text.length; i++){
        expect(text[i]).toBeInTheDocument();
        expect(text[i]).toBeChecked()
    }
})