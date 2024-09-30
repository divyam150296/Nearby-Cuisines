import React from 'react';
import './style.css';

export default function App() {
  let initialClass = 'red';
  const backgroundColumn = ['red', 'blue', 'green'];
  function updateTheButtons(background) {
    initialClass = background;
  }

  useEffect(() => {

  }, [initialClass])
  return (
    <div className={initialClass}>
      element
      {backgroundColumn.length && backgroundColumn.map((ele) => 
        <div>{ele}</div>
      )}
    </div>
  );
}



using custom hook create 3 buttons that changes the background color on click of each button in react js