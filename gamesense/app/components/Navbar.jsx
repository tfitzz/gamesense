import Link from 'next/link'
import Image from 'next/image'
import Logo from './gamesense_logo.png'
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton
} from '@clerk/nextjs'

export default function Navbar() {
  return(
    <nav>
      <Image className="h-auto w-20"
        src= {Logo}
        alt="Revline Logo" 
        placeholder = 'blur'    
      />
      <Link href="/">Home</Link>
      <Link href="/odds">Odds</Link>
      {/* <Link href="/predictor">Predictor</Link> */}
      <Link href="/arbitrage">Arbitrage</Link>
      <UserButton />
    </nav>
  )
}