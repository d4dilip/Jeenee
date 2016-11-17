jeenee.controller('appController', function ($scope, $http) {

    var self = this;





    self.author = '';
    self.imageURL = '';
    self.text = '';
    self.isMotivateCard = false;
    self.isJoke = false;
    self.isProjects = false;
    self.isTemplatesCard = false;
    self.isVinetes = false;
    self.getOutput = function () {

        // console.log(self.query.length);

        if (!self.query || self.query.length < 5) {
            console.log("reached");
            self.author = '';
            self.imageURL = '';
            self.thought = '';
            self.isMotivateCard = false;
            self.isJoke = false;
            self.isProjects = false;
            self.isTemplatesCard = false;
            self.isVinetes = false;
        }
        if (self.query && self.query.length > 5) {
            self.isMotivateCard = false;
            self.isJoke = false;
            self.isProjects = false;
            self.isTemplatesCard = false;
            self.isVinetes = false;
            setTimeout(function () {
                $http.get('http://localhost:9000/api/ask?q=' + encodeURIComponent(self.query)).then(function (data) {
                    if (data.data.searchResult && self.query.length > 5) {


                        if (data.data.intentType == 'joke') {
                            self.isJoke = true;
                            self.text = data.data.searchResult.text;
                        }

                        if (data.data.intentType == 'projectlist') {
                            self.isProjects = true;
                            self.projects = data.data.searchResult;
                            console.log(self.projects);
                        }


                        if (data.data.intentType == 'motivate') {
                            self.isMotivateCard = true;
                            self.author = data.data.searchResult.author;
                            self.imageURL = data.data.searchResult.imageURL;
                            self.thought = data.data.searchResult.text;
                            console.log(self.author);
                        }
                        if (data.data.intentType == 'templates') {
                            self.isTemplatesCard = true;
                            self.templates = data.data.searchResult;
                            console.log(self.templates);
                        }

                        if (data.data.intentType == 'vignettes') {
                            self.isVinetes = true;
                            self.vignetes = data.data.searchResult;
                        }





                    }

                })
            }, 500);
        }

    }

});