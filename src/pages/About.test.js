import React from 'react'
import ReactDOM from 'react-dom'
import TestRenderer from 'react-test-renderer'
import ReactTestUtils from 'react-dom/test-utils'

import { MuiThemeProvider } from '@material-ui/core/styles'

import { theme } from '../App'
import About from './About'

let component
beforeEach(() => {
  component = TestRenderer.create(
    <MuiThemeProvider theme={theme}>
      <About />
    </MuiThemeProvider>
  )
})

it('should have a title', () => {
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

it('should have two text sections', () => {
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

it('should have a sectionHeading for each section', () => {
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
