import { Alert, Button, FileInput, TextInput } from 'flowbite-react';
import React, { useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function CreatePost() {
  const [file, setFile] = useState(null);
  const [imageUploadProgress, setImageUploadProgress] = useState(null);
  const [imageUploadError, setImageUploadError] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');
  const [formData, setFormData] = useState({});
  const [publishError, setPublishError] = useState(null);

  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setPreviewUrl(URL.createObjectURL(selectedFile));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      setImageUploadError('Please select an image');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('image', file);

      const response = await axios.post('/api/v1/blog/create', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        onUploadProgress: (progressEvent) => {
          setImageUploadProgress(Math.round((progressEvent.loaded / progressEvent.total) * 100));
        }
      });

      setImageUploadProgress(null);
      setImageUploadError(null);
      setFormData({ ...formData, image: response.data.imageUrl });

      const data = response.data;
      if (!data.success) {
        setPublishError(data.message);
        return;
      }

      setPublishError(null);
      navigate(`/blog/${data.slug}`);
    } catch (error) {
      setImageUploadError('Image upload failed');
      console.error('Failed to create blog:', error);
    }
  };

  return (
    <div className='p-3 max-w-3xl mx-auto min-h-screen'>
      <h1 className='text-center text-3xl my-7 font-semibold'>Create a post</h1>
      <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
        <TextInput
          type='text'
          placeholder='Title'
          required
          outline
          id='title'
          className='flex-1'
          onChange={(e) =>
            setFormData({ ...formData, title: e.target.value })
          }
        />
        <div className='flex gap-4 items-center justify-between border-2 border-[#0c24ff] p-3'>
          <FileInput
            type='file'
            accept='image/*'
            onChange={handleImageChange}
          />
          <Button
            type='submit'
            size='sm'
            outline
            gradientDuoTone="purpleToBlue"
            disabled={imageUploadProgress}
          >
            {imageUploadProgress ? (
              <div className='w-16 h-16'>
                <CircularProgressbar
                  value={imageUploadProgress}
                  text={`${imageUploadProgress || 0}%`}
                />
              </div>
            ) : (
              'Upload Image'
            )}
          </Button>
        </div>
        {imageUploadError && <Alert color='failure'>{imageUploadError}</Alert>}
        {previewUrl && (
          <img
            src={previewUrl}
            alt='upload'
            className='w-full h-72 object-cover mb-4'
          />
        )}
        <ReactQuill
          theme='snow'
          placeholder='Write something...'
          className='h-72 mb-12'
          required
          onChange={(value) => {
            setFormData({ ...formData, content: value });
          }}
        />
        <Button type='submit' outline gradientDuoTone="purpleToBlue">
          Publish
        </Button>
        {publishError && (
          <Alert className='mt-5' color='failure'>
            {publishError}
          </Alert>
        )}
      </form>
    </div>
  );
}
