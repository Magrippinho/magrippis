var angular = require('angular');

angular
    .module('magrippis.controllers', ['magrippis.factories'])
    .controller('CoreController', require('./components/core/coreController.js'))
    .controller('HomeController', require('./components/home/homeController.js'))
    .controller('ContactController', require('./components/contact/contactController.js'));