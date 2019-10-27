import React from 'react'
import ReactDOM from 'react-dom'
import TestRenderer from 'react-test-renderer'
import ReactTestUtils from 'react-dom/test-utils'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { Route, BrowserRouter as Router } from 'react-router-dom';

import { theme } from '../App'
import SearchResultRow from './SearchResultRow'

let component;
beforeEach(() => {
  component = TestRenderer.create(
    <MuiThemeProvider theme={theme}>
      <SearchResultRow />
    </MuiThemeProvider>
  )
})

describe('initial state', () => {
  it('should render the song title and artist name', () => {
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('when it is clicked', () => {
  let div
  beforeEach(() => {
    div = document.createElement('div')
    ReactTestUtils.act(() => {
      ReactDOM.render(
        <Router>
          <MuiThemeProvider theme={theme}>
            <SearchResultRow />
          </MuiThemeProvider>
        </Router>
      , div)
    })
    const searchResultRow = div.querySelector('#search-result-row')
    ReactTestUtils.act(() => {
      ReactTestUtils.Simulate.click(searchResultRow)
    })
  })

  afterEach(() => ReactDOM.unmountComponentAtNode(div))

  it('should no longer render the search result row after the redirect', () => {
    const searchResultRow = div.querySelector('#search-result-row')
    expect(searchResultRow).toBeNull()
  })

})
