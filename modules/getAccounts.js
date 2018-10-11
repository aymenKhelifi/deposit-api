var express    = require('express');
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
var Account       = require('../models/account');
var getAccounts={};
getAccounts.getaccounts = function(router){
  router.route('/list_accounts').get(function(req, res) {
  Account.find(function(err, accounts) {
      if (err)
          res.send(err);
      res.json(accounts);
  });
});
};
module.exports = getAccounts;