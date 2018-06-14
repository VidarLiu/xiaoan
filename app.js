const Koa = require('koa')
const views = require('koa-views')
const app = new Koa()

app.use(views(__dirname + '/views'))

app.use(ctx => {
  ctx.body = 'Hi, xiaoan'
})

console.log('staring')

app.listen(80)


