import { Component, onMount } from 'solid-js';
import { connectWallet } from './wallet';

const App: Component = () => {

  onMount( async () => {
    await connectWallet();
  })

  return (
    <div class=""></div>
  );
};

export default App;
