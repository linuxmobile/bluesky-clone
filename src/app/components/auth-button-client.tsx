"use client"
import { useRouter } from "next/navigation"
import { GithubLogo } from "@/icons/github-logo"
import { createBrowserClient } from "@supabase/ssr"
import { Session } from "@supabase/supabase-js"

export function AuthButton({ session }: { session: Session | null }) {

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
  const router = useRouter()

  const handleSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: 'http://localhost:3000/auth/callback'
      }
    })
  }

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }

  return (
    <header className="grid gap-y-3 w-full">
      {
        session === null ? (
          <button onClick={handleSignIn} className="flex items-center justify-center bg-blue-500 rounded-full px-6 py-3">
            <GithubLogo className="size-6 opacity-80" />
            Login With Github
          </button>
        ) :
          <button onClick={handleSignOut} className="flex items-center justify-center bg-gray-600 rounded-full px-6 py-3">Log Out</button>
      }
    </header>
  )
}
