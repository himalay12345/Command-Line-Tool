#!/usr/bin/env node

//Use this script in your command line
// search -s 'Your Crypto Nmae Yo Want To Search'


const yargs = require("yargs");
const axios = require("axios");

const options = yargs
 .usage("Usage: -s <search>")
 .option("s", { alias: "search", describe: "Search term For Crypto Name", type: "string" ,demandOption: true})
 .argv;



const url = 'https://api.bitfinex.com/v2/calc/fx';

const request = require('request')

const noptions = {
  url: `https://api.bitfinex.com/v2/calc/fx`,
  body: {
    ccy1: options.search,
    ccy2: 'USD'
  },
  json: true
}
request.post(noptions, (error, response, body) => {
  console.log(`Price of ${options.search} is ${body}`)
})