export function firstLetterUpper(str?: string): string {
    return !str 
        ? ''
        : str.charAt(0).toUpperCase() + str.slice(1);
}

export function uniqInd(){
    return Math.random().toString(16).slice(2);
}
