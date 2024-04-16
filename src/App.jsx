import "./tailwind.css";
import Header from "./Components/Header";
import ASide from "./Components/ASide.jsx";
import Section from "./Components/Section.jsx";

function App() {

  return (
    <body className="App bg-white h-full flex flex-col" id="app">
      <Header logo="prototurk"/>
      <main className="flex-auto flex">
        <ASide />
        <Section />
      </main>
    </body>
  )
}

export default App
