// add common functions here 



const botversion = require('./luis.config').botVersion;
const notKnownError = require('./luis.config').notKnownError;
var oneLinerJoke = require('one-liner-joke');


//function to send entertaining images
function Entertain(){

}

//function to send the bot information
function getBotInfo(){

    return botversion;
}

//function to get the email from ldap based on the name
function getEmail(fullName){

    var emailID= 'john.doe@xyz.com';
    return emailID;

}

//function to get the Name of the current user
function GetName(){

}


//function to get the template all or template name
function getTemplates(templateName){

    if(templateName=='all'){
        //send all templates
    }
    else{
        //send the particular template
    }

}

//function to send all the details from the ldap or JIVE
function knowSomeone(fullName){

}

//function to send the motivation sentence
function motivate(){

}

//function to get None was found
function None(){

    return notKnownError;
}

//function to get the current project the user is working on
function project(fullName){

}

//function to get the list of project from the user
function ProjectList(fullName){

}

//function to get the roles
function Roles(fullName){

}

//function to send the joke
function sendAJoke(){

    return oneLinerJoke.getRandomJoke().body;

}

//function to get the email and send the email or open outlook
function sendEmail(fullName){

    var emailID= 'joh.doe@xyz.com';
    return emailID;

}


module.exports = {
    'None':None,
    'project':project,
    'ProjectList':ProjectList,
    'Roles':Roles,
    'sendAJoke':sendAJoke,
    'sendEmail':sendEmail,
    'motivate':motivate,
    'knowSomeone':knowSomeone,
    'getTemplates':getTemplates,
    'GetName':GetName,
    'getEmail':getEmail,
    'getBotInfo':getBotInfo,
    'Entertain':Entertain
};