const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
			unique: true,
		},
		name: {
			type: String,
			default: "", 
		},
		profileUrl: {
			type: String,
			required: true,
		},
		avatarUrl: {
			type: String,
		},
		likedProfiles: {
			type: [String], // array of string
			default: [],
		},
		likedBy: [
			{
				username: {
					type: String,
					required: true,
				},
				avatarUrl: {
					type: String,
				},
				likedDate: {
					type: Date,
					default: Date.now, // aaj ki date daaldi
				},
			},
		],
	},
	{ timestamps: true } // agr created_at and updated_at chahie to uske lie ek seperate object
);

const User = mongoose.model("User", userSchema);

module.exports = User;