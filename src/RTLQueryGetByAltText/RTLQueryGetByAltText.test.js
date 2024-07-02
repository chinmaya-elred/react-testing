import { render, screen } from '@testing-library/react'
import RTLQueryGetByAltText from './RTLQueryGetByAltText'


// test('RTLQuery getByText testcase 1', () =>{
//     render(<RTLQueryGetByAltText/>);

//     const img = screen.getByAltText('no-image')
//     expect(img).toBeInTheDocument()
// })


test('RTLQuery getByText testcase 2', () =>{
    render(<RTLQueryGetByAltText/>);

    const img = screen.getAllByAltText('no-image')
    for(let i= 0; i< img.length; i++){
        expect(img[i]).toBeInTheDocument()
    }
})
