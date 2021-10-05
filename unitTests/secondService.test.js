const { describe, it, before } = require('mocha');
const td = require('testdouble');
const assert = require('assert');

describe('Run second service', function () {
  let result;
  before(function () {
    td.replace('../code/dependency', {
      dependency: () => {
        return 'I am the mock for second service';
      }
    });

    const secondService = require('../code/secondService');
    result = secondService();
    console.log(result);
  });

  after(function () {
    td.reset();
  });

  it('validate dependency response', function () {
    assert.equal(result.dependencyResult, 'I am the mock for second service');
  });
  it('validate helper response', function () {
    assert.equal(result.helperResult, 'helper plus I am the mock for second service');
  });
});
