import React from 'react'
import ReactDOM from 'react-dom'
import TestRenderer from 'react-test-renderer'
import ReactTestUtils from 'react-dom/test-utils'
import { MuiThemeProvider } from '@material-ui/core/styles'

import { theme } from '../App'
import ErrorDialog from './ErrorDialog'

let component
beforeEach(async() => {
  component = await TestRenderer.create(
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

// describe('clicking on the OK button', () => {
//   let div
//   beforeEach(async() => {
//     div = document.createElement('div')
//     await ReactTestUtils.act(async() => {
//       await ReactDOM.render(
//         <MuiThemeProvider theme={theme}>
//           <ErrorDialog error={"Test Error"} errorSubtitle={"Test Subtitle"}/>
//         </MuiThemeProvider>
//       , div)
//     })
//     const closeButton = div.querySelector('#close-button')
//     console.log("CLOSE BUTTON", closeButton)
//     await ReactTestUtils.act(async () => {
//       await ReactTestUtils.Simulate.click(closeButton)
//     })
//   })
//
//   afterEach(() => ReactDOM.unmountComponentAtNode(div))
//
//   it('should close the dialog', () => {
//     const errorDialog = div.querySelector('#error-dialog')
//     expect(errorDialog).toBeNull()
//   })
//
// })
