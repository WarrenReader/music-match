let users = [{
  name: "Warren Reader",
  email: "WarrenDReader@gmail.com",
  id: 1,
}];

let id = 2;

module.exports = {

  getUser: (req, res) => {
    const requestId = parseInt(req.params.id);
    var index = users.findIndex(user => user.id === requestId);
    res.status(200).send(users[index]);
  },

  updateUser: (req, res) => {
    let body = req.body;
    const requestedId = parseInt(body.id);
    let index = users.findIndex(user => user.id === requestedId);
    users[index] = req.body;
    res.status(200).send(users[index]);
  },

  createUser: (req, res) => {
    let newUser = req.body;
    newUser.id = id;
    users.push(newUser);
    res.status(200).send(users);
    id++;
  },

  deleteUser: (req, res) => {
    let deleteUser = req.body;
    for (var i = 0; i < users.length; i++) {
      let obj = users[i];
      if (obj.id === parseInt(req.params.id)) {
        if (obj.name === req.params.name) {
          users.splice(i, 1);
        }
      }
    }

    res.status(200).send(users);
  }

}