import mongoose, { Schema } from "mongoose";

const blogSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default:
        "https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2021/09/how-to-write-a-blog-post.png",
    },
    writer: {
      type: Schema.Types.ObjectId,
      ref: "Mentor",
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);


export const Blog = mongoose.model("Blog", blogSchema);
