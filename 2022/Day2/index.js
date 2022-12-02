let day = function day(){

    /* GLOBAL */
    dayNumber = __dirname.substring(__dirname.lastIndexOf('Day')+3);
    console.log("Day " + dayNumber + " answers:");
    const test = false;
    const test1 = 15;
    const test2 = 12;
    
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

    const rounds = input.split("\r\n");

    /* PART 1 */
    let answer1 = 0;
    rounds.forEach(round => {
        roundArray = round.split(' ');
        switch(roundArray[0]){
            case 'A':
                switch(roundArray[1]){
                    case 'X':answer1+=1+3
                        break;
                    case 'Y':answer1+=2+6
                        break;
                    case 'Z':answer1+=3
                        break;
                }
                break;
    
            case 'B':
                switch(roundArray[1]){
                    case 'X':answer1+=1
                        break;
                    case 'Y':answer1+=2+3
                        break;
                    case 'Z':answer1+=3+6
                        break;
                }     
                break;
            case 'C':
                switch(roundArray[1]){
                    case 'X':answer1+=1+6
                        break;
                    case 'Y':answer1+=2
                        break;
                    case 'Z':answer1+=3+3
                        break;
                }     
                break;
        }
    })

    /* PART 2 */
    let answer2 = 0;
    rounds.forEach(round => {
        roundArray = round.split(' ');
        switch(roundArray[0]){
            case 'A':
                switch(roundArray[1]){
                    case 'X':answer2+=3
                        break;
                    case 'Y':answer2+=1+3
                        break;
                    case 'Z':answer2+=2+6
                        break;
                }
                break;
    
            case 'B':
                switch(roundArray[1]){
                    case 'X':answer2+=1
                        break;
                    case 'Y':answer2+=2+3
                        break;
                    case 'Z':answer2+=3+6
                        break;
                }     
                break;
            case 'C':
                switch(roundArray[1]){
                    case 'X':answer2+=2
                        break;
                    case 'Y':answer2+=3+3
                        break;
                    case 'Z':answer2+=1+6
                        break;
                }     
                break;
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


