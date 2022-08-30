const playwright = require("playwright");
const websolend = require("./webs/websolend");
const webport = require("./webs/webport");
const webhedge = require("./webs/webhedge");
const webvires = require("./webs/webvires");
const websocean = require("./webs/websocean");
const webfriktion = require("./webs/webfriktion");
const webaave = require("./webs/webaave");
const webpolygon = require("./webs/webpolygon");
const weblido = require("./webs/weblido");


const startScrapping = async (response) =>{

  const browser = await playwright.chromium.launch();
  const page = await browser.newPage();
  const values= {};

  values.websolend = await websolend.getWeb(page);
  values.webport = await webport.getWeb(page);
  values.webhedge = await webhedge.getWeb(page);
  values.webvires = await webvires.getWeb(page);
  values.websocean = await websocean.getWeb(page);
  values.webfriktion = await webfriktion.getWeb(page);
  values.webaave = await webaave.getWeb(page);
  values.webpolygon = await webpolygon.getWeb(page);
  values.weblido = await weblido.getWeb(page);
  await browser.close();
  return values;
};

var http = require("http");

http.createServer(async function(request, response) {

  const values = await startScrapping(response);

  response.writeHead(200, {'Content-Type': 'text/plain'});

  response.end(JSON.stringify(values));

}).listen(8000);

//console.log('Servidor en la url http://127.0.0.1:8000/');
