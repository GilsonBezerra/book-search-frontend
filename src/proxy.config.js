const proxy = [{
    context: '/api',
    target: 'http://localhost:8080/books',
    pathRewrite: { '^/api': '' }

}];
module.exports = proxy;