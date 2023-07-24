import {parseFile} from "../modules/parseFile/parseFile";
import path from 'path';

const ROOT_FOLDER = '.';
const PATH_TO_FILE = path.resolve(ROOT_FOLDER, 'examples/book.pdf');

const execute = async function (path: string) {
    console.log(await parseFile(path));
    return
}

execute(PATH_TO_FILE);
