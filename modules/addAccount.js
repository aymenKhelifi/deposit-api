var express    = require('express');
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
var Account       = require('../models/account');
var addAccount = require('../modules/addAccount');
var addAccount={};

addAccount.saveAccount = function(router){
    router.route('/addAccount').post(function(req, res) {
        var account = new Account();
        account.account_id=req.body.account_id;
        account.balance= req.body.balance;
        account.save(function(err) {
            if (err)
                res.send(err);
            res.json({ message: 'the new account was succefully added to the database' });
        });
        });
  };
module.exports = addAccount;