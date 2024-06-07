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
    <nav className="w-full">
      <div className="container mx-auto p-4 flex items-center justify-between">
        <Image
          className="h-auto w-20"
          src={Logo}
          alt="Revline Logo"
          placeholder="blur"
        />
        <div className="flex space-x-4">
          <Link href="/">Home</Link>
          <Link href="/odds">Odds</Link>
          {/* <Link href="/predictor">Predictor</Link> */}
          <Link href="/arbitrage">Arbitrage</Link>
          <Link href="/analytics">Analytics</Link>
          <Link href="/blockchain">Blockchain</Link>
        </div>
        <UserButton
            appearance={{
              elements: {
                userButtonAvatarBox: "h-12 w-12", // Adjust size of avatar box
                userButton: "p-4", // Add padding to user button
                userButtonAvatar: "text-lg", // Adjust text size if applicable
              },
            }}
          />
      </div>
</nav>
  )
}