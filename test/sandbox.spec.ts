import {expect} from 'chai'
// import { testFunction } from './path/to/sourceModule'

describe('Sandbox Test', () => {
  describe('Basic Unit Test 01', () => {
    it('1 + 1 should equal 2', () => {
      expect(1 + 1).to.equal(2)
      // expect(testFunction(1, 1)).to.equal(2)
    })
    it('2 + 7 should equal 9', () => {
      expect(2 + 7).to.equal(9)
    })
  })
})

