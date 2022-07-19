import React, { useState, useRef } from "react";
import Draggable from "react-draggable"; //npm install react-draggable

export default function App() {
  const nodeRef = useRef(null);

  const [Opacity, setOpacity] = useState(true); //불투명화

  const handleStart = () => {
    setOpacity(false);
  };
  const handleEnd = () => {
    setOpacity(true);
  };

  return (
    <div>
      <Draggable nodeRef={nodeRef} onStart={handleStart} onStop={handleEnd}>
        <div ref={nodeRef} style={{ opacity: Opacity ? "0.3" : "1" }}>
          <div>[나를 드래그해봐]</div>
        </div>
      </Draggable>
    </div>
  );
}
