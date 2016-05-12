"use strict";

const Koa = require('koa');
const logger = require('koa-log4');

logger.configure({
  "appenders": [
    {
      "type": "clustered",
      "appenders": [
        {
          "type": "dateFile",
          "filename": "./logs/access.log4.log",
          "pattern": "-yyyy-MM-dd",
          "category": "http"
        }
      ]
    }
  ]
});

const app = new Koa();

app.use(logger.koaLogger(logger.getLogger("http"), { level: 'auto' }));

app.use(ctx => {
    ctx.body = "hello world";
});

app.listen(3333);