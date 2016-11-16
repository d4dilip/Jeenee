// add common functions here 



const botversion = require('./luis.config').botVersion;
const notKnownError = require('./luis.config').notKnownError;
var oneLinerJoke = require('one-liner-joke');
var luismodel = require('./luis.model');
var bingImage = require('bing-image');
var motivation = require('motivation');
var request = require('sync-request');
//var ntlm = require('request-ntlm');
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
    var resp = luismodel.baseSchema;
    resp.intentType = "templates";
    resp.imageURL = getRandomImageUrl();
    resp.searchResult = luismodel.templateslib;
    return resp;

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
function project(leadName) {
    var projects = [];
    luismodel.projectslib.gridData.forEach(function(e) {
        if (e.leadName.toLowerCase().indexOf(leadName) > 0) {
            var p = luismodel.project;
            p.name = e.leadName;
            p.id = e.leadId;
            p.refLink = "http://applabsapp.bcg.com/pmotools/"
            projects.push(e);
        }
    });

    var resp = luismodel.baseSchema;
    resp.intentType = "projectlist";
    resp.imageURL = getRandomImageUrl();
    resp.searchResult = projects;
    return resp;

}

//function to get the list of project from the user
function ProjectList(fullName) {
    var projects = [];
    luismodel.projectslib.gridData.forEach(function(e) {
        if (e.deliveryManager.toLowerCase().indexOf(fullName) > 0) {
            var p = luismodel.project;
            p.name = e.leadName;
            p.id = e.leadId;
            p.refLink = "http://applabsapp.bcg.com/pmotools/"
            projects.push(e);
        }
    });

    var resp = luismodel.baseSchema;
    resp.intentType = "projectlist";
    resp.imageURL = getRandomImageUrl();
    resp.searchResult = projects;
    return resp;
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