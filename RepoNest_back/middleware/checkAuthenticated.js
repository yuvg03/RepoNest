
const checkAuthenticated =  async (req, res, next) => {
	if (req.isAuthenticated()) {
		return next();
	}
	res.redirect(process.env.CLIENT_BASE_URL + "/login");
}

module.exports = checkAuthenticated