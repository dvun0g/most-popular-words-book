import type {TWordArray} from "../types";

type TGetFilteredWords = (word: TWordArray) => TWordArray;
const getFilteredWords: TGetFilteredWords = function (words) {
    return words.filter((word) => {
        if (isEmptyLine(word) || isWordContainNotOnlyChapter(word)) {
            return false;
        }

        return true;
    })
}

type TIsEmptyLine = (line: string) => boolean
const isEmptyLine: TIsEmptyLine = function (line) {
    return line.trim().length === 0;
}

type TIsWordContainNotOnlyChapter = (word: string) => boolean
const isWordContainNotOnlyChapter: TIsWordContainNotOnlyChapter = function (word) {
    const chapterOnlyRegExp = /[^a-zA-Z]/ig;
    return chapterOnlyRegExp.test(word);
}

export {getFilteredWords};