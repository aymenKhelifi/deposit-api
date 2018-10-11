var express    = require('express');
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
//var addAccount = require('../modules/addAccount');
var Webhook={};

Webhook.recieveOrder = function(router){
    router.route('/depositOrder').post(function(req, res) {
        console.log("debug message :" +req.body.id);
        
            res.json({ message: 'rq.body.id' + +req.body.id});
        });
  };
module.exports = Webhook;