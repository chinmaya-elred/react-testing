import { render, screen, configure } from '@testing-library/react'
import RTLQueryGetByTestId from './RTLQueryGetByTestId'

configure({testIdAttribute: 'element-testid'})


test('RTLQuery getByText testcase 1', () =>{
    render(<RTLQueryGetByTestId/>);

    const test = screen.getByTestId('test')
    expect(test).toBeInTheDocument()
})



// test('RTLQuery getByText testcase 2', () =>{
//     render(<RTLQueryGetByTestId/>);

//    const test = screen.getAllByTestId('test')
//     for(let i= 0; i< test.length; i++){
//         expect(test[i]).toBeInTheDocument()
//     }
// })
