const AVAILABLE_EXTENSIONS = ['pdf'];

const isAvailableExtension = function (extension: string | undefined) {
    if (!extension) {
        return false;
    }

    return AVAILABLE_EXTENSIONS.includes(extension);
}

export {isAvailableExtension}