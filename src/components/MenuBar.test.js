import React from 'react'
import ReactDOM from 'react-dom'
import TestRenderer from 'react-test-renderer'
import ReactTestUtils from 'react-dom/test-utils'

import { MuiThemeProvider } from '@material-ui/core/styles'

import { BrowserRouter as Router } from 'react-router-dom'

import { theme } from '../App'
import MenuBar from './MenuBar'

let component
beforeEach(() => {
  component = TestRenderer.create(
    <Router>
      <MuiThemeProvider theme={theme}>
        <MenuBar />
      </MuiThemeProvider>
    </Router>,
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
        </Router>,
        div,
      )
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
    clickableItems.forEach(clickableItem => {
      ReactTestUtils.act(() => {
        ReactTestUtils.Simulate.click(clickableItem)
      })
      const menuBar = div.querySelector('#bar')
      expect(menuBar).not.toBeNull()
    })
  })
})
