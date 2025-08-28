"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
mongoose_1.default.connect(`mongodb+srv://shivresides:${process.env.MONGO_DB_PASS}@second-brain.4jq3gmh.mongodb.net/portfolio-web`).then(() => { console.log("server connected"); });
