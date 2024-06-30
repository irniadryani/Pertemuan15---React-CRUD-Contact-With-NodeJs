import React from "react";
import {
  ImageList,
  ImageListItem,
} from "@mui/material";


 //Komponen ImageListDisplay untuk menampilkan daftar gambar dalam bentuk ImageList dari MUI.
 //Menerima props images yang berisi array objek gambar.

class ImageListDisplay extends React.Component {
  render() {
    const { images } = this.props; // Mengambil props images dari parent component

    return (
      <ImageList variant="masonry" cols={3} gap={8} style={{ marginTop: "20px" }}>
        {/* Mapping array images untuk menampilkan setiap gambar */}
        {images.map((image) => (
          <ImageListItem key={image.id}>
            <img
              src={`${image.urls.regular}?w=248&fit=crop&auto=format`}
              srcSet={`${image.urls.regular}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={image.alt_description}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    );
  }
}

export default ImageListDisplay;
