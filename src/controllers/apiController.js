function apiController() {
  function post(req, res) {
    return res.send('This API endpoint does not accept POSTs.');
  }

  function get(req, res) {
    return res.send('Welcome to the main page of the appliation API.');
  }

  return {
    get,
    post,
  };
}

module.exports = apiController;
