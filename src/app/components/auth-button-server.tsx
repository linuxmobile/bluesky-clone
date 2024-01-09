import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { AuthButton } from "./auth-button-client";

export async function AuthButtonServer() {
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

  return <AuthButton session={session} />
}
