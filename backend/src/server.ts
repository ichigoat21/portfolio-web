import mongoose, { Schema } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(
  `mongodb+srv://shivresides:${process.env.MONGO_DB_PASS}@second-brain.4jq3gmh.mongodb.net/portfolio-web`
).then(()=>{ console.log("server connected") });

const aboutSchema = new Schema({
  bio: String,
  skills: [String],
  resumeUrl: String,
  socialLinks: {
    github: String,
    linkedin: String,
    twitter: String,
    discord: String,
    spotify: String,
    chess: String
  }
});

const projectSchema = new Schema({
  title: { type: String, required: true },
  description: String,
  techStack: [String],
  liveUrl: String,
  repoUrl: String,
  image: String,
  createdAt: { type: Date, default: Date.now }
});

const cacheSchema = new Schema({
  platform: { type: String, required: true, unique: true },
  data: { type: Schema.Types.Mixed },
  lastUpdated: { type: Date, default: Date.now }
});

const About = mongoose.model("About", aboutSchema);
const Project = mongoose.model("Project", projectSchema);
const SocialCache = mongoose.model("SocialCache", cacheSchema);

export { About, Project, SocialCache };
