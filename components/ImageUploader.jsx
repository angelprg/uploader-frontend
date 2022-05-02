import { styled } from "@mui/material";
import React from "react";
import { FileUploader } from "react-drag-drop-files";
import ImagePreviewCard from "./ImagePreviewCard";
const fileTypes = ["JPG", "JPEG", "PNG"];

const imageContainerStyle = {
  margin: 2
} 
const ImageContainer = styled("div")(imageContainerStyle)

const ImageUploader = ({ files, setFiles }) => {
  const handleAdd = (newFiles) => {
    console.log("newFiles", newFiles);
    setFiles([...files, ...newFiles]);
  };
  const handleRemove = (file) => {
    setFiles(
      files.filter(
        (f) => f.name !== file.name && f.lastModified !== file.lastModified
      )
    );
  };
  

  return (
    <div>
      <h3>-Image Uploader-</h3>
      <FileUploader
        handleChange={handleAdd}
        name="file"
        types={fileTypes}
        multiple
      />
      <h4>Current Files:</h4>
      {files.length > 0 && (
        <ImageContainer>
          {files.map((f) => (
            <ImagePreviewCard
              src={URL.createObjectURL(f)}
              name={f.name}
              onDelete={() => handleRemove(f)}
              key={`${f.name}${f.lastModified}`}
            />
          ))}
        </ImageContainer>
      )}
    </div>
  );
};

export default ImageUploader;
