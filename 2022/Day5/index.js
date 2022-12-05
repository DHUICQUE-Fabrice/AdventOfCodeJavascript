let day = function day(){

    /* GLOBAL */
    dayNumber = __dirname.substring(__dirname.lastIndexOf('Day')+3);
    console.log("Day " + dayNumber + " answers:");
    const test = false;
    const test1 = 'CMZ';
    const test2 = 'MCD';

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
    const element = input.split("\n\n");
    stacks = element[0].split("\n");
    instructions = element[1].split("\n");

    /* PART 1 */
    let answer1 = "";
    let cols = [];
    let colNumbers = stacks[stacks.length - 1]
    let indexes = [];
    
    for(let i = 0 ; i < colNumbers.length ; i++){
        if(parseInt(colNumbers[i])){
            cols[colNumbers[i]] = [];
            indexes.push(i);
        }
    }
    cols = cols.filter(item => item);
    stacks.pop();
    stacks.forEach(stack => {
        for(i = 0; i < indexes.length; i++){
            if(stack[indexes[i]] !== ' '){
                cols[i].push(stack[indexes[i]]);
            }
        }
    });
    cols.forEach(col => {
        col.reverse();
    })
    instructions.forEach(instruction => {
        let moveIndex = instruction.lastIndexOf("move");
        let fromIndex = instruction.lastIndexOf("from");
        let toIndex = instruction.lastIndexOf("to");
        let toMove = parseInt(instruction.substring(moveIndex + 5, fromIndex -1));
        let from = parseInt(instruction.substring(fromIndex + 5, toIndex -1))-1;
        let to = parseInt(instruction.substring(toIndex + 3))-1;
        for(i = 0; i < toMove; i++){
            let moving = cols[from].pop();
            cols[to].push(moving);
        }
    })

    cols.forEach(elem => {
        answer1 += elem.pop()
    })



    /* PART 2 */
    stacks = element[0].split("\n");
    instructions = element[1].split("\n");
    let answer2 = "";
    cols = [];
    colNumbers = stacks[stacks.length - 1]
    indexes = [];
    for(i = 0 ; i < colNumbers.length ; i++){
        if(parseInt(colNumbers[i])){
            cols[colNumbers[i]] = [];
            indexes.push(i);
        }
    }
    cols = cols.filter(item => item);
    stacks.pop();
    stacks.forEach(stack => {
        for(i = 0; i < indexes.length; i++){
            if(stack[indexes[i]] !== ' '){
                cols[i].push(stack[indexes[i]]);
            }
        }
    });
    cols.forEach(col => {
        col.reverse();
    })
    instructions.forEach(instruction => {
        let moveIndex = instruction.lastIndexOf("move");
        let fromIndex = instruction.lastIndexOf("from");
        let toIndex = instruction.lastIndexOf("to");
        let toMove = parseInt(instruction.substring(moveIndex + 5, fromIndex -1));
        let from = parseInt(instruction.substring(fromIndex + 5, toIndex -1))-1;
        let to = parseInt(instruction.substring(toIndex + 3))-1;
        let moved = [];
        for(i = toMove -1; i >= 0; i--){
            let moving = cols[from][cols[from].length - i - 1];
            moved.push(moving);
        }
        for(i = 0; i < toMove; i++){
            let moving = cols[from][cols[from].length - toMove];
            cols[to].push(moved[i]);
        }
        for(i = toMove -1; i >= 0; i--){
            cols[from].pop();
        }
    })

    cols.forEach(elem => {
        answer2 += elem.pop()
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
