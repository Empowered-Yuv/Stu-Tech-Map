import {Blog} from '../models/blogs.model.js';
import { uploadOnCloudinary } from '../utils/cloudinary.js';
import { errorHandler } from '../utils/error.js';

// export const create = async (req, res, next) => {
//   if (!req.user.isMentor) {
//     return next(errorHandler(403, 'You are not allowed to create a post'));
//   }
//   if (!req.body.title || !req.body.content) {
//     return next(errorHandler(400, 'Please provide all required fields'));
//   }
//   const slug = req.body.title
//     .split(' ')
//     .join('-')
//     .toLowerCase()
//     .replace(/[^a-zA-Z0-9-]/g, '');

//     let imageUrl = req.file.path
//     const result = await uploadOnCloudinary(imageUrl)
//   const newBlog = new Blog({
//     ...req.body,
//     slug,
//     image: imageUrl,
//     userId: req.user.id
//   });
//   try {
//     const savedBlog = await newBlog.save();
//     res.status(201).json(savedBlog);
//   } catch (error) {
//     next(error);
//   }
// };

// const uploadImage = (req, res) => {
//   const imagePath = req.file.path;

//   cloudinary.uploader.upload(imagePath, (error, result) => {
//     if (error) {
//       console.error('Failed to upload image to Cloudinary:', error);
//       return res.status(500).json({ error: 'Failed to upload image' });
//     }
//     res.json({ imageUrl: result.secure_url });
//   });
// };

const createBlog = async (req, res) => {

  if (!req.user.isMentor) {
        return next(errorHandler(403, 'You are not allowed to create a post'));
      }
      if (!req.body.title || !req.body.content) {
        return next(errorHandler(400, 'Please provide all required fields'));
      }
      const slug = req.body.title
        .split(' ')
        .join('-')
        .toLowerCase()
        .replace(/[^a-zA-Z0-9-]/g, '');

  const imagePath = req.file.path;

  cloudinary.uploader.upload(imagePath, (error, result) => {
    if (error) {
      console.error('Failed to upload image to Cloudinary:', error);
      return res.status(500).json({ error: 'Failed to upload image' });
    }
    res.json({ imageUrl: result.secure_url });
  });
  const { title, content, imageUrl } = req.body;

  try {
    const newBlog = new Blog({ title, content, image: imageUrl, slug });
    await newBlog.save();
    res.status(201).json({ message: 'Blog created successfully', newBlog });
  } catch (error) {
    console.error('Failed to create blog:', error);
    res.status(500).json({ error: 'Failed to create blog' });
  }
};


export const getblogs = async (req, res, next) => {
  try {
    const startIndex = parseInt(req.query.startIndex) || 0;
    const limit = parseInt(req.query.limit) || 9;
    const sortDirection = req.query.order === 'asc' ? 1 : -1;
    const blogs = await Blog.find({
      ...(req.query.userId && { userId: req.query.userId }),
      ...(req.query.category && { category: req.query.category }),
      ...(req.query.slug && { slug: req.query.slug }),
      ...(req.query.postId && { _id: req.query.postId }),
      ...(req.query.searchTerm && {
        $or: [
          { title: { $regex: req.query.searchTerm, $options: 'i' } },
          { content: { $regex: req.query.searchTerm, $options: 'i' } },
        ],
      }),
    })
      .sort({ updatedAt: sortDirection })
      .skip(startIndex)
      .limit(limit);

    const totalBlogs = await Blog.countDocuments();

    const now = new Date();

    const oneMonthAgo = new Date(
      now.getFullYear(),
      now.getMonth() - 1,
      now.getDate()
    );

    const lastMonthPosts = await Blog.countDocuments({
      createdAt: { $gte: oneMonthAgo },
    });

    res.status(200).json({
      blogs,
      totalBlogs,
      lastMonthBlogs,
    });
  } catch (error) {
    next(error);
  }
};

export const deletepost = async (req, res, next) => {
  if (!req.user.isAdmin || req.user.id !== req.params.userId) {
    return next(errorHandler(403, 'You are not allowed to delete this post'));
  }
  try {
    await Post.findByIdAndDelete(req.params.postId);
    res.status(200).json('The post has been deleted');
  } catch (error) {
    next(error);
  }
};

 export const updatepost = async (req, res, next) => {
  if (!req.user.isMentor || req.user.id !== req.params.userId) {
    return next(errorHandler(403, 'You are not allowed to update this post'));
  }
  try {
    const updatedPost = await Post.findByIdAndUpdate(
      req.params.postId,
      {
        $set: {
          title: req.body.title,
          content: req.body.content,
          category: req.body.category,
          image: req.body.image,
        },
      },
      { new: true }
    );
    res.status(200).json(updatedPost);
  } catch (error) {
    next(error);
  }
};

export {
  createBlog
}