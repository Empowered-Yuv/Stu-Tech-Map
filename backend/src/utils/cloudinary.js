// import { v2 as cloudinary } from 'cloudinary'

// import fs from 'fs'

          
// cloudinary.config({ 
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
//   api_key: process.env.CLOUDINARY_API_KEY, 
//   api_secret: process.env.CLOUDINARY_API_SECRET
// });

// const uploadOnCloudinary = async (localFilePath) => {
//     try {
//         if (!localFilePath) return null

//         //upload file
//         const res = await cloudinary.uploader.upload(localFilePath, {
//             resource_type: "auto"
//         })

//         //file has been uploaded succesfully
//         //console.log('File is uploaded on cloudniary', res);

//         fs.unlinkSync(localFilePath)
//         return res
//     } catch (error) {
//         fs.unlinkSync(localFilePath)
//         //remove the locally stored file if the opern got failed
//         return null
//     }
// }

// export { uploadOnCloudinary }