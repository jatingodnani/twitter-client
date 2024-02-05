import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { GoogleOAuthProvider } from '@react-oauth/google';
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <GoogleOAuthProvider clientId='390736091997-egmkig0knb4arhs8napuo13g53vnnv56.apps.googleusercontent.com'>
        {children}
        </GoogleOAuthProvider>
        </body>
    </html>
  )
}
