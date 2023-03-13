// Odd Sum
// Question Name: Odd Sum
// Problem Statement
// Antonio got an array A consisting of N integers as his christmas present.
// Antonio likes an array if and only if the sum of all elements of that array is odd. Like Antonio likes arrays [4,1,4], [2,2,1] etc. but not arrays [4,4], [2,6,2] etc.
// Now to make array A of his likeness he can perform the belows operations on it :
// Operation 1:
// Remove exactly one element from the array.
// Operation 2:
// Divide every element of the array by 2.
// Given array A, print the minimum number of above operations required to make array A of Antonio’s likeness(i.e. To make the sum of all elements of array A odd).
// Input Format
// First line contains a single integer denoting N.
// Next line contains N space separated integers denoting the elements of array A.
// Output Format

// Print the minimum number of above operations required to make array A of Antonio’s likeness(i.e. To make the sum of all elements of array A odd).
// Constraints

// 1<=N<=105
// 1<=Ai<=109
// Sample Input 1

// 3

// 6 4 10

// Sample Output 1

// 2

// Explanation of Sample 1

// One can perform the operations as :

// First perform operation 1 and remove the first element of the array. Array A becomes = [4 10].
// Then perform the second operation and divide each element of the array by 2. A becomes = [2 5].
// Now Antonio likes array [2 5] because the sum of all elements of this array is 7, which is odd.
