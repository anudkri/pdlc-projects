class GameLevel {
  constructor(difficulty, level) { this.difficulty = difficulty; this.levelNumber = level; }
}
const LevelEasy = new GameLevel('easy', '1');
const LevelMedium = new GameLevel('medium', '2');
const LevelHard = new GameLevel('hard', '3');