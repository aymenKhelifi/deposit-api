var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
var Account       = require('./models/account.js');
var addAccount   = require('./modules/addAccount');
var getAccounts    = require('./modules/getAccounts');
var deposit = require('./modules/deposit')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port =  3000;
var router = express.Router();

addAccount.saveAccount(router);
getAccounts.getaccounts(router);
deposit.deposit(router)
//getBooks.getbooks(router);

router.get('/', function(req, res) {
    res.json({ message: 'welcome to the virement API' });
});

app.use('/virement', router);
mongoose.connect('mongodb://localhost:27017/Accounts');
console.log('connected to Accounts database');
app.listen(port);
console.log('server is running on port 3000' );