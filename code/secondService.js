const dependency = require('./dependency');
const helper = require('./helper');

function secondService() {
  const dependencyResult = dependency.dependency();

  const helperResult = helper();

  return { dependencyResult, helperResult };
}

module.exports = secondService;
