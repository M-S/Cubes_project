# Cubes_project
To find the smallest number  different sized cubes that fit in a given size of box
Implementation exercise
-----------------------
You are given a box with integer dimensions length x width x height. You
also have a set of cubes whose sides are powers of 2, e.g. 1x1x1, 2x2x2,
4x4x4 etc.
You need to fill the box with cubes from the set.
Write a program that for a given box and given set of cubes can determine
the smallest number of cubes needed to fill the box.
The set of cubes can be represented for instance as a list or array of
numbers, where the position in the list designates the dimension of the
cube. E.g. 100 10 1 means you have 100 cubes of 1x1x1 and 10 cubes of 2x2x2
and 1 cube of 4x4x4.
A problem specification is a sequence of lines separated by newline. Each
line has the box dimensions as the first three elements and the remaining
elements enumerate the given cubes. Elements are separated by a single
space. Lines are terminated by your platform’s newline convention. E.g.
2 3 4 5 6
7 8 9 1 2 3 4 
specifies two problems:
a box with dimensions 2 x 3 x 4, 5 cubes of 1x1x1 and 6 cubes of 2x2x2
a box with dimensions 7 x 8 x 9, 1 cube of 1x1x1, 2 of 2x2x2, 3 of 4x4x4, and 4 of 8x8x8.
Your program should read one or more problem specifications from stdin and
print the answer to each problem on stdout. Spend as little effort as
possible on parsing and validation of the input. An unsolvable problem
should yield -1. Please provide instructions on how to run / compile your
program.

To get output:
----------------
Browse https://m-s.github.io/Cubes_project/ 
or 
clone the project open the index.html page in browser. 

Enter the values in the text area of the html page and press 'submit' button 
***************************
Algorithm for Cubes Project
***************************
Step 1:
	Get the input on buttonClick and store the box dimensions in 'boxArray' and cube numbers in 'cubeArray'.

Step 2:
	Create a function to find the volume of box

Step 3: 
	Create a function to find power of 2 (to calculate cube size) with the same cube array length and store in  'powersArray'

Step 4:
 	Create a function to find the smallest number of cubes that will fit in a box and return the result in 'resultArray'.

Step5:
	Inside the function , create a 'boxVolumeArray' to find the volume of the boxes.

Step 6: 
	Create also a 'cubeVolumeArray' that store the volume of cubes with respective sizes (powers of 2).

Step 7:
	Create a loop iterating through each elements of all arrays to check for conditions

Step 8:
	Check whether the volume of box is greater than total of volume of cubes of all sizes.

Step 9: 
	If true , then the smallest no. of cubes cannot be determined , result is -1,store in result Array.

Step 10: 
	If volume of box is lesser, then find the difference (boxVolume1) between volume of box (boxVolume) and the volume of last cube element.

Step 11:
	If the difference in volume(boxVolume1) is negative, then the smallest no. of cubes =  volume of box/ size of last cube , store the result in result Array, and continue to the next element in the loop.

Step 12:
	If the difference in volume(boxVolume1)  is positive, then the smallest no.of cubes = no. of cubes of last size.

Step 13:
	Repeat from step 10, with the difference in volume as new volume of box(boxVolume = boxVolume1), 
	the new difference(boxVolume1) is between new volume of box(boxVolume) and the volume of the second last element,
	repeat step 10 to step 13 and add all the smallest no.of cubes(result) till the first element of cube is reached.  Store the final result in resultArray. 
	Continue to the next element in the  loop.

Step 14: 
	After looping , display the resultArray with the results each element in new line. 

