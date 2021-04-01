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
      const newFileName = `${Math.random()}${file.name}`;
      const uploadFile = storage.ref(`images/${newFileName}`).put(file);

      uploadFile.on(
        "state_changed",
        () => {
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
              setImages([...images, { src: url }]);
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
      {uploadProgress ? (
        <p>Ładowanie</p>
      ) : (
        <Button
          type="button"
          onClick={handleUploadFile}
          value={"Dodaj Zdjęcie"}
        >
          Dodaj.
        </Button>
      )}
    </Container>
  );
};

export default AddImages;
