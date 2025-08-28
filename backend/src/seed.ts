import mongoose from "mongoose";
import dotenv from "dotenv";
import { About } from "./server";

dotenv.config();

mongoose.connect(
  `mongodb+srv://shivresides:${process.env.MONGO_DB_PASS}@second-brain.4jq3gmh.mongodb.net/portfolio-web`
).then(async () => {
  console.log("DB connected");

  const about = new About({
    bio: "Yo, I’m Shiv 👋 full-stack dev, love chess + Spotify.",
    skills: ["JavaScript", "TypeScript", "React", "Node.js", "MongoDB"],
    resumeUrl: "https://example.com/resume.pdf",
    socialLinks: {
      github: "https://github.com/ichigoat21",
      twitter: "https://twitter.com/failedmaximus",
      discord: "#thewhiteyaksha7",
      spotify: "https://open.spotify.com/user/31ndmyp5ewrg2x7dc462l4davol4?si=34926a6f16f74c1d",
      chess: "https://www.chess.com/member/shiv2390"
    }
  })

  await about.save();
  console.log("✅ About seeded");

  mongoose.connection.close();
});



