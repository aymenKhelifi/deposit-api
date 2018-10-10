var express    = require('express');
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
var Account       = require('../models/account');
var Deposit={};
Deposit.deposit = function(router){
  router.route('/deposit/').post(function(req, res) {

        Account.findOne({ account_id:  req.body.depositary_account_id}, function(err, account) {
            if (err){
                return res.send(err);
            }else{
                account.account_id    = req.body.depositary_account_id;
                account.balance       = Math.max(0,account.balance-req.body.ammount) ;
            
                account.save(function(err) {
                    if (err)
                        console.log(err);
                        //return res.send(err); a BUG to be fixed the error must be send to the client
                    });
            }
        });

        Account.findOne({ account_id:  req.body.benefit_account_id}, function(err, account) {
            if (err){
                return res.send(err);
            }else{
                account.account_id    = req.body.benefit_account_id;
                account.balance       = req.body.ammount+account.balance ;
            
                account.save(function(err) {
                    if (err)
                        return res.send(err);
                });
            }
        });

        res.json({ message: 'Operation done!' });

    });
};
module.exports = Deposit;