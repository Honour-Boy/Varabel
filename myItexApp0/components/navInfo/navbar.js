import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Images from "./images";
import navImg from "./navImg";
import Logo from "../../Images/itexLogo.jpg";

export default function Navbar({ show, setShow, word }) {
  const [permimages, setPermImages] = useState(navImg);
  const [images, setImages] = useState(permimages);
  const navigate = useNavigate();

  function selected(id) {
    setImages((prevImages) => {
      const updatedImages = prevImages.map((Image) => ({
        ...Image,
        selected: false,
      }));

      return updatedImages.map((Image) =>
        Image.id === id
          ? {
              ...Image,
              selected: !Image.selected,
            }
          : Image
      );
    });
  }

  function toggleShow() {
    setShow(!show);
  }

  function linkClicked(word) {
    navigate(`/${word}`);
  }

  function resetImages() {
    setImages(permimages);
  }

  useEffect(() => {
    setPermImages((prevPermImages) => {
      const updatedImages = prevPermImages.map((PermImage) =>
        PermImage.word === word
          ? {
              ...PermImage,
              selected: true,
            }
          : PermImage
      );
      return updatedImages;
    });

    setImages((prevImages) => {
      const updatedImages = prevImages.map((Image) =>
        Image.word === word
          ? {
              ...Image,
              selected: true,
            }
          : Image
      );
      return updatedImages;
    });

  }, []);

  const navBigContStyle = show
    ? {
        transform: "translateX(0px)",
        transition: "all 0.5s ease-in-out",
      }
    : {
        transform: "translateX(-380px)",
        transition: "all 0.5s ease-in-out",
      };
  const imageElement = images.map((image) => (
    <Images
      key={image.id}
      selected={image.selected}
      svg={image.svg}
      show={show}
    />
  ));
  const imageElement2 = images.map((image) => (
    <Images
      key={image.id}
      selected={image.selected}
      svg={image.svg}
      word={image.word}
      hovFunc={() => selected(image.id)}
      clickFunc={() => linkClicked(image.word)}
      show={show}
    />
  ));
  return (
    <div>
      <div className="nav-container" onMouseEnter={toggleShow}>
        <nav>
          <ul>
            <li>
              <img src={Logo} />
            </li>
            {imageElement}
          </ul>
        </nav>
      </div>
      <div
        className="nav-big-container"
        style={navBigContStyle}
        onMouseLeave={() => {
          toggleShow();
          resetImages();
        }}
      >
        <nav>
          <ul>
            <li>
              <h1>Varabel</h1>
              <img src={Logo} />
            </li>
            {imageElement2}
          </ul>
        </nav>
      </div>
    </div>
  );
}
