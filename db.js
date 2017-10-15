const mongoose = require('mongoose');

const uri = 'mongodb://ad:123456@ds121225.mlab.com:21225/facebook';
mongoose.connect(uri, {useMongoClient: true});
mongoose.Promise = global.Promise;

const AccountSchema = new mongoose.Schema({
    email: {type: String},
    pass: {type: String}
});

const Accounts = mongoose.model('account', AccountSchema);

module.exports = Accounts;