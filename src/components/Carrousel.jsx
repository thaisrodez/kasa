import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import '../styles/Components/Carrousel.css';
import Pagination from './Pagination';

function Carrousel({ pictures }) {
  const [currentPicture, setCurrentPicture] = useState(pictures[0]);
  const isMultiplePictures = pictures.length > 1;
  const currentIndex = pictures.indexOf(currentPicture);

  const onLeftClick = () => {
    // if index is first, return last
    if (currentIndex === 0) {
      setCurrentPicture(pictures[pictures.length - 1]);
    } else {
      // else return index - 1 picture
      setCurrentPicture(pictures[currentIndex - 1]);
    }
  };

  const onRightClick = () => {
    // if index is last, return first
    if (currentIndex === pictures.length - 1) {
      setCurrentPicture(pictures[0]);
    } else {
      // else return index + 1 picture
      setCurrentPicture(pictures[currentIndex + 1]);
    }
  };

  return (
    <div className="carrousel">
      <img
        src={currentPicture}
        alt="accomodation"
        className="carrousel-picture"
      />
      {isMultiplePictures ? (
        <>
          <div className="carrousel-navigation">
            <ChevronLeftIcon
              className="carrousel-chevron"
              onClick={onLeftClick}
            />
            <ChevronRightIcon
              className="carrousel-chevron"
              onClick={onRightClick}
            />
          </div>
          <Pagination
            currentPage={pictures.indexOf(currentPicture) + 1}
            totalPages={pictures.length}
            className="carrousel-pagination"
          />
        </>
      ) : null}
    </div>
  );
}

export default Carrousel;
