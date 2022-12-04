let day = function day(){

    /* GLOBAL */
    dayNumber = __dirname.substring(__dirname.lastIndexOf('Day')+3);
    console.log("Day " + dayNumber + " answers:");
    const test = false;
    const test1 = 101;
    const test2 = 48;

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
    
    /* PART 1 */
    let answer1 = 0;
    element.forEach(pack => {
        sides = pack.split('x');
        [l, w, h] = [sides[0], sides[1], sides[2]];
        answer1 += 2*l*w + 2*w*h + 2*h*l + Math.min(l*w,w*h ,h*l);
    })

    /* PART 2 */
    let answer2 = 0;
    element.forEach(pack => {
        sides = pack.split('x');
        [l, w, h] = [parseInt(sides[0]), parseInt(sides[1]), parseInt(sides[2])];
        answer2 += l*w*h;
        let excluded = l === Math.max(l,w,h);
        answer2 += excluded ? 0 : l+l;
        if(excluded){
            answer2 += w+w + h+h;
        }else{
            excluded = w === Math.max(l,w,h);
            answer2 += excluded ? h+h : w+w;
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
