import { test } from 'node:test'
import assert from 'node:assert/strict'
import { cartTotal } from '../src/cart.js'

// This test fails until you implement cartTotal. That is the point:
// run `npm test` first and see it red.
test('the example from the slides', () => {
  const items = [
    { name: 'Áo thun', price: 180000, qty: 2 },
    { name: 'Sổ tay', price: 45000, qty: 1 },
  ]
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  assert.equal(cartTotal(items, options), 467400)
})

test('an empty cart has no VAT or shipping', () => {
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  assert.equal(cartTotal([], options), 0)
})

test('shipping is free exactly at the subtotal threshold', () => {
  const items = [{ name: 'Book', price: 500, qty: 1 }]
  const options = { vatRate: 0.1, freeShipFrom: 500, shipFee: 30 }
  assert.equal(cartTotal(items, options), 550)
})

test('shipping is charged below the subtotal threshold', () => {
  const items = [{ name: 'Book', price: 400, qty: 1 }]
  const options = { vatRate: 0.1, freeShipFrom: 500, shipFee: 30 }
  assert.equal(cartTotal(items, options), 470)
})

test('the total is a number rounded to the whole đồng', () => {
  const items = [{ name: 'Book', price: 10, qty: 1 }]
  const options = { vatRate: 0.055, freeShipFrom: 10, shipFee: 30 }
  assert.equal(cartTotal(items, options), 11)
})

test('a negative price throws RangeError', () => {
  const items = [{ name: 'Book', price: -1, qty: 1 }]
  const options = { vatRate: 0, freeShipFrom: 0, shipFee: 0 }
  assert.throws(() => cartTotal(items, options), RangeError)
})

test('a zero quantity throws RangeError', () => {
  const items = [{ name: 'Book', price: 10, qty: 0 }]
  const options = { vatRate: 0, freeShipFrom: 0, shipFee: 0 }
  assert.throws(() => cartTotal(items, options), RangeError)
})

test('a negative quantity throws RangeError', () => {
  const items = [{ name: 'Book', price: 10, qty: -1 }]
  const options = { vatRate: 0, freeShipFrom: 0, shipFee: 0 }
  assert.throws(() => cartTotal(items, options), RangeError)
})

test('a fractional quantity throws RangeError', () => {
  const items = [{ name: 'Book', price: 10, qty: 1.5 }]
  const options = { vatRate: 0, freeShipFrom: 0, shipFee: 0 }
  assert.throws(() => cartTotal(items, options), RangeError)
})
