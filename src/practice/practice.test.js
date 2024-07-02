import { render, screen } from "@testing-library/react";
import Practice from "../practice/practice";

// test('get by role example 1', ()=>{
//     render(<Practice/>);
//     const btn1 = screen.getByRole('button', {name: 'click 1'})
//     expect(btn1).toBeInTheDocument()
//     // const btn2 = screen.getByRole('button', {name: 'click 2'})
//     // expect(btn2).toBeInTheDocument()
// })


test('getallbyrole testcase 1', () =>{
    render(<Practice />)
    const btn = screen.getAllByRole('button')
    const options = screen.getAllByRole('option')

    for(let i=0; i<btn.length; i++){
        expect(btn[i]).toBeInTheDocument()
    }

    for(let i=0; i<options.length; i++){
        expect(options[i]).toBeInTheDocument()
    }

})