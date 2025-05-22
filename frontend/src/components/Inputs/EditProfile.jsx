import React, { useState, useContext } from 'react';
import ProfilePhotoSelector from '../components/ProfilePhotoSelector';
import axiosInstance from '../utils/axiosInstance';
import { API_PATHS } from '../utils/apiPaths';
import { UserContext } from '../context/UserContext';

const EditProfile = () => {
  const [image, setImage] = useState(null);
  const { updateUser } = useContext(UserContext);

  const handleUpload = async () => {
    if (!image) return;

    const formData = new FormData();
    formData.append("profileImage", image); 

    try {
      const res = await axiosInstance.post(API_PATHS.IMAGE.UPLOAD_IMAGE, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      const newImageUrl = res.data.imageUrl; 

      updateUser({ profileImageUrl: newImageUrl }); 

    } catch (error) {
      console.error("Upload failed", error);
    }
  };

  return (
    <div>
      <ProfilePhotoSelector image={image} setImage={setImage} />
      <button onClick={handleUpload} className="btn btn-primary">
        Upload
      </button>
    </div>
  );
};

export default EditProfile;
