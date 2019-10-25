import React from 'react'
import ReactDOM from 'react-dom'
import TestRenderer from 'react-test-renderer'
import ReactTestUtils from 'react-dom/test-utils'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { Route, BrowserRouter as Router } from 'react-router-dom';

// import sinon from 'sinon'

import { theme } from '../App'
import MenuBar from './MenuBar'
// import * as api from '../api'



let component;
beforeEach(() => {
  component = TestRenderer.create(
    <MuiThemeProvider theme={theme}>
      <MenuBar />
    </MuiThemeProvider>
  )
})

const TestingRouter = ({ ComponentWithRedirection, redirectUrl }) => (
  <Router>
    <Route path="/" exact={true} render={() => <ComponentWithRedirection />} />
    <Route path={redirectUrl} render={() => <div>{redirectUrl}</div>} />
  </Router>
)

// beforeAll(() => {
//     ReactDOM.createPortal = jest.fn((component, node) => {
//         return component
//     })
// })

describe('initial state', () => {
  it('should render the Synesthete logo', () => {
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should have four navigation buttons', () => {
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})

// describe('the logo', () => {
//   let div
//   // let history
//   beforeEach(() => {
//     div = document.createElement('div')
//   })
//
//   afterEach(() => ReactDOM.unmountComponentAtNode(div))
//
//   it('should redirect to home when clicked', () => {
//
//     const logo = div.querySelector('#logo')
//
//     ReactTestUtils.act(() => {
//       ReactDOM.render(
//         <MuiThemeProvider theme={theme}>
//           <TestingRouter
//             ComponentWithRedirection={() => <MenuBar />}
//             redirectUrl={'/'}
//           />
//         </MuiThemeProvider>
//       , div)
//     })
//
//     ReactTestUtils.act(() => {
//       logo.dispatchEvent(new MouseEvent('click', {bubbles: true}));
//     })
//
//     expect(history.location.pathname).toBe("/")
//   })
//
// })
