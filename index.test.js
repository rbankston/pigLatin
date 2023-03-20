import {expect, jest, test} from '@jest/globals';
import {down, translate} from './index';


describe('pig_latin', () => {

    test('output to lowercase', () => {
       expect(down("Agreed")).toEqual("agreed");
    })

    test('If a word starts with a vowel, just add “way” onto the ending.', () => {
        expect(translate("Agreed")).toEqual("agreedway");
    })

    test('consonant, move all of the consonants that appear before the first vowel to the end of the word, then add “ay”', () => {
        expect(translate("Before")).toEqual("eforebay");
    })

})