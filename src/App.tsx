import Content from "./components/Layout/Content"
import Footer from "./components/Layout/Footer"
import Header from "./components/Layout/Header"

const App = () => {
  return (
    <>
      <div className="w-1/4  border-1 border-slate-200 absolute top-40 left-180 rounded-2xl p-4">
      <div id="Header">
        <Header />
      </div>
      <div id="Content">
        <Content />
      </div>
      <div id="footer">
        <Footer />
      </div>
      </div>
    </>
  )
}

export default App