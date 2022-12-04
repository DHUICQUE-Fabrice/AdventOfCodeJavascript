let day = function day(){

    /* GLOBAL */
    dayNumber = __dirname.substring(__dirname.lastIndexOf('Day')+3);
    console.log("Day " + dayNumber + " answers:");
    const test = false;
    const test1 = 2;
    const test2 = 4;

    const fs = require('fs');
    let dir = test ? __dirname + '/testInput.txt' : __dirname + '/input.txt';
    let input = fs.readFileSync(dir, {encoding: 'utf-8'});

    if(input === ''){
        console.log('No input');
        return;
    }
    if(test){
        console.log('Test Expected Answers: Part1=' + test1, "| Part2=" + test2);
    }


    /* SPECIFIC */

    const pairs = input.split("\r\n");
    let sections = [];

    pairs.forEach(row => {
        sections.push(row.split(","));
    });

    /* PART 1 */
    let answer1 = 0;
    sections.forEach(assignment => {
        let minA = parseInt(assignment[0].split('-')[0]);
        let maxA = parseInt(assignment[0].split('-')[1]);
        let minB = parseInt(assignment[1].split('-')[0]);
        let maxB = parseInt(assignment[1].split('-')[1]);
        if(
            (minA >= minB && maxA <= maxB) ||
            (minA <= minB && maxA >= maxB)
        ){
            answer1 ++;
        }
    })

    /* PART 2 */
    let answer2 = 0;
    sections.forEach(assignment => {
        let minA = parseInt(assignment[0].split('-')[0]);
        let maxA = parseInt(assignment[0].split('-')[1]);
        let minB = parseInt(assignment[1].split('-')[0]);
        let maxB = parseInt(assignment[1].split('-')[1]);
        if(
            (minA <= minB && maxA >= minB) ||
            (minB <= minA && maxB >= minA)
        ){
            answer2 ++;
        }
    })

    /* RESULTS */
    if(answer1 === undefined && answer2 === undefined){
        console.log("Not yet available");
    }
    if(answer1 !== undefined){
        if(test){
            if(answer1 === test1){
                answer1 += " CORRECT";
            }else{
                answer1 += " ERROR";
            }
        }
        console.log("Part 1: ", answer1);
    }
    if(answer2 !== undefined){
        if(test){
            if(answer2 === test2){
                answer2 += " CORRECT";
            }else{
                answer2 += " ERROR";
            }
        }
        console.log("Part 2: ", answer2);
    }
}();
