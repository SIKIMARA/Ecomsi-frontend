import { Button } from '@material-tailwind/react';
import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';


const DropzoneComponent = ({ image, onImageChange }) => {
  const [isDropzoneActive, setIsDropzoneActive] = useState(false);

  const onDrop = useCallback(
    (acceptedFiles) => {
      setIsDropzoneActive(false); // Reset the dropzone state after file selection

      // Assuming you only allow one image, you can access the first file in the array
      const file = acceptedFiles[0];

      // Read the file as a data URL
      const reader = new FileReader();
      reader.onload = () => {
        const imageData = reader.result;
        onImageChange(imageData);
      };
      reader.readAsDataURL(file);
    },
    [onImageChange]
  );

  const onDeleteImage = () => {
    onImageChange(null); // Set image data to null to remove the image
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop,
    onDragEnter: () => setIsDropzoneActive(true),
    onDragLeave: () => setIsDropzoneActive(false),
  });

  const dropzoneStyles = {
    border: '2px dashed #ccc',
    borderRadius: '4px',
    padding: '20px',
    textAlign: 'center',
    margin:"10px",
    cursor: 'pointer',
    position: 'relative', // Added to position the delete button
  };

  

  return (
    <div style={{ margin:"20px" }}>
      {image ? (
        <div style={{border:"2px dashed #ccc",borderRadius: '4px', padding: '20px',display:'flex',alignItems:"center",justifyContent:"center"}}>
          <img
            src={image}
            alt="Uploaded"
            style={{ maxWidth: '100%', maxHeight: '200px' }}
          />
          {/* MUI BUTTON FOR DELETE */}
          <Button variant="contained" color="error" onClick={onDeleteImage} style={{margin:"10px"}}  >Delete Image</Button>
          
        </div>
      ) : (
        <div
          {...getRootProps()}
          style={{ ...dropzoneStyles, border: isDropzoneActive ? '2px dashed blue' : '2px dashed #ccc' }}
        >
          <input {...getInputProps()} />
          <p>Drag & drop an image here or click to select one</p>
        </div>
      )}
    </div>
  );
};

export default DropzoneComponent;