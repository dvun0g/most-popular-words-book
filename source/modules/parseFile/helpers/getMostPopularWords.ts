import type {TWordArray} from "../types";

type TGetMostPopularWords = (words: TWordArray) => TWordArray;
const getMostPopularWords: TGetMostPopularWords = function (words) {
    const wordsCountCollection: Record<string, number> = Object.create(null);

    words.forEach((word) => {
        if (!Object.hasOwn(wordsCountCollection, word)) {
            wordsCountCollection[word] = 0;
        }

        wordsCountCollection[word] += 1;
    })

    const wordsCountSortedEntries = Object.entries(wordsCountCollection)
        .sort((word1, word2) => word2[1] - word1[1])

    const mostPopularWords = wordsCountSortedEntries.map(([word]) => word);

    return mostPopularWords;
}

export {getMostPopularWords}