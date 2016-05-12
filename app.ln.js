"use strict";

const Koa = require('koa');
const logger = require('koa-ln');

const app = new Koa();

app.use(logger.access({type: "file", path: "./logs/",name: "access.ln"}));

app.use(ctx => {
    ctx.body = "hello world";
});

app.listen(3333);