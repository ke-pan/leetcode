/**
 * A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).
 * The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).
 * How many possible unique paths are there?
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    var i, j;
    c = []
    for (i = 0; i <= m; i++) {
        c[i] = []
        for (j = 0; j <= n; j++) {
            if (i == 1 && j == 1) c[i][j] = 1;
            else c[i][j] = 0;
        }
    }

    for (i = 1; i <= m; i++) {
        for (j = 1; j <= n; j++) {
            if (i != 1 || j != 1) {
                c[i][j] = c[i - 1][j] + c[i][j - 1];
            }
        }
    }
    // console.log(c);
    return c[m][n];
};


console.log(uniquePaths(2, 2));
