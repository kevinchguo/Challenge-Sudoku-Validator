/*  SudokuValidator(sudoku)
 *
 *  @param sudoku                       a multidimensional array containing the sudoku puzzle
 *
 *  @public property sudoku             the sudoku grid
 *
 *  @public method validate(num)        num is the perfect squared value of an integer
                                        for example: 9(result of 3^3) & 4 (2^2).
 */

exports.SudokuValidator = SudokuValidator;

function SudokuValidator(sudoku) {
  this.sudoku = sudoku;
}

SudokuValidator.prototype.validate = function(num) {
  // Do work here

  let rowCounter = 0;
  let columnCounter = 0;
  let boxCounter = 0;
  let sudokuNum = 0;
  let boxNum = 0;

  for (let x = 1; x <= num; x++) {
    sudokuNum += x;
  }
  // Check rows
  for (let i = 0; i < num; i++) {
    let rowNum = 0;
    for (let j = 0; j < num; j++) {
      rowNum += this.sudoku[i][j];
    }
    if (rowNum !== sudokuNum) {
      rowCounter++;
    }
  }

  // Check columns
  for (let k = 0; k < num; k++) {
    let columnNum = 0;
    for (let l = 0; l < num; l++) {
      columnNum += this.sudoku[l][k];
    }
    if (columnNum !== sudokuNum) {
      columnCounter++;
    }
  }

  // Check boxes
  let boxRow = 0;
  let boxColumn = 0;
  for (let n = 1; n <= num; n++) {
    for (let m = n; m < Math.sqrt(num); m++) {}
  }

  // Work on verifying each box
  if (rowCounter === 0 && columnCounter === 0) {
    return true;
  } else {
    return false;
  }
};
