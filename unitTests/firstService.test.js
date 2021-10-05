const { describe, it, before } = require('mocha');
const td = require('testdouble');
const assert = require('assert');

describe('Run first service', function () {
  let result;
  before(function () {
    td.replace('../code/dependency', {
      dependency: () => {
        return 'I am the mock for first service';
      }
    });

    const firstService = require('../code/firstService');
    result = firstService();
    console.log(result);
  });

  after(function () {
    td.reset();
  });

  it('validate dependency response', function () {
    assert.equal(result.dependencyResult, 'I am the mock for first service');
  });
  it('validate helper response', function () {
    assert.equal(result.helperResult, 'helper plus I am the mock for first service');
  });
});
