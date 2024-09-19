const Explore_Repo = async (req,res)=>{
    const {language} = req.params
    try {
        const resp = await fetch(`https://api.github.com/search/repositories?q=${language}:javascript&sort=stars&order=desc&per_page=10`);
		const data = await resp.json();
        res.status(200).json({repos : data.items})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = {
    Explore_Repo
}