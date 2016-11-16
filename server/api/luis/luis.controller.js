'use strict';
var luismodels = require('./luis.model');
const LUISClient = require("./luis_sdk");
const APPID = require("./luis.config").luisappID;
const APPKEY = require("./luis.config").luisappKey;
var intent = require('./luis.utils');

var LUISclient = LUISClient({
    appId: APPID,
    appKey: APPKEY,
    preview: true,
    verbose: true
});

var onSuccess = function (response) {

    console.log("Query: " + response.query);
    console.log("Top Intent: " + response.topScoringIntent.intent);

    //just replace with the res.status(200).json()
    console.log(intent[response.topScoringIntent.intent]());


    console.log("Entities:");
    for (var i = 1; i <= response.entities.length; i++) {
        console.log(i + "- " + response.entities[i - 1].entity);
    }

    if (response.entities.length == 0) {
        //console.log(intent[response.topScoringIntent.intent]());
        return intent[response.topScoringIntent.intent]();
    }
    else {
        //we are using only just expecting only just one entity in resposen
        //console.log(intent[response.topScoringIntent.intent](response.entities[0].entity));
        return intent[response.topScoringIntent.intent](response.entities[0].entity);
    }

    // if (typeof response.dialog !== "undefined" && response.dialog !== null) {
    //   console.log("Dialog Status: " + response.dialog.status);
    //   if(!response.dialog.isFinished()) {
    //     console.log("Dialog Parameter Name: " + response.dialog.parameterName);
    //     console.log("Dialog Prompt: " + response.dialog.prompt);
    //   }
    // }


};
// Get  search data
exports.index = function (req, res) {

    LUISclient.predict(req.query.q, {

        //On success of prediction
        onSuccess: function (response) {
            return res.status(200).json(onSuccess(response));
        },

        //On failure of prediction
        onFailure: function (err) {
            console.error(err);
            return res.json(200, err);
        }
    });


    
};
