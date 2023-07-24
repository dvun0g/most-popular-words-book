import type {TTextContent, TWordArray} from "./types";
import *  as pdf from 'pdfjs-dist'

import {getWordsInTextContent} from "./helpers/getWordsInTextContent";
import {getFilteredWords} from "./helpers/getFilteredWords";
import {getMostPopularWords} from "./helpers/getMostPopularWords";

type TGetTextContent = (path: string) => Promise<TTextContent>;
const getTextContent: TGetTextContent = async function (path) {
    const document = await pdf.getDocument(path).promise;
    const documentPages = document.numPages;

    const textContent: TTextContent = [];

    for (let i = 1; i <= documentPages; i++) {
        const page = await document.getPage(i);
        const pageContent = (await page.getTextContent()).items;
        const textContentPage: TTextContent = pageContent.map((item) => {
            if (Object.hasOwn(item, "str")) {
                // @ts-expect-error TS2339
                return item.str;
            }

            return '';
        });
        textContent.push(...textContentPage);
    }

    return textContent;
}

type TParsePDF = (path: string) => Promise<TWordArray>;
const parsePDF: TParsePDF = async function (path) {
    const textContent = await getTextContent(path);
    const words = getWordsInTextContent(textContent);
    const filteredWords = getFilteredWords(words);
    const mostPopularWords = getMostPopularWords(filteredWords);

    return mostPopularWords;
}

export {parsePDF}