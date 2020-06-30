import {expect} from 'chai'
import calculator from '../src/sandbox'

describe('function result', () => {
  it('1 + 1 should equal 2', () => {
    expect(calculator(1,1)).to.equal(4)
  })
})

