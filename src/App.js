import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { DuetLayout, DuetHero } from "@duetds/react"

function App() {
  React.useEffect(() => {
    if (window.innerWidth > 992) {
      window.scrollTo(0, 160)
    } else {
      window.scrollTo(0, 110)
    }
  })

  return (
    <>
      <Header />
      <DuetLayout center>
        <DuetHero />
        <div slot="top" role="region"></div>
        <div slot="main"></div>
      </DuetLayout>
      <Footer />
    </>
  )
}

export default App
