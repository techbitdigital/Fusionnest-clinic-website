import React, { useState, useEffect } from 'react';

const AdminPage = () => {
  const [images, setImages] = useState([]);
  const [newImage, setNewImage] = useState(null);

  // Fetch images from backend or Strapi
  useEffect(() => {
    fetch('https://your-strapi-domain/api/gallery-images')
      .then(response => response.json())
      .then(data => setImages(data));
  }, []);

  // Handle image upload
  const handleImageUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('files', newImage);

    await fetch('https://your-strapi-domain/api/upload', {
      method: 'POST',
      body: formData,
    });

    // Fetch updated images after upload
    fetch('https://your-strapi-domain/api/gallery-images')
      .then(response => response.json())
      .then(data => setImages(data));
  };

  return (
    <div className="admin-page">
      <h2>Admin - Manage Gallery</h2>

      {/* Image Upload Form */}
      <form onSubmit={handleImageUpload}>
        <input
          type="file"
          onChange={(e) => setNewImage(e.target.files[0])}
        />
        <button type="submit">Upload Image</button>
      </form>

      {/* Display Gallery Images */}
      <div className="gallery-images">
        {images.map((image) => (
          <img key={image.id} src={image.url} alt={image.name} />
        ))}
      </div>
    </div>
  );
};

export default AdminPage;
  