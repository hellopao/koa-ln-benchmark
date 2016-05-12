"use strict";

const cluster = require('cluster');
const cpus = require('os').cpus();

cluster.setupMaster({
    exec: process.argv[2]
});

Array.from(cpus).forEach(cpu => {
    cluster.fork();
});