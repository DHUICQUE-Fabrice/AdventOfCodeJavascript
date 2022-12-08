let day = function day(){

    /* GLOBAL */
    dayNumber = __dirname.substring(__dirname.lastIndexOf('Day')+3);
    console.log("Day " + dayNumber + " answers:");
    const test = false;
    const test1 = 21;
    const test2 = 8;

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
    const treeMap = [];
    element.forEach(row => {
        treeMap.push(row.split(""));
    })
    for(let i =0; i < treeMap.length; i++){
        for(let j=0; j < treeMap[i].length; j++){
            treeMap[i][j] = parseInt(treeMap[i][j]);
        }
    }

    /* PART 1 */
    let answer1 = 0;
    for(let i =0; i < treeMap.length; i++){
        for(let j=0; j < treeMap[i].length; j++){
            let hidden1 = false;
            let hidden2 = false;
            let hidden3 = false;
            let hidden4 = false;
            
            let currentTree = treeMap[i][j];
            if(!(i == 0 || j == 0 || i == treeMap.length || j == treeMap[i].length)){
                for(let k = 0; k < i; k++){
                    if(treeMap[k][j] >= currentTree){
                        hidden1= true;
                    }
                }
                for(let k = i+1; k < treeMap.length; k++){
                    if(treeMap[k][j] >= currentTree){
                        hidden2 = true;
                    }
                }
                for(let k = 0; k < j; k++){
                    if(treeMap[i][k] >= currentTree){
                        hidden3 = true;
                    }
                }
                for(let k = j+1; k < treeMap[i].length; k++){
                    if(treeMap[i][k] >= currentTree){
                        hidden4 = true;
                    }
                }
            }
            answer1 += (hidden1 && hidden2 && hidden3 && hidden4) ? 0 : 1;
        }
    }

    /* PART 2 */
    let answer2 = 0;
    let scoreMap = [];
    for(let i =0; i < treeMap.length; i++){
        scoreMap[i] = [];
        for(let j=0; j < treeMap[i].length; j++){
            scoreMap[i][j]=0;
            let hidden1 = false;
            let hidden2 = false;
            let hidden3 = false;
            let hidden4 = false;
            let views1 = 0;
            let views2 = 0;
            let views3 = 0;
            let views4 = 0;
            let currentTree = treeMap[i][j];
            if(!(i == 0 || j == 0 || i == treeMap.length-1 || j == treeMap[i].length-1)){
                for(let k = i-1; k >= 0; k--){
                    if(!hidden1){
                        views1++;
                    }
                    if(treeMap[k][j] >= currentTree){
                        hidden1= true;
                    }
                }
                for(let k = i+1; k < treeMap.length; k++){
                    if(!hidden2){
                        views2++;
                    }
                    if(treeMap[k][j] >= currentTree){
                        hidden2 = true;
                    }
                }
                for(let k = j-1; k >= 0; k--){
                    if(!hidden3){
                        views3++;
                    }
                    if(treeMap[i][k] >= currentTree){
                        hidden3 = true;
                    }
                }
                for(let k = j+1; k < treeMap[i].length; k++){
                    if(!hidden4){
                        views4++;
                    }
                    if(treeMap[i][k] >= currentTree){
                        hidden4 = true;
                    }
                }
                scoreMap[i][j] = views1*views2*views3*views4;

            }else{
                scoreMap[i][j] = 0;
            }

        }
    }
    scoreMap.forEach(row =>{
        row.forEach(tree => {
            answer2 = tree > answer2 ? tree : answer2;
        })
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
