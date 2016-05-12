"use strict";

const Koa = require('koa');
const logger = require('koa-bunyan-logger');

const app = new Koa();

app.use(logger({
    streams: [{
        type: 'rotating-file',
        path: './logs/access.bunyan.log',
        period: '1d',  
    }]
}));

app.use(logger.requestLogger());

app.use(ctx => {
    ctx.body = "hello world";
});

app.listen(3333);