let day = function day(){
    console.log("")
    console.log("")
    console.log("SOLUTIONS OF YEAR 2022")

    /* GLOBAL */
    dayNumber = __dirname.substring(__dirname.lastIndexOf('Day')+3);
    console.log("Day " + dayNumber + " answers:");
    
    const test = false;
    const test1 = 24000;
    const test2 = 45000;
    
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
    const elves = input.split("\n\n")
    let inputByElf = [];
    elves.forEach(element => {
        inputByElf.push(element.split("\n"));
    });
    /* PART 1 */

    let answer1 = 0;
    inputByElf.forEach(elf => {
        let carried = 0;
        elf.forEach(calory => {
            carried += parseInt(calory);
        })
        answer1 = Math.max(answer1, carried);
    })

    /* PART 2 */

    let answer2 = 0;
    let bestThree = [];
    inputByElf.forEach(elf => {
        let carried = 0;
        elf.forEach(calory => {
            carried += parseInt(calory);
        })
        bestThree.push(carried);
    })
    bestThree.sort(function(a, b){return b-a});
    answer2 = bestThree[0] + bestThree[1] + bestThree[2];



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
}()

module.exports.day1 = day;
