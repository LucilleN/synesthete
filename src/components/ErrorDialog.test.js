import React from 'react'
import ReactDOM from 'react-dom'
import TestRenderer from 'react-test-renderer'
import ReactTestUtils from 'react-dom/test-utils'
import { MuiThemeProvider } from '@material-ui/core/styles'

import { theme } from '../App'
import ErrorDialog from './ErrorDialog'

let component;
beforeEach(() => {
  component = TestRenderer.create(
    <MuiThemeProvider theme={theme}>
      <ErrorDialog error={"Test Error"} errorSubtitle={"Test Subtitle"}/>
    </MuiThemeProvider>
  )
})

xdescribe('initial state', () => {
  it('should render the error title', () => {
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should render the error message text', () => {
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})

xdescribe('clicking on the OK button', () => {
  let div
  beforeEach(() => {
    div = document.createElement('div')
    ReactTestUtils.act(() => {
      ReactDOM.render(
        <MuiThemeProvider theme={theme}>
          <ErrorDialog error={"Test Error"} errorSubtitle={"Test Subtitle"}/>
        </MuiThemeProvider>
      , div)
    })
    const closeButton = div.querySelector('#close-button')
    ReactTestUtils.act(() => {
      ReactTestUtils.Simulate.click(closeButton)
    })
  })

  afterEach(() => ReactDOM.unmountComponentAtNode(div))

  it('should close the dialog', () => {
    const errorDialog = div.querySelector('#error-dialog')
    expect(errorDialog).toBeNull()
  })

})
