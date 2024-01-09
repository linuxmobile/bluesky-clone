import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"
import { BlueSky } from "./icons/bsky-logo"
import { AuthButtonServer } from "./components/auth-button-server"

export default async function Home() {
  const cookieStore = cookies()
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        }
      }
    }
  )
  const { data: posts } = await supabase.from("posts").select("*")
  return (
    <main className="grid min-h-screen place-items-center place-content-center gap-y-6">
      <BlueSky className="size-36" />
      <h1 className="text-5xl font-bold opacity-80">Bluesky</h1>
      <AuthButtonServer />
      <pre>
        { 
          JSON.stringify(posts, null, 2)
        }
      </pre>
    </main>
  )
}
