import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import loadable from '@loadable/component';

const SplitMe = loadable(() => import('./SplitMe'), {
  fallback: <div>loading...</div>
}); // 로딩중에 보여줄 UI

function App() {
  const [visible, setVisible] = useState(false);
  const onClick = () => {
    setVisible(true);
  };
  const onMouseOver = () => {
    SplitMe.preload();
  };  // 마우스 커서를 올리기만 해도 로딩이 시작 된다.

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p onClick={onClick} onMouseOver={onMouseOver}>Hello React!</p>
            {visible && <SplitMe />}
        </header>
      </div>
    );
  }

export default App;
