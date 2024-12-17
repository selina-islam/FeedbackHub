import React from 'react'
import AllTopic from './AllTopic'
import MyFeedback from './MyFeedback'
import FirstCarousel from './FirstCarousel'
import Trends from './Trends';
import Reviews from './Review/Reviews';


function SectionMaintain() {
  return (
    <>
      <AllTopic />
      <FirstCarousel />
      <MyFeedback />
      <Trends />
      <Reviews />
    </>
  );
}

export default SectionMaintain