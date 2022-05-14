async function session(req, res) {
    if (req.user)
      res.json({
        login: true,
        moderator: req.user.moderator,
        nickName: req.user.nickName,
        name: req.user.name,
        id: req.user.id
      });
      else res.json({ login: false });
  }
  
  
  module.exports = {
    session
  };