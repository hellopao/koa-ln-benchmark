all: clean test testCluster

test: koa-ln koa-bunyan-logger koa-log4 
	
testCluster: koa-ln-cluster koa-bunyan-logger-cluster koa-log4-cluster

version:
	@node -v
	@npm -v
	@echo	
	
koa-ln:
	@echo	'benchmark koa-ln'
	@sh bin/run app.ln.js
	@echo	
	
koa-bunyan-logger:
	@echo	'benchmark koa-bunyan-logger'
	@sh bin/run app.bunyan.js
	@echo	

koa-log4:
	@echo	'benchmark koa-log4'
	@sh bin/run app.log4.js
	@echo	
	
koa-ln-cluster:
	@echo	'benchmark koa-ln-cluster'
	@sh bin/runCluster master.js app.ln.js
	@echo	
	
koa-bunyan-logger-cluster:
	@echo	'benchmark koa-bunyan-logger-cluster'
	@sh bin/runCluster master.js app.bunyan.js
	@echo	

koa-log4-cluster:
	@echo	'benchmark koa-log4-cluster'
	@sh bin/runCluster master.js app.log4.js
	@echo	
		
clean:
	@rm -rf logs/*.log
	
.PHONY: test 