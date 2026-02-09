module.exports = {
  default: {
    require: ['../../stories/**/step_definitions/**/*.steps.js'],
    requireModule: ['@babel/register'],
    format: [
      'progress-bar',
      'html:../../reports/cucumber-report.html',
      'json:../../reports/cucumber-report.json'
    ],
    formatOptions: { snippetInterface: 'async-await' }
  }
};
