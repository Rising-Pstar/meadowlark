const express = require('express')
const { engine } = require('express-handlebars')

const { home, about, serverError, notFound } = require('./lib/handlers')

const app = express()

app.use(express.static(__dirname + '/public'))

// 设置视图hbs模板
app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './views')

// home
app.get('/', home)
// 关于页

app.get('/about', about)

// 404页
app.use(notFound)
// 500服务出错页
app.use(serverError)

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Server started at port ${port}, press Ctrl-C to terminate.`))