'use strict';

/* global require */

QUnit.module('Addition');

const add = require('add');

test('we can add numbers', (assert) => {
  const result = add(1, 3);
  const result2 = add(1, 5);

  assert.equal(result, 4);
  assert.equal(result2, 6);
});
