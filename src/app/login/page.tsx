import { AuthButtonServer } from "@/components/auth-button-server";
import { BlueSky } from "@/icons/bsky-logo";

export default function Login() {
  return (
    <section className="h-full flex flex-col items-center justify-between">
      <div className="grid min-h-screen place-items-center place-content-center gap-y-6">
        <BlueSky className="size-36" />
        <h1 className="text-5xl font-bold opacity-80">Bluesky</h1>
        <AuthButtonServer />
      </div>
      <footer className="grid">
        <div></div>
        <div className="flex items-center justify-center gap-x-3 text-sky-500 py-6">
          <p>Business</p>
          <p>Blog</p>
          <p>Jobs</p>
        </div>
      </footer>
    </section>
  )
}
