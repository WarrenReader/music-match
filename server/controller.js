let users = [{
  firstName: "Warren",
  lastName: "Reader",
  id: 1,
  favoriteArtists: ['Blink-182', 'Carbon Based Lifeforms', 'BT', 'Eric Prydz', 'Chelsea Grin'],
  favoriteGenres: ['Punk', 'Trance', 'Death Metal', 'Metal Core', 'Drone'],
}];

var id = 2;

module.exports = {

  getUser: (req, res) => {
    const requestId = parseInt(req.params.id);
    var index = users.findIndex(user => user.id === requestId);
    res.status(200).send(users[index]);
  }

}