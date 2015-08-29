/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    var m = obstacleGrid.length;
    var n = obstacleGrid[0].length;

    var i, j;
    var c = [];
    for (i = 0; i < m + 1; i++) {
        c[i] = [];
        for (j = 0; j < n + 1; j++) {
            if (i == m - 1 && j == n) c[i][j] = 1;
            else c[i][j] = 0;
        }
    }

    for (i = m - 1; i >= 0; i--) {
        for (j = n - 1; j >= 0; j--) {
            if (obstacleGrid[i][j] == 0) {
                c[i][j] = c[i + 1][j] + c[i][j + 1];
            }
        }
    }
    return c[0][0];
};

console.log(uniquePathsWithObstacles([
    [1]
]));

console.log(uniquePathsWithObstacles([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0]
]));

console.log(uniquePathsWithObstacles([
    [0, 0, 0],
    [0, 1, 1],
    [0, 0, 0]
]));
