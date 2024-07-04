import { render , screen } from "@testing-library/react"
import QueryByText from "./QueryByText"

test('query by test case1', () =>{
    render(<QueryByText/>)
    const btn = screen.queryByText('LogIn')
    expect(btn).not.toBeInTheDocument()
})