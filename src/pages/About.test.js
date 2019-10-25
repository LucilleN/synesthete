import React from 'react'
import ReactDOM from 'react-dom'
import TestRenderer from 'react-test-renderer'
import ReactTestUtils from 'react-dom/test-utils'
import { MuiThemeProvider } from '@material-ui/core/styles'

// import sinon from 'sinon'

import { theme } from '../App'
import About from './About'
// import * as api from '../api'

let component;
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


// describe('search button', () => {
//   let div
//   beforeEach(() => {
//     div = document.createElement('div')
//     ReactTestUtils.act(() => {
//       ReactDOM.render(
//         <MuiThemeProvider theme={theme}>
//           <Search />
//         </MuiThemeProvider>
//       , div)
//     })
//   })
//
//   afterEach(() => ReactDOM.unmountComponentAtNode(div))
//
//   it('should be enabled when the search field is not blank', () => {
//     const searchInput = div.querySelector('input')
//     ReactTestUtils.act(() => {
//       searchInput.value = 'i can haz unit tests'
//       ReactTestUtils.Simulate.change(searchInput)
//     })
//
//     const searchButton = div.querySelector('button')
//     expect(searchButton.disabled).toBe(false)
//   })
//
//   it('should be disabled when the query is blank', () => {
//     const searchButton = div.querySelector('button')
//     expect(searchButton.disabled).toBe(true)
//   })
//
//   it('should be enabled when the user enters a query', () => {
//     const searchInput = div.querySelector('input')
//     ReactTestUtils.act(() => {
//       searchInput.value = 'hello there this is a song search'
//       ReactTestUtils.Simulate.change(searchInput)
//     })
//
//     const searchButton = div.querySelector('button')
//     expect(searchButton.disabled).toBe(false)
//   })
// })
