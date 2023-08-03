const signout = async (req, res) => {
  res.clearCookie("token").status(200).json({
    message: "Your are logged out",
  });
};

export default signout;
