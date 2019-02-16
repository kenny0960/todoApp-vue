var path = require('path');

const paths = {
    JS: path.resolve(__dirname, 'src/js'),
    DIST: path.resolve(__dirname, 'public/js'),
};

module.exports = {
    mode: 'production',
    entry: path.join(paths.JS, 'todoApp-vue.js'),
    output: {
        path: paths.DIST,
        filename: 'todoApp-vue.bundle.js'
    },
    resolve: {
        alias: {
            vue$: "vue/dist/vue.esm.js"
        }
    }
};