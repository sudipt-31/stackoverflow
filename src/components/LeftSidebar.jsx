import React from 'react'
import './LeftSidebar.css'


const LeftSidebar = () => {
  return (
    <div className="left-sidebar">
      <p className="p-select">
        <FaQuestion /> QUESTIONS
      </p>
      <p>
        <IoBagOutline /> JOBS
      </p>
      <p>
        <IoDocumentTextOutline /> DOCUMENTATION
      </p>
      <p>
        <GoTag /> TAGS
      </p>
      <p>
        <LuUser2 /> USERS
      </p>
      <p>
        <SlBadge /> BADGES
      </p>
      <p>
        <BsMegaphone /> ASK QUESTION
      </p>
    </div>
  );
}

export default LeftSidebar
