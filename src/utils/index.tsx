export function firstLetterUpper(str?: string): string {
    return !str 
        ? ''
        : str.charAt(0).toUpperCase() + str.slice(1);
}