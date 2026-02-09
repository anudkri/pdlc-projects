module.exports = {
  default: `--require-module ts-node/register --require tests/stories/**/*.steps.js --format progress-bar --format json:reports/cucumber_report.json --publish` 
};