import React from 'react';

function Logo({appName, logWhenClicked}) {
    return <>
      <header>
        <h1>Welcome to the {appName}</h1>
        <img src='https://freepngimg.com/thumb/pokemon/37444-9-pikachu-file-thumb.png' 
        onClick={logWhenClicked}></img>
      </header>
    </>
  }

  export default Logo