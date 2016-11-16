// add common functions here 



const botversion = require('./luis.config').botVersion;
const notKnownError = require('./luis.config').notKnownError;
var oneLinerJoke = require('one-liner-joke');
var luismodel = require('./luis.model');
var bingImage = require('bing-image');
var motivation = require('motivation');
var http = require('http');

//function to send entertaining images
function Entertain() {

}

//function to send the bot information
function getBotInfo() {

    var resp = luismodel.baseSchema;
    resp.intentType = "info";
    resp.imageURL = getRandomImageUrl();
    var obj = luismodel.info;
    obj.title = "Bot version info"
    obj.subtitle = "";
    obj.subtitle = "It was born in a cool Hackathon";
    obj.imageURL = getRandomImageUrl();
    resp.searchResult = getRandomImageUrl();
    return resp;

}

//function to get the email from ldap based on the name
function getEmail(fullName) {

    var emailID = 'john.doe@xyz.com';
    return emailID;

}

//function to get the Name of the current user
function GetName() {

}


//function to get the template all or template name
function getTemplates(templateName) {

    if (templateName == 'all') {
        //send all templates
    }
    else {
        //send the particular template
    }

}

//function to send all the details from the ldap or JIVE
function knowSomeone(fullName) {

}

//function to send the motivation sentence
function motivate() {
    var resp = luismodel.baseSchema;
    resp.intentType = "motivate";
    resp.imageURL = getRandomImageUrl();
    var motivationobject = luismodel.motivation;
    motivationobject = motivation.get();
    motivationobject.imageURL = getRandomImageUrl();
    resp.searchResult = motivationobject;
    return resp;
}

//function to get None was found
function None() {

    return notKnownError;
}

//function to get the current project the user is working on
function project(fullName) {
   
}

//function to get the list of project from the user
function ProjectList(fullName) {
 var paylod = { "SourceId": 0, "StatusId": "0", "Owner": "", "User": "1", "paging": { "pageNo": 1, "pageSize": 100 }, "filtering": [{ "columnName": "deliveryManager", "value": fullName }] }
    var url = "http://applabsapp.bcg.com/pmotools/api/Dashboard/GetFilteredLeadsData";

    var options = {
        host: 'http://applabsapp.bcg.com',
        path: '/pmotools/api/Dashboard/GetFilteredLeadsData',
        //This is the only line that is new. `headers` is an object with the headers to request
        headers: { 'Content-Type': 'application/json;charset=UTF-8' },
        method: 'POST'
    };

    callback = function (response) {
        var str = ''
        response.on('data', function (chunk) {
            str += chunk;
        });

        response.on('end', function () {
            console.log(str);
        });
    }

    var req = http.request(options, callback);
    req.end();

}

//function to get the roles
function Roles(fullName) {

}

//function to send the joke
function sendAJoke() {
    var resp = luismodel.baseSchema;
    resp.intentType = "joke";
    resp.imageURL = getRandomImageUrl();
    var joke = luismodel.joke;
    joke.text = oneLinerJoke.getRandomJoke().body;
    resp.searchResult = joke;
    return resp;
}

//function to get the email and send the email or open outlook
function sendEmail(fullName) {

    var emailID = 'joh.doe@xyz.com';
    return emailID;

}

function getRandomImageUrl() {
    return luismodel.imagelib[0];
}
module.exports = {
    'None': None,
    'project': project,
    'ProjectList': ProjectList,
    'Roles': Roles,
    'sendAJoke': sendAJoke,
    'sendEmail': sendEmail,
    'motivate': motivate,
    'knowSomeone': knowSomeone,
    'getTemplates': getTemplates,
    'GetName': GetName,
    'getEmail': getEmail,
    'getBotInfo': getBotInfo,
    'Entertain': Entertain
};