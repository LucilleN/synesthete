import React from 'react'
import ReactDOM from 'react-dom'
import TestRenderer from 'react-test-renderer'
import ReactTestUtils from 'react-dom/test-utils'
import { MuiThemeProvider } from '@material-ui/core/styles'

// import sinon from 'sinon'

import { theme } from '../App'
import UploadVisualization from './UploadVisualization'
// import * as api from '../api'

let component;
beforeEach(() => {
  component = TestRenderer.create(
    <MuiThemeProvider theme={theme}>
      <UploadVisualization />
    </MuiThemeProvider>
  )
})

beforeAll(() => {
  ReactDOM.createPortal = jest.fn((component, node) => {
      return component
  })
})

describe('initial state', () => {
  let div
  beforeEach(() => {
    div = document.createElement('div')
    ReactTestUtils.act(() => {
      ReactDOM.render(
        <MuiThemeProvider theme={theme}>
          <UploadVisualization />
        </MuiThemeProvider>
      , div)
    })
  })

  it('should display a title and buttons to reset and navigate to home', () => {
    // console.log("UploadVisualization test, component", component)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should start with two buttons for load options', () => {
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
    const uploadButton = div.querySelector('#upload-file')
    expect(uploadButton).not.toBeNull()
    const loadUrlButton = div.querySelector('#load-url')
    expect(loadUrlButton).not.toBeNull()
  })

  it('should not display the file input or the text input', () => {
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
    const fileInput = div.querySelector('#file-input')
    expect(fileInput).toBeNull()
    const textInput = div.querySelector('#text-input')
    expect(textInput).toBeNull()
  })


})

describe('clicking on the Upload File button', () => {
  let div
  let uploadButton
  beforeEach(() => {
    div = document.createElement('div')
    ReactTestUtils.act(() => {
      ReactDOM.render(
        <MuiThemeProvider theme={theme}>
          <UploadVisualization />
        </MuiThemeProvider>
      , div)
    })
    uploadButton = div.querySelector('#upload-file')
    // console.log("FOUND UPLOAD BUTTON: ", uploadButton)
    ReactTestUtils.act(() => {
      ReactTestUtils.Simulate.click(uploadButton)
    })
  })

  afterEach(() => ReactDOM.unmountComponentAtNode(div))

  it('should show the file input element', () => {
    const fileInput = div.querySelector('#file-input')
    expect(fileInput).not.toBeNull()
  })

  it('should not show the load option buttons', () => {
    const uploadButton = div.querySelector('#upload-file')
    expect(uploadButton).toBeNull()
    const loadUrlButton = div.querySelector('#load-url')
    expect(loadUrlButton).toBeNull()
  })

})

describe('clicking on the Load URL button', () => {
  let div
  beforeEach(() => {
    div = document.createElement('div')
    ReactTestUtils.act(() => {
      ReactDOM.render(
        <MuiThemeProvider theme={theme}>
          <UploadVisualization />
        </MuiThemeProvider>
      , div)
    })
    const loadUrlButton = div.querySelector('#load-url')
    ReactTestUtils.act(() => {
      ReactTestUtils.Simulate.click(loadUrlButton)
    })
  })

  afterEach(() => ReactDOM.unmountComponentAtNode(div))

  it('should show the text input element', () => {
    const textInput = div.querySelector('#text-input')
    expect(textInput).not.toBeNull()
  })

  it('should not show the load option buttons', () => {
    const uploadButton = div.querySelector('#upload-file')
    expect(uploadButton).toBeNull()
    const loadUrlButton = div.querySelector('#load-url')
    expect(loadUrlButton).toBeNull()
  })

  describe('load button', () => {
    it('should be disabled when the text field is blank', () => {
      const loadButton = div.querySelector('#load-button')
      expect(loadButton.disabled).toBe(true)
    })

    it('should be enabled when the text field is not blank', () => {
      const urlTextInput = div.querySelector('#text-input')
      ReactTestUtils.act(() => {
        urlTextInput.value = 'a mock URL'
        ReactTestUtils.Simulate.change(urlTextInput)
      })

      const loadButton = div.querySelector('#load-button')
      expect(loadButton.disabled).toBe(false)
    })

  })

})
