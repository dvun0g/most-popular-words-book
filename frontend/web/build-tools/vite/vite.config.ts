import {defineConfig} from 'vite'
import type {UserConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'

// TODO: Настроить сборку для dev / production версий. - https://vitejs.dev/config/#conditional-config
const config: UserConfig = {
    plugins: [react()],
    // TODO: Если возникнет ошибка с автодополнением импортов из других
    //  директорий проблема в данной строке. Нужно будет искать способ как
    //  это решить или же переносить index.html в source.
    root: 'source/app',
}

export default defineConfig(config);
