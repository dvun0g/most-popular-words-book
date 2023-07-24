import fs from 'fs-extra';

const isExistPath = function (path: string) {
    try {
        fs.accessSync(path, fs.constants.F_OK);
        return true;
    } catch {
        return false;
    }
}

const isExistsPaths = function (paths: string[]) {
    for (const path of paths) {
        if (!isExistPath(path)) {
            return false;
        }
    }

    return true;
}

export {
    isExistPath,
    isExistsPaths
}