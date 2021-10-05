const dependency = require('./dependency');

function helper() {
  const result = dependency.dependency();
  return `helper plus ${result}`;
}

module.exports = helper;
