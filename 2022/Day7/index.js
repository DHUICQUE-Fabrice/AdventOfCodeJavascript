const { dirname } = require('path');

let day = function day(){

    /* GLOBAL */
    dayNumber = __dirname.substring(__dirname.lastIndexOf('Day')+3);
    console.log("Day " + dayNumber + " answers:");
    const test = true;
    // tried :
    // 1206553
    // 1038783
    // 725574
    // 1035771
    const test1 = 95437;
    const test2 = 0;

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
    
    input = input.replaceAll("\r\n", "\n").replaceAll("\r", "\n")
    let commandLines = input.split("\n");
    let currentDepth = 0;
    let dirs = new Object();
    commandLines.forEach(commandLine => {
        if(commandLine.startsWith("$ cd ") && !commandLine.startsWith("$ cd ..")){
            currentDepth++;
        }
        if(commandLine.startsWith("$ cd ..")){
            currentDepth--;
        }
        
        console.log(currentDepth, commandLine);
    })
    /*commandLines.forEach(commandLine => {
            let index = -1;
        let dirname ="";
        if(commandLine.startsWith("$ cd ") && !commandLine.startsWith("$ cd ..")){
            currentDepth++;
            dirname = commandLine.split(" ")[2];
            dirs[dirname] = [];
            dirs['depth'] = currentDepth;
            index = commandLines.indexOf("$ cd " + dirname);
        }
        if(index !== -1){
            for(let i = index+1; i < commandLines.length; i++){
                if(commandLines[i].startsWith("$ cd ..")){
                    currentDepth--;
                    if(currentDepth === dirs['depth']){
                        break;
                    }                    
                }

                if(parseInt(commandLines[i].split(' ')[0])){
                   dirs[dirname].push(commandLines[i]) 
                }
                if(commandLines[i].startsWith("dir ")){
                    dirs[dirname].push(commandLines[i].split(" ")[1])
                }                
            }
        }
    })*/

   // console.log(dirs);



    /* PART 1 */
    let answer1 = 0;
    /*let sizeMap = new Object();
    Object.keys(dirs).forEach(dir => {
        sizeMap[dir] = { "size": 0, "folders": []}
        let size = 0;
        dirs[dir].forEach(file => {
            if(parseInt(file.split(" ")[0])){
                size += parseInt(file.split(" ")[0]);
            }else{
                sizeMap[dir]["folders"].push(file)
            }            
        })
        sizeMap[dir]["size"] = size;
    })
    console.log(sizeMap)
    Object.keys(sizeMap).forEach(folder => {
        if(sizeMap[folder]["folders"].length > 0){
            sizeMap[folder]["folders"].forEach(underFolder => {
                if(sizeMap[underFolder]["folders"].length === 0){
                    sizeMap[folder]["size"] += sizeMap[underFolder]["size"];
                }                
                sizeMap[underFolder]["folders"] = [];
            })
            
        }
    })
    console.log(sizeMap)
    Object.keys(sizeMap).forEach(folder => {
        answer1 += sizeMap[folder]["size"] < 100000 ? sizeMap[folder]["size"] : 0;
    })*/
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
