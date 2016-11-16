/**
 * Created by Agrawal Deepankar on 16/11/2016.
 */

jeenee.controller('appController', function ($scope, $http) {

    var self = this;
    self.author = '';
    self.imageURL = '';
    self.text = '';
    self.isMotivateCard = false;
    self.getOutput = function () {

        // console.log(self.query.length);

        if (!self.query || self.query.length < 5) {
            console.log("reached");
            self.author = '';
            self.imageURL = '';
            self.thought = '';
            self.isMotivateCard = false;
        }
        if (self.query && self.query.length > 5) {

            $http.get('http://localhost:9000/api/ask?q=' + encodeURIComponent(self.query)).then(function (data) {
                if (data.data.searchResult && self.query.length > 5) {
                    if (data.data.intentType == 'motivate') {
                        self.isMotivateCard = true;
                        self.author = data.data.searchResult.author;
                        self.imageURL = data.data.searchResult.imageURL;
                        self.thought = data.data.searchResult.text;
                        console.log(self.author);
                    }

                }

            })
        }

    }

});