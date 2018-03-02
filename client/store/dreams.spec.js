/* global describe beforeEach afterEach it */
import {expect} from 'chai'
import assert from 'assert'
import {default as reducer, GET_DREAMS, ADD_DREAM} from './dreams'

describe('dreams reducer', () => {
  it('starts off with []', () => {
    const initialState = reducer(undefined, {type: '@@INIT'})
    expect(initialState).to.deep.equal([])
  })

  it('responds to GET_DREAMS with the dreams', () => {
    const dreams = reducer(undefined, {
      type: GET_DREAMS,
      dreams: [1, 2, 3]
    })
    expect(dreams).to.eql([1, 2, 3])
  })

  it('responds to ADD_DREAM by appending the dream', () => {
    const initialDreams = [1, 2, 3]
    const dreams = reducer(initialDreams, {
      type: ADD_DREAM,
      dream: 11
    })
    expect(dreams).to.deep.equal([1, 2, 3, 11], 'appends the dream')
    
    // Behavior driven development style (BDD):
    expect(dreams).not.to.equal(initialDreams, 'does not modify the state')
    
    // Assertion style:
    assert(dreams !== initialDreams, 'does not modify the state')
  })
})
