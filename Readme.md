# HOW TO USE

## General features

This repository contains one folder for each year of Advent of code, in which you can find one folder per day.

Each of all these folders contains a index.js file.

The one at root execute all index.js of each year, the one in a year folder executes all index.js of each day, and the one in day folder contains the code to solve the puzzle.

To execute the wanted index.js, you just need to place in the right folder and type ```node index.js``` you'll quickly the the result in the console.

## Day folder

### input.txt

In this file you need to replace my input by yours, and save it.

### testInput.txt

This file contains the sample input provided by the puzzle page.

### index.js

In each day folder, you have an index.js file which is divided in 5 parts :

#### GLOBAL

In this part, the code reads the content of ```input.txt``` file (or ```testInput.txt``` if test is set to true) and put it in the ```input``` variable.

Vars test1 and test2 respectively contains the expected result with the sample input provided in the puzzle page.

#### SPECIFIC

Here you have to explain how to manage the ```input``` variable, how and where to cut it.

#### PART 1 and PART 2

Here you have to solve separately each part of the puzzle

#### RESULTS

If ```test``` is set to true, the program tells you if your code give the right answer and not.
If ```test``` is set to false, the program will give you the answer you should propose in the puzzle.

Have fun.