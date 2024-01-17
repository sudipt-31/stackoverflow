import React from 'react'
import "./RightSidebar.css";
import "./Widget"
import "./WidgetTags"

const RightSidebar = () => {
  return (
    <div>
      <aside className="right-sidebar">
        <Widget/>
        <WidgetTags/>
      </aside>
    </div>
  );
}

export default RightSidebar
