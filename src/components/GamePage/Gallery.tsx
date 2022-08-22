import { useState } from 'react';
import { Screenshot } from '../../types/types';
import classes from './Gallery.module.css';

interface GalleryProps {
  screenshots: Screenshot[] | undefined;
  title: string;
}

const Gallery: React.FC<GalleryProps> = ({ screenshots, title }) => {
  if (!screenshots || screenshots.length === 0) return null;
  const [modal, setModal] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string>('');

  const getImg = (image: string) => {
    setSelectedImage(image);
    setModal(true);
  };

  return (
    <>
      <div className={`${classes.modal} ${modal ? classes.active : ''}`}>
        <img src={selectedImage} alt='image' />
        <button className={classes.button} onClick={() => setModal(false)}>
          x
        </button>
      </div>
      <div className={classes.gallery}>
        <h2>{title} Screenshots</h2>
        {screenshots.slice(0, 3).map((screenshot, i) => (
          <div
            className={classes.pic}
            key={i}
            onClick={() => getImg(screenshot.image)}
          >
            <img src={screenshot.image} alt='game img' />
          </div>
        ))}
      </div>
    </>
  );
};

export default Gallery;
