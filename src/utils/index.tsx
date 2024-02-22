export function firstLetterUpper(str: string | undefined): string {
    return !str 
        ? ''
        : str.charAt(0).toUpperCase() + str.slice(1);
}