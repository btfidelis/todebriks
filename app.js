require("@babel/register");
const Koa = require('koa')
const router = require('@koa/router')()
const views = require('koa-views')
const path = require('path')
const app = new Koa()

app.use(views(path.join(__dirname, 'views'), {
  map: { html: 'swig' }
}))

router.get('/', async (ctx) => {
  ctx.body = 'Index'
})

app.use(router.routes())

module.exports = app