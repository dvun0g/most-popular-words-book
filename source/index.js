import fs from 'fs'
import pdf from 'pdfjs-dist'

const PATH_TO_FILE = './examples/book.pdf';

const getTextContent = async function (file) {
    const document = await pdf.getDocument(file).promise;
    const documentPages = document.numPages;

    const textContent = [];

    for (let i = 1; i <= documentPages; i++) {
        const page = await document.getPage(i);
        const pageContent = (await page.getTextContent()).items;
        const textContentPage = pageContent.map((item) => item.str);
        textContent.push(...textContentPage);
    }

    return textContent;
}

const getWordsInTextContent = function (textContent) {
    const words = [];

    for (let i = 0, n = textContent.length; i < n; i++) {
        const wordsCurrentPage = textContent[i].split(' ');
        words.push(...wordsCurrentPage);
    }

    return words;
}

const getFilteredWords = function (words) {
    const isEmptyWord = function (word) {
        return word.length === 0;
    }

    const isNotChapter = function (word) {
        const chapterOnlyRegExp = /[^a-zA-Z]/ig;
        return chapterOnlyRegExp.test(word);
    }

    return words
        .filter((word) => {
            if (isEmptyWord(word) || isNotChapter(word)) {
                return false;
            }

            return true;
        })
        .map((word) => word.toLowerCase())
}

const getMostPopularWords = function (words) {
    const wordsCount = Object.create((null));

    words.forEach((word) => {
        if (!Object.hasOwn(wordsCount, word)) {
            wordsCount[word] = 0;
        }

        wordsCount[word] += 1;
    })

    return Object.entries(wordsCount)
        .sort((word1, word2) => {
            return word2[1] - word1[1];
        })
        .map(([word]) => word);
}

const execute = async function (pathToFile) {
    const textContent = await getTextContent(pathToFile);
    const words = getWordsInTextContent(textContent);
    const filteredWords = getFilteredWords(words);
    const mostPopularWords = getMostPopularWords(filteredWords);

    console.log(mostPopularWords);
    // return mostPopularWords;
}

execute(PATH_TO_FILE);