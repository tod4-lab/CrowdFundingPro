module.exports = {
    pages: {
        index: {
            entry: 'src/main.js'
        }
    },
    devServer: {
        proxy: {
            // 路径中出现'/api'时，代理服务器就开始工作
            '/api': {
                // 目标服务器
                target: "http://localhost",
                // 路径重写
                pathRewrite: {'^/api':''}
            },
            '/uploadImg': {
                // 目标服务器
                target: "http://localhost/crowd-project",
                // 路径重写
                pathRewrite: {'^/uploadImg':''},
            }
        },
    }
}
