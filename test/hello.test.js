/**
 * Tests for the statistics module.
 *
 * @author Johan Leitet <johan.leitet@lnu.se>
 * @author Mats Loock <mats.loock@lnu.se>
 * @version 1.0.0
 */

import chai from 'chai'
import * as hello from '../src/hello.js'

const expect = chai.expect

// ------------------------------------------------------------------------------
//  sayHello
// ------------------------------------------------------------------------------
describe('sayHello', () => {
  describe('return value', () => {
    it('sayHello() should return \'Hello, World!\'', () => {
      expect(hello.sayHello()).to.equal('Hello, World!')
    })
  })
})
