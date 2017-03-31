'use sctrict'

var user = require('../models/user');
var ActiveDirectory = require('activedirectory');

var config = {
  url: 'ldap://urbmad0101:389',
  baseDN: 'dc=urbaser,dc=local',
  username: 'adminsite',
  password: 'urbaser@10'
}
var ad = new ActiveDirectory(config);
/*
function pruebas(req, res) {

  var config = {
    url: 'ldap://urbmad0101:389',
    baseDN: 'dc=urbaser,dc=local',
    username: 'adminsite',
    password: 'urbaser@10'
  }
  var ad = new ActiveDirectory(config);
  var sAMAccountName = 'arodriguezm';

  ad.findUser(sAMAccountName, function(err, user) {
    if (err) {
      console.log('ERROR: ' +JSON.stringify(err));
      return;
    }
    if (! user){
      console.log('User: ' + sAMAccountName + ' not found.');
    }else {
      var name = JSON.stringify(user);
      res.status(200).send(name);
    }

  });
}
*/
function saveUser(req, res) {
 var newUser = new user();

 var params = req.body;

 console.log(params.user);


 var sAMAccountName = params.user;

 ad.findUser(sAMAccountName, function(err, user) {
   if (err) {
     console.log('ERROR: ' +JSON.stringify(err));
     return;
   }
   if (! user){
     console.log('User: ' + sAMAccountName + ' not found.');
   }else {
     var name = JSON.stringify(user);
     res.status(200).send(name);

     user.name = JSON.stringify(user.displayName)

   }
   /*if (! user) console.log('User: ' + sAMAccountName + ' not found.');
   else console.log(JSON.stringify(user.displayName));*/
 });





 //user.name = params.
}

module.exports = {
  saveUser
};
