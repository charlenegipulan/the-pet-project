var User = require('../models/user');
var jwt = require('jsonwebtoken');
var SECRET = process.env.SECRET;


module.exports = {
  signup,
};

function createJWT(user) {
  return jwt.sign(
    {user}, // data payload
    SECRET,
    {expiresIn: '24h'}
  );
}

function signup(req, res) {
  var user = new User(req.body);
  user.save()
    .then(user => {
      res.json({token: createJWT(user)});
    })
    // User data invalid (probably a duplicate email)
    .catch(err => res.status(400).json(err));
}