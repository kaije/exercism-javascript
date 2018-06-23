export default class Matrix {
  constructor(matrix) {
    this.rows = []
    this.columns = []

    this.rowsArray = matrix.split('\n')
      .forEach( (row, index) => {
        let rowArr = row.split(' ').map( value => +value);
        this.rows[index] = rowArr;
      });

    this.rows.forEach( (rowArr, rowIndex) => {
      rowArr.forEach( (element, colIndex) => {
        this.columns[colIndex] = this.columns[colIndex] || [];
        this.columns[colIndex].push(element);
      });
    });
  }
}
