const Koa = require('koa')
const views = require('koa-views')
const app = new Koa()

app.use(views(__dirname + '/views'), {
  extension: 'html'
})

app.use(async (ctx) => {
  await ctx.render('index')
})

console.log('staring')

app.listen(80)


