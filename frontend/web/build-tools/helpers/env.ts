import url from 'node:url'

const dirname = url.fileURLToPath(new URL('.', import.meta.url));
const filename = url.fileURLToPath(new URL(import.meta.url));

type TConfigEnv = Readonly<{
    dirname: string;
    filename: string;
}>;
const configEnv: TConfigEnv = Object.freeze({
    dirname,
    filename
})

export {
    TConfigEnv,
    configEnv,
}