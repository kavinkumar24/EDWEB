import React from 'react'
import { useState } from 'react';

function Views(props) {
  const [views, setViews] = useState({
    Python: 0,
    C: 0,
    Java: 0,
  });
  
  return (
    <div>
      <div>
        <h3>Views:</h3>
        <ul>
          {Object.entries(props.views).map(([title, count]) => (
            <li key={title}>
              {title}: {count}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default  Views