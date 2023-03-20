export function down(word) {
    return word.toLowerCase();
} 

export function translate(word) {
    let pigLatin = down(word);
    if (pigLatin.match(/^[aeiou]/)) return pigLatin + "way";

    const firstLetters = pigLatin.match(/^[^aeiou]+/)[0]; 
    return pigLatin.substring(firstLetters.length) + firstLetters + "ay";
}
