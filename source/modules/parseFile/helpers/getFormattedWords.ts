import type {TWordArray} from "../types";

type TGetFormattedWords = (words: TWordArray) => TWordArray;
// TODO: fix lowercase
const getFormattedWords: TGetFormattedWords = function (words) {
    return words.map((word) => {
        return word.toLowerCase();
    })
}


export {getFormattedWords}