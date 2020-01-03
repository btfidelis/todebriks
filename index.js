require("@babel/register");
const Koa = require('koa');
const router = require('@koa/router')()
const app = new Koa();

router.get('/', async (ctx) => {
  ctx.body = 'Olar'
})

app.use(router.routes())

module.exports = app