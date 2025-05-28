const hello = (req, res) => {
  res.status(200).json({ message: `Hello, ${req.user.name}!` });
};

module.exports = hello;
