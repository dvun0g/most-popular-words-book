import type {TTextContent, TWordArray} from "../types";

const getWordsInTextContent = function (textContent: TTextContent) {
    const words: TWordArray = [];

    textContent.forEach((text) => {
        const wordsCurrentPage = text.split(' ');
        words.push(...wordsCurrentPage);
    })

    return words;
}

export {getWordsInTextContent}