## koa2 logger middlewares benchmark 

## run
 
```bash
make all
```

## result

-  koa-ln:

    Requests per second:    1789.73 [#/sec] (mean)

-  koa-bunyan-logger:

    Requests per second:    1456.42 [#/sec] (mean)

-  koa-log4:

    Requests per second:    1597.96 [#/sec] (mean)

-  koa-ln-cluster:

    Requests per second:    3368.09 [#/sec] (mean)

-  koa-bunyan-logger-cluster:

    Requests per second:    3004.61 [#/sec] (mean)

-  koa-log4-cluster:

    Requests per second:    3068.81 [#/sec] (mean)