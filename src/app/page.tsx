import { redirect } from "next/navigation"
import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"
import PostCard from "./components/post-card"
import { LeftSidebar } from "./components/left-sidebard"
import { RightSidebar } from "./components/right-sidebar"

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

  const { data: { session } } = await supabase.auth.getSession()

  if (session === null) {
    redirect("/login")
  }

  const { data: posts } = await supabase.from("posts").select("*, user:users(name, avatar_url, user_name)")

  return (
    <main className="grid grid-cols-4 grid-flow-row auto-rows-max place-items-center place-content-start gap-y-6 gap-x-8 pt-3 max-w-6xl mx-auto">
      <LeftSidebar />
      <main className="col-span-2 w-full h-full gap-y-3">
        {
          posts?.map(post => {
            const { id, user, content } = post
            const { user_name: userName, name: userFullName, avatar_url: avatarUrl } = user
            return <PostCard key={id}
              userName={userName}
              userFullName={userFullName}
              avatarUrl={avatarUrl}
              content={content}
            />
          })
        }
      </main>
      <RightSidebar />
    </main>
  )
}
