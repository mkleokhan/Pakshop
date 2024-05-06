import React from 'react';
import UploadButton from './UploadButton';

const YourComponent = () => {
    const handleUpload = (formData) => {
        // Implement your file upload logic here, e.g., send formData to server using fetch or axios
        console.log('Uploading file...', formData);
    };

    return (
        <div>
            <h1>Upload Image</h1>
            <UploadButton onUpload={handleUpload} />
        </div>
    );
};

export default YourComponent;
