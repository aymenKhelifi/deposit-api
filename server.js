var express    = require('express');
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
var Account       = require('./models/account.js');
var addAccount   = require('./modules/addAccount');
var getAccounts    = require('./modules/getAccounts');
var deposit = require('./modules/deposit')
var webhook = require('./modules/webhook')

const CONNECTION_URI = process.env.PROD_MONGODB || 'mongodb://localhost:27017/Accounts';
const PORT =  process.env.PORT || 3000;
var router = express.Router();
var app    = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

addAccount.saveAccount(router);
getAccounts.getaccounts(router);
deposit.deposit(router)
webhook.recieveOrder(router)

router.get('/', function(req, res) {
    res.json({ message: 'welcome to the deposit API' });
});

app.use('/virement', router);
mongoose.connect(CONNECTION_URI);
console.log('connected to Accounts database');
app.listen(PORT);
console.log('server is running on port '+PORT );