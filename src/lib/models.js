import mongoose, {Schema} from "mongoose";

const downloadHistorySchema = new mongoose.Schema(
	{
		id: {
			type: Number,
			required: true,
		},
        type: {
			type: String,
			required: true,
		},
        tags: {
			type: String,
			required: true,
		},
        previewURL: {
			type: String,
			required: true,
		},
        previewWidth: {
			type: Number,
			required: true,
		},
        previewHeight: {
			type: Number,
			required: true,
		},
        webformatURL: {
			type: String,
			required: true,
		},
        webformatWidth: {
			type: Number,
			required: true,
		},
        webformatHeight: {
			type: Number,
			required: true,
		},
        largeImageURL: {
			type: String,
			required: true,
		},
        imageWidth: {
			type: Number,
			required: true,
		},
        imageHeight: {
			type: Number,
			required: true,
		},
        views: {
			type: Number,
			required: true,
		},
        downloads: {
			type: Number,
			required: true,
		},
        likes: {
			type: Number,
			required: true,
		},
        user_id: {
			type: Number,
			required: true,
		},
        user: {
			type: String,
			required: true,
		},
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
	},
	{timestamps: true},
);


const userSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			min: 2,
			max: 50,
		},
		email: {
			type: String,
			required: true,
			unique: true,
			max: 50,
		},
		image: {
			type: String,
		}
	},
	{timestamps: true},
);

export const User = mongoose.models?.User || mongoose.model("User", userSchema);
export const DownloadHistory = mongoose.models?.DownloadHistory || mongoose.model("DownloadHistory", downloadHistorySchema);