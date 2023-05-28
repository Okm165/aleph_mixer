import { Component, createSignal } from 'solid-js';

enum Tab {
  MIX,
  UNMIX,
}

const App: Component = () => {
  const [tab, setTab] = createSignal<Tab>();

  return (
    <div class='w-screen min-h-screen text-gray-100 [background-image:linear-gradient(180deg,#000033_0%,#00001d_24%,#00001d_76%,#000033_100%)] grid grid-rows-[auto_1fr]'>
       <div class='grid grid-cols-[1fr_auto] justify-center items-center p-4 border-b-[1px] border-gray-700'>
        <div class='col-start-1 col-end-2 font-bold text-xl'>ALEPH MIXER</div>
        <div class='col-start-2 col-end-3 self-end'>
          <div class="token-linear-wipe-button cursor-pointer rounded-full px-4 py-2 text-center font-lexend font-medium text-text-1">Connect Wallet</div>
        </div>
       </div>
       <div class="grid justify-center items-center">
        <div class="grid grid-flow-row gap-6 bg-blue-500 bg-opacity-10 backdrop-blur-3xl items-stretch p-8 border-[1px] border-gray-400 rounded-xl w-[500px]">
          <div class="grid grid-cols-2 justify-center items-center gap-5">
            <div class="token-linear-wipe-button cursor-pointer rounded-full px-4 py-2 text-center font-lexend font-medium text-text-1">MIX</div>
            <div class="token-linear-wipe-button cursor-pointer rounded-full px-4 py-2 text-center font-lexend font-medium text-text-1">UNMIX</div>
          </div>
          <div class='grid grid-rows-2 items-stretch gap-4'>
            <input type='text' placeholder={tab() == Tab.MIX ? "hash" : "pass"} class="w-full p-3 border-[1px] border-gray-400 rounded-xl bg-slate-800" />
            <input type='number' placeholder={"amount"} class="w-full p-3 border-[1px] border-gray-400 rounded-xl bg-slate-800" />
          </div>
          <div class="text-left font-lexend font-medium text-text-1">Balance: {143.114} TZERO</div>
          <div class="token-linear-wipe-button cursor-pointer rounded-full px-4 py-2 text-center font-lexend font-medium text-text-1">Submit</div>
        </div>
      </div>
    </div>
   
  );
};

export default App;
