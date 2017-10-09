import React from 'react';

const Topic = ({match}) => {
    const path = match.params.topicId;
   
  return ( 
        <div>
            {path === "render" && <div>I am render</div> }
            {path === "props" && <div>Props component</div> }
            {path === "component" && <div>Componet nav click</div> }
        </div>
    )
}

export default Topic;



