import React, { useState, useRef } from "react";
import ImageUploader from "./ImageUploader";
import saveFiles from "../services/files/saveFiles";
import { useRouter } from "next/router";
import { Button, TextField } from "@mui/material";

const UploadForm = () => {
  const [title, setTitle] = useState("");
  const [files, setFiles] = useState([]);
  const formRef = useRef(null);

  const router = useRouter();

  const onSubmit = () => {
    const form = new FormData();
    form.append("title", title);
    files.forEach((file) => {
      form.append("image", file);
    });
    saveFiles(form).then(()=> router.push('/') );
  };

  return (
    <form name="imagesForm" onSubmit={(e) => e.preventDefault()} ref={formRef}>
      <TextField
        type="text"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        variant="outlined"
        label="Título"
      />
      <ImageUploader files={files} setFiles={setFiles} />
      <Button
        type="button"
        variant="contained"
        color="primary"
        onClick={onSubmit}
      >
        Send!
      </Button>
    </form>
  );
};

export default UploadForm;
