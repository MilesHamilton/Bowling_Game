const frames = ['X', 'X', 'X', 'X', 'X', 'X', '4/', 'X', '99', 'X', 'X', 'X'];
var counter = 0;

function BowlingGame(frames) {
  for (let i = 0; i < frames.length - 2; i++) {
    var regularFrame = frames[i]
      .split('')
      .map(Number)
      .reduce((a, b) => a + b);

    var strikeFrame = frames[i + 1]
      .replace('/', 19)
      .replace('X', 19)
      .split('')
      .map(Number)
      .reduce((a, b) => a + b);

    var strikeFrame2 = frames[i + 2]
      .replace('X', 19)
      .split('')
      .map(Number)
      .reduce((a, b) => a + b);

    var secondStrikeThrow = frames[i + 2].split('').map(Number)[0];

    var spareFrame = frames[i]
      .replace('/', 19)
      .split('')
      .map(Number)
      .reduce((a, b) => a + b);

    var spareThrow = frames[i + 1].replace('X', 19).split('').map(Number)[0];
    // ============STRIKE===================

    if (frames[i] === 'X') {
      counter += strikeFrame + 10;
      //============ TWO X's ===========
      if (strikeFrame === 10) {
        strikeFrame2 === 10 ? (counter += 10) : (counter += secondStrikeThrow);
      }
      //================SPARE===============
    } else if (frames[i].includes('/')) {
      counter += spareFrame;
      strikeFrame === 10 ? (counter += 10) : (counter += spareThrow);
      //================REGULAR=============
    } else {
      counter += regularFrame;
    }
    console.log(counter);
  }
}

BowlingGame(frames);
