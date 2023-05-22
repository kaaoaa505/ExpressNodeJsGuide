import path from 'path';
const mainModule: string = require.main?.filename.toString() ?? '';

const PathHelper = {
    rootDir: path.dirname(mainModule)
};

export default PathHelper;