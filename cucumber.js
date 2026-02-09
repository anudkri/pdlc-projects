module.exports = {
  default: `--format-options '{"snippetInterface": "synchronous"}' --require features/step_definitions/*.steps.js --require-module @babel/register`,
  paths: ['features'],
  parallel: 2
};