const path = require('path')

const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    watch: true,
    entry: './src/index.ts',
    output: {
        // 出力先ディレクトリ
        path: path.resolve(__dirname, '../dist'),
        // 出力ファイル名
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.vue?/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.ts$/,
                use: [{
                    loader: 'ts-loader',
                    options: {
                        appendTsSuffixTo: [/\.vue$/]
                    }
                }]
            },
            {
                test: /\.css$/,
                use: ['vue-style-loader', 'css-loader']
            },
        ]
    },
    resolve: {
        extensions: ['.js', '.vue', '.ts'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}