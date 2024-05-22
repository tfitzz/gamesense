import './globals.css'
import Navbar from './components/Navbar'

import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton
} from '@clerk/nextjs'


function Header() {
  return (
    <header style={{ display: "flex", justifyContent: "space-between", padding: 20 }}>
      <SignedIn>
        {/* Mount the UserButton component */}
        <UserButton />
        <Navbar />
        
      </SignedIn>
      <SignedOut>
        
        {/* Signed out users get sign in button */}
        <SignInButton/>
      </SignedOut>
    </header>
  );
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <link rel="icon" href="icon_path" type="gamesense_logo.png"></link>
      <ClerkProvider>
        <Header />
       {/* <Navbar /> */}
        {children}
      </ClerkProvider>
    </html>
  );
}
