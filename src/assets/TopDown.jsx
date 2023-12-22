import { Button } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const TopDown = () => {
  const [isVisible, setIsVisible] = useState(false);

  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const listenToScroll = () => {
    let heightToHidden = 250;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll);
  }, []);
  return (
    <>
      {isVisible && (
        <Button
          pos={'fixed'}
          zIndex={100}
          right={3}
          bottom={3}
          onClick={goToBtn}
        >
          <FaArrowUp />
        </Button>
      )}
    </>
  );
};

export default TopDown;
