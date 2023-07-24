import {isExistPath} from "../../utils/isExistPath";
import {isAvailableExtension} from "./utils/isAvailableExtension";
import {parsePDF} from "./parsePDF";
import type {TWordArray} from "./types";

const FUNCTIONS_FILE_EXTENSION = {
    "pdf": parsePDF,
}

type TExtension = keyof typeof FUNCTIONS_FILE_EXTENSION;
type TParseFile = (path: string) => Promise<TWordArray>
const parseFile: TParseFile = async function (path) {
    if (!isExistPath(path)) {
        throw new Error(`File in path is not exist: ${path}`);
    }

    const extension = path.split('.').at(-1);

    if (!isAvailableExtension(extension) || !extension) {
        throw new Error(`File extension is not available: ${extension}`);
    }

    return await FUNCTIONS_FILE_EXTENSION[extension as TExtension](path);
}

export {parseFile}