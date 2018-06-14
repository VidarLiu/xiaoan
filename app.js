const Koa = require('koa')
const views = require('koa-views')
const app = new Koa()
const log4js = require('log4js')
const logger = log4js.getLogger()
logger.level = 'debug'

app.use(views(__dirname + '/views'), {
  extension: 'html'
})

app.use(async (ctx) => {
  await ctx.render('index')
})

logger.info('staring', new Date())

app.listen(8000)


