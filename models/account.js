var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var accountSchema   = new Schema({
    account_id: String,
    balance : Number
});

module.exports = mongoose.model('account', accountSchema);