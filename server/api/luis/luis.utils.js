// add common functions here 



const botversion = require('./luis.config').botVersion;
const notKnownError = require('./luis.config').notKnownError;
var oneLinerJoke = require('one-liner-joke');
var luismodel = require('./luis.model');
var bingImage = require('bing-image');
var motivation = require('motivation');
var request = require('sync-request');
var fs = require('fs');
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
    obj.title = "Jeenee version info"
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
function project(fullName) {
    // return ProjectList(fullName);
    var projects = [];
    luismodel.projectslib.gridData.forEach(function (e) {
         //console.log("%s   :: %s" ,e.leadName,e.leadName.indexOf(fullName));
        if (e.leadName && e.leadName != "" && (e.leadName.indexOf(fullName))) {
            var p = {};//luismodel.project;
            p.name = e.leadName;
            p.id = e.leadId;
            p.owner = e.owner;
            p.status = e.status;
            p.comments = e.comments;
            p.casecode = e.caseCode;
            p.deliverymanager = e.deliveryManager;
            p.refLink = "http://http://google.com";
            projects.push(p);
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
    luismodel.projectslib.gridData.forEach(function (e) {
      //  console.log(e.leadName);
        //if ((e.deliveryManager && e.deliveryManager.toLowerCase().indexOf(fullName) > 0)) 
        {
            var p = {};//luismodel.project;
            p.name = e.leadName;
            p.id = e.leadId;
            p.owner = e.owner;
            p.status = e.status;
            p.comments = e.comments;
            p.casecode = e.caseCode;
            p.deliverymanager = e.deliveryManager;
            p.refLink = "http://google/com";
            projects.push(p);
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
    return luismodel.imagelib[Math.floor(Math.random() * luismodel.imagelib.length)];

}
function getVignettes(vignettes) {
    var vg = [];
    luismodel.vignetteslib.forEach(function (e) {
        if (e.url.toLowerCase().indexOf(vignettes) > 0) {
            var v = {};
            v.url = e.url;
            v.name = e.name;
            vg.push(v);
        }
    });

    var resp = luismodel.baseSchema;
    resp.intentType = "vignettes";
    resp.imageURL = getRandomImageUrl();
    resp.searchResult = vg;
    return resp;
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
    'Entertain': Entertain,
    'getVignettes': getVignettes
};