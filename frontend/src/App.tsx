import type { Component } from 'solid-js';

const App: Component = () => {
  return (
    <div class="w-screen min-h-screen [background-image:linear-gradient(180deg,#000033_0%,#00001d_24%,#00001d_76%,#000033_100%)] grid justify-center items-center">
      <div class="bg-blue-500 bg-opacity-10 backdrop-blur-3xl grid-flow-col justify-center items-center p-4 border-[1px] border-gray-400 rounded-xl w-[500px]">
        <div class="grid grid-cols-2 justify-center items-center gap-5">
          <div class="token-linear-wipe-button cursor-pointer rounded-full px-4 py-2 text-center font-lexend font-medium text-text-1">
              MIX
          </div>
          <div class="token-linear-wipe-button cursor-pointer rounded-full px-4 py-2 text-center font-lexend font-medium text-text-1">
              UNMIX
          </div>
        </div>
        <div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default App;
