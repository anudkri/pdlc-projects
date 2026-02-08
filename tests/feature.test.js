import { Feature } from '../src/feature.js';

let featureElement;
let featureInstance;

beforeEach(() => {
  featureElement = document.createElement('div');
  featureInstance = new Feature(featureElement);
});

test('should bind click event', () => {
  const spy = jest.spyOn(featureInstance, 'handleFeatureInteraction');
  featureInstance.bindEvents();
  featureElement.click();
  expect(spy).toHaveBeenCalled();
});