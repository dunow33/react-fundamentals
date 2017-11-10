import React, { Component } from 'react';
import StateIntro from './StateIntro';
import JSXIntro from './JSXIntro';
import ComponentsIntro from './ComponentsIntro';
import ChildComponentsIntro from './ChildComponentsIntro';
import PropsIntro from './PropsIntro';
import './App.css';

class App extends Component {
  render() {
    return (
        <div>
          <JSXIntro />
          <ComponentsIntro />
          <PropsIntro name="Michael Bolton" title="The Never Ending Elevator Music!!" />
          <StateIntro />
          <ChildComponentsIntro />
        </div>
    );
  }
}

export default App;
