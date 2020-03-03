/**
 * Rotate Matrix: Given an image represented by an NxN matrix,
 * where each pixel in the image is 4 bytes, write a method to
 * rotate the image by 90 degrees.
 * Can you do this in place?
 */

// eslint-disable-next-line no-unused-vars
export const rotate = (matrix:[][]) => {

};

export const printMatrix = (matrix:[][]) => {
    let row = '';
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            row += matrix[i][j];
        }
        console.log(row);
        row = '';
    }
};
