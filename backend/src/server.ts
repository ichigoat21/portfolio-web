import mongoose, { Schema } from "mongoose";
import dotenv from "dotenv"

dotenv.config();


mongoose.connect(`mongodb+srv://shivresides:${process.env.MONGO_DB_PASS}@second-brain.4jq3gmh.mongodb.net/portfolio-web`).then(()=>{console.log("server connected")});

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
})

const projectSchema = new Schema({
    title: String,
    description: String,
    techStack: [String],
    liveUrl: String,
    repoUrl: String,
    image: String,
    createdAt: Date
})

const cacheSchema = new Schema({
  platform: String,     
  lastUpdated: Date
})