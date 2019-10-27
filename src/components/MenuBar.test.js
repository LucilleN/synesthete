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

describe('clicking on the logo and on each of the buttons', () => {
  let div
  let clickableItems
  beforeEach(() => {
    div = document.createElement('div')
    ReactTestUtils.act(() => {
      ReactDOM.render(
        <Router>
          <MuiThemeProvider theme={theme}>
            <MenuBar />
          </MuiThemeProvider>
        </Router>
      , div)
    })
    const logo = div.querySelector('#logo')
    const home = div.querySelector('#home')
    const search = div.querySelector('#search')
    const upload = div.querySelector('#upload')
    const about = div.querySelector('#about')
    clickableItems = [logo, home, search, upload, about]
  })

  afterEach(() => ReactDOM.unmountComponentAtNode(div))

  it('should still render a menu bar after the redirect', () => {
    clickableItems.forEach((clickableItem) => {
      ReactTestUtils.act(() => {
        ReactTestUtils.Simulate.click(clickableItem)
      })
      const menuBar = div.querySelector('#bar')
      expect(menuBar).not.toBeNull()
    })
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
