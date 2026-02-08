import { Feature } from './feature.js';

function init() {
  const featureElement = document.getElementById('feature');
  const feature = new Feature(featureElement);
  feature.bindEvents();
}

document.addEventListener('DOMContentLoaded', init);