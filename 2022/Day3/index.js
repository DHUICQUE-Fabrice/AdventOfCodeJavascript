let day = function day(){

    /* GLOBAL */
    dayNumber = __dirname.substring(__dirname.lastIndexOf('Day')+3);
    console.log("Day " + dayNumber + " answers:");
    const test = false;
    const test1 = 157;
    const test2 = 70;

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
    const element = input.split("\n");
    sacks = []
    element.forEach(sack => {
        sacks.push([
            sack.slice(0, sack.length/2),
            sack.slice(sack.length/2, sack.length)
        ]);
    })

    /* PART 1 */
    let answer1 = 0;
    items = [];
    sacks.forEach(sack => {
        let filled = false;
        sack0 = sack[0].split('');
        sack1 = sack[1].split('');
        sack0.forEach(item1 => {
            if(!filled && sack[1].includes(item1)){
                items.push(item1);
                filled = true;
            }
        })
    })

    items.forEach(char => {
        answer1 += char.charCodeAt(0)-96 < 0 ? char.charCodeAt(0) -38 : char.charCodeAt(0)-96;
    })

    /* PART 2 */
    let answer2 = 0;
    let groupOfThree = [];
    for(let i=0; i<element.length; i+=3){
        let trio = [];
        trio.push(element[i]);
        trio.push(element[i+1]);
        trio.push(element[i+2]);
        groupOfThree.push(trio);
    }
    badges = [];
    groupOfThree.forEach(group => {
        first = group[0].split('');
        filled = false;
        first.forEach(char => {
            if(!filled && group[1].includes(char) && group[2].includes(char)){
                badges.push(char);
                filled = true;
            }
        });
    })
    badges.forEach(char => {
        answer2 += char.charCodeAt(0)-96 < 0 ? char.charCodeAt(0) -38 : char.charCodeAt(0)-96;
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
