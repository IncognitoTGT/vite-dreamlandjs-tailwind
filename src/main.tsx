import "@/index.css";
import viteLogo from "/vite.svg";
import percuryLogo from "/percury.svg";
function App(this: DLComponent<{ counter: number }>) {
  this.counter = 0;
  return (
    <div class="flex items-center justify-center min-h-screen py-2 bg-gray-950">
      <header class="flex flex-col items-center justify-center space-y-3">
        <div class="p-2 flex-row flex">
          <img alt="Vite Logo" class="h-20 w-20 m-2" src={viteLogo} />
          <img
            alt="Mercury Workshop Logo"
            class="h-20 w-20 m-2"
            src={percuryLogo}
          />
        </div>
        <h1 class="text-4xl text-violet-50">Vite + DreamlandJS</h1>
        <p class="text-violet-50">
          Edit <code>src/main.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <button
            class="bg-gray-950 border-2 border-violet-900 hover:border-violet-600 text-violet-100 py-2 px-4 rounded font-medium"
            on:click={() => {
              this.counter++;
            }}
          >
            count is: {use(this.counter)}
          </button>
        </p>
      </header>
    </div>
  );
}

window.addEventListener("load", () => {
  document.body.appendChild(<App />);
});
