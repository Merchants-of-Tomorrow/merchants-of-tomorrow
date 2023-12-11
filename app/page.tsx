import { Metadata } from "next"
import Navigation from "components/Navigation/Navigation"
import { Hero } from "components/Hero/Hero"

export const metadata: Metadata = {
  title: "Merchants of Tomorrow",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    url: "https://www.merchantsoftomorrow.com",
    images: [
      {
        width: 1200,
        height: 630,
        url: "https://raw.githubusercontent.com/merchants-of-tomorrow/merchants-of-tomorrow/main/project-logo.png",
      },
    ],
  },
}

export default function App() {
  return (
    <>
      <Navigation />
      <Hero />
    </>
  )
}
