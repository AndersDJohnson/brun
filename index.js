#!/usr/bin/env node

var yargs = require('yargs')
var expand = require('brace-expansion')
var spawn = require('child_process').spawn
var eachSeries = require('async/eachSeries')

var commands = expand(yargs.argv._[0])

eachSeries(commands, (command, callback) => {
    var s = spawn('sh', ['-c', command], {})

    s.stdout.on('data', d => console.log(d.toString()))
    s.stderr.on('data', d => console.error(d.toString()))

    s.on('close', callback)
})
