let day = function day(){

    /* GLOBAL */
    dayNumber = __dirname.substring(__dirname.lastIndexOf('Day')+3);
    console.log("Day " + dayNumber + " answers:");
    const test = false;
    const test1 = 11;
    const test2 = 26;

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
    
    input = input.replaceAll("\r\n", "\n");
    const element = input.split("");


    /* PART 1 */
    let answer1 = 3;


    let identical = true;
    while(identical){
        answer1++;
        let signal = [
            element[answer1 - 4],
            element[answer1 - 3],
            element[answer1 - 2],
            element[answer1 - 1],
        ]    
        identical = false;
        for(let i =0; i < 3;i++){
            for(let j = i+1; j<4;j++){
                if (signal[i] === signal[j]){
                    identical = true;
                }
            }
        }
    
    }
    /* PART 2 */
    let answer2 = 13;


    identical = true;
    while(identical){
        answer2++;
        let signal = [
            element[answer2 - 1],
            element[answer2 - 2],
            element[answer2 - 3],
            element[answer2 - 4],
            element[answer2 - 5],
            element[answer2 - 6],
            element[answer2 - 7],
            element[answer2 - 8],
            element[answer2 - 9],
            element[answer2 - 10],
            element[answer2 - 11],
            element[answer2 - 12],
            element[answer2 - 13],
            element[answer2 - 14],
        ]    
        identical = false;
        for(let i =0; i < 13;i++){
            for(let j = i+1; j<14;j++){
                if (signal[i] === signal[j]){
                    identical = true;
                }
            }
        }    
    }
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
