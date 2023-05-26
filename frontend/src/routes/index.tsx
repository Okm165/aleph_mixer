import {Title} from "solid-start";

export default function Home() {
  return (
    <main>
      <Title>Aleph Zero Mixer</Title>
      <div class="min-h-screen flex items-center justify-center bg-night-100">
        <div class="max-w-md w-full space-y-8">
          <div>
            <h1 class="mt-6 text-center text-3xl font-extrabold text-text-night-100">
              Lorem ipsum
            </h1>
          </div>
          <form class="mt-8 space-y-6" action="#">
            <input type="hidden" name="remember" value="true"/>

            <div class="rounded-md shadow-sm -space-y-px">
              <div>
                <input id="data" name="from-token" type="text" autocomplete="off" required
                       class="border-gray-300 placeholder-gray-500 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 bg-night-0 appearance-none rounded-none relative block w-full px-3 py-5 border rounded-t-lg focus:outline-none focus:z-10 sm:text-sm"
                       placeholder="Data"/>
              </div>
              <div>
                <input id="amount" name="to-token" type="text" autocomplete="off" required
                       class="border-gray-300 placeholder-gray-500 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 bg-night-0 appearance-none rounded-none relative block w-full px-3 py-5 border rounded-b-lg focus:outline-none focus:z-10 sm:text-sm"
                       placeholder="Amount"/>
              </div>
            </div>

            <div>
              <button type="submit"
                      class="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-day-high-emphasis bg-buttons-primary hover:bg-buttons-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-buttons-primary-hover">
                MIX
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
