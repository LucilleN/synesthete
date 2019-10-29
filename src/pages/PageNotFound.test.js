import React from 'react'
import ReactDOM from 'react-dom'
import TestRenderer from 'react-test-renderer'
import ReactTestUtils from 'react-dom/test-utils'

import { MuiThemeProvider } from '@material-ui/core/styles'

import { theme } from '../App'
import PageNotFound from './PageNotFound'

let component
beforeEach(() => {
  component = TestRenderer.create(
    <MuiThemeProvider theme={theme}>
      <PageNotFound />
    </MuiThemeProvider>
  )
})

describe('initial state', () => {
  let div
  beforeEach(() => {
    div = document.createElement('div')
    ReactTestUtils.act(() => {
      ReactDOM.render(
        <MuiThemeProvider theme={theme}>
          <PageNotFound />
        </MuiThemeProvider>
      , div)
    })
  })

  it('should have the title "page not found"', () => {
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
    const pageTitle = div.querySelector('#title')
    expect(pageTitle.textContent).toBe('page not found')
  })

  it('should have a button that redirects to home', () => {
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
