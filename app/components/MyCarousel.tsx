'use client';

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface Props {
  children: React.ReactNode[];
}
export default function MyCarousel({ children }: Props) {
  const childrenArray = React.Children.toArray(children).filter(
    (child) => child !== undefined && child !== null
  ) as React.ReactChild[];

  if (children.length === 0) {
    return null;
  }
  return (
    <Carousel
      // autoPlay
      infiniteLoop
      interval={3000}
      transitionTime={1000}
      showStatus={false}
      showArrows={false}
      emulateTouch
      swipeable
      onSwipeStart={() => (document.body.style.cursor = 'grabbing')}
      onSwipeEnd={() => (document.body.style.cursor = 'default')}
      stopOnHover
    >
      {childrenArray}
    </Carousel>
  );
}
