class CalculatorApp { constructor() { this.levels = [new GameLevel('easy', 0), new GameLevel('medium', 1), new GameLevel('hard', 2)]; }
calculate(this, difficulty, levelNumber) {
  const gameLevel = this.levels.find(level => level.difficulty === difficulty && level.levelNumber === levelNumber);
  if (gameLevel) { console.log(`Starting ${difficulty} Level ${levelNumber}`); } else { console.log('Invalid Difficulty or Level'); }
}
