'use strict';

/* global require */

QUnit.module('Addition');

const add = require('add');
const arraySum = require('array-sum');
const multArray = require('mult-array');

test('we can add numbers', (assert) => {
  const result = add(1, 3);
  const result2 = add(1, 5);

  assert.equal(result, 4);
  assert.equal(result2, 6);
});

test('it can sum up arrays', (assert) => {
  const sum1 = arraySum([1]);
  const sum2 = arraySum([1, 1]);
  const sum3 = arraySum([1, 3, 4]);

  assert.equal(sum1, 1);
  assert.equal(sum2, 2);
  assert.equal(sum3, 8);
});

test('it multiplies the array values', (assert) => {
  const result = multArray([1], 2);
  const resultTwo = multArray([4, 5, 6], 3);

  assert.deepEqual(result, [2]);
  assert.deepEqual(resultTwo, [12, 15, 18]);
});
