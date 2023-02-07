import './globals.css'
import { Oxygen } from "@next/font/google"
import { Poppins } from "@next/font/google"

const oxygen = Oxygen({
  weight: [
    '300', // '400'
  ],
  subsets: ["latin"],
  variable: '--font-oxygen',
})

const poppins = Poppins({
  weight: [
    '400', // '200', '700'
  ],
  subsets: ["latin"],
  variable: '--font-poppins',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={`${oxygen.className}`}>
        <h4 className={`${poppins.className}`}>Sign Up/Login</h4>
        {children}
      </body>
    </html>
  )
}
