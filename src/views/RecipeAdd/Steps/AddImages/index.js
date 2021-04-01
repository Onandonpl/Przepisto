import React, { useState } from "react";
import { storage } from "../../../../lib/firebase";
import { Container, Button } from "./style";

const AddImages = ({ setImages, images }) => {
  
  const [file, setFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState("");
  const handleChangeFile = (e) => {
    setFile(e.target.files[0]);
  };
  const handleUploadFile = () => {
    if (file) {
      const newFileName = `${file.name}${Math.random()}`;
      const uploadFile = storage.ref(`images/${newFileName}`).put(file);

      uploadFile.on(
        "state_changed",
        (snapshot) => {
          setUploadProgress("uploading");
        },
        (error) => {
          console.log(error);
        },
        () => {
          storage
            .ref("images")
            .child(newFileName)
            .getDownloadURL()
            .then((url) => {
              setImages([...images, { url: url }]);
              setFile(null);
            });
          setUploadProgress("");
        }
      );
    } else {
      alert("wybierz zdjecie");
    }
  };
  return (
    <Container>
      <input type="file" onChange={handleChangeFile} />
      <Button type="button" onClick={handleUploadFile} value={"Dodaj Zdjęcie"}>
        Dodaj.
      </Button>
    </Container>
  );
};

export default AddImages;
