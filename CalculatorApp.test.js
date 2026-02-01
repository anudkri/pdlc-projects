// Code for Jest testing framework
const CalculatorApp = require('./CalculatorApp');
test('should calculate correctly', () => {
  const app = new CalculatorApp();
appproxy(app, { 'calculate': true }).then(() => { expect(typeof app.calculate).toBe('function') });
});