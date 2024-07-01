import Users from "./user";
import renderer from 'react-test-renderer'

test('class compoonent test 1', ()=> {
  const componentClass = renderer.create(<Users/>).getInstance()
  expect(componentClass.getData()).toMatch('new data')
})