import * as FluentUI from '@fluentui/react-northstar';
import * as React from 'react';

const App = () => (
  <FluentUI.Provider theme={FluentUI.themes.teams}>
    <FluentUI.Button accessibility={FluentUI.buttonBehavior} content="Click me" />
  </FluentUI.Provider>
);

export default App;
