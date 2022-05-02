import Image from "next/image";
import React, { useState, useEffect } from "react";
import fetchFiles from "../services/files/fetchFiles";
import ImagesListCard from "./ImagesListCard";

const ImagesList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const fetchedFiles = await fetchFiles();
      console.log("fetchedFiles", fetchedFiles);
      setItems(fetchedFiles);
    };
    fetch();
  }, []);

  return (
    <div style={{ display: "block", width: "50%" }}>
      {items?.map((item, idx) => (
        <ImagesListCard key={`${item.name}${idx}`} images={item} />
      ))}
    </div>
  );
};

export default ImagesList;
