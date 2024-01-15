import { createServerClient } from "@supabase/ssr"
import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"

export function ComposePost({ userAvatarUrl }: {
  userAvatarUrl: string
}) {
  const addPost = async (formData: FormData) => {
    'use server'
    const cookieStore = cookies()

    const content = formData.get('content')
    if (content === null) return

    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          get(name: string) {
            return cookieStore.get(name)?.value
          },
        }
      }
    )

    const { data: { user } } = await supabase.auth.getUser()
    if (user === null) return

    await supabase.from('posts').insert({ content, user_id: user.id })
    revalidatePath('/')

  }

  return (
    <form action={addPost} className="w-full flex flex-col items-start justify-center border border-gray-500/40 rounded-lg px-4 py-3 gap-y-3 my-3">
      <div className="w-full flex items-center justify-between border-b py-3 border-gray-500/40">
        <button type="submit">Cancel</button>
        <button type="submit" className="rounded-full px-4 py-1 bg-sky-600">Post</button>
      </div>
      <div className="flex items-start justify-center w-full gap-x-3">
        <img src={userAvatarUrl} className="rounded-full size-16" alt="User Avatar" />
        <textarea name="content" rows={4} placeholder="What's up?" className="bg-transparent w-full outline-0" />
      </div>
    </form>
  )
}
