export function getInput(rawInput, separator){
    rawInput.replaceAll("\r\n", "\n").replaceAll("\r", "\n");
    return rawInput.split(separator);
}

