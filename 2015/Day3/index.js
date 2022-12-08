class House{


    constructor(x, y){
        this.x = x;
        this.y = y;
    }
}


let day = function day(){

    /* GLOBAL */
    dayNumber = __dirname.substring(__dirname.lastIndexOf('Day')+3);
    console.log("Day " + dayNumber + " answers:");
    const test = true;
    const test1 = 2;
    const test2 = 11;

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
    input.replaceAll("\r\n", "\n").replaceAll("\r", "\n")
    const element = input.split("");
    

    /* PART 1 */
    let answer1 = 1;
    let posX = 0;
    let posY = 0;
    let houses = [];
    let origin = new House(posX, posY);
    houses.push(origin);
    
    element.forEach(move => {
        switch(move){
            case '^':posY++;break;
            case 'v':posY--;break;
            case '<':posX--;break;
            case '>':posX++;break;
        }
        let house = new House(posX, posY);
        let contains = false;
        houses.forEach(h => {
            if(h.x === posX && h.y === posY){
                contains = true;
            }
        });

        if(!contains){
            houses.push(house);
            answer1++;
        }
    })


    /* PART 2 */
    let answer2 = undefined;

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



