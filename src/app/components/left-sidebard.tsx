import { BlueSky } from "@/icons/bsky-logo";
import { AuthButtonServer } from "./auth-button-server";

export function LeftSidebar() {
  return (
    <aside className="span-col-1 w-full h-full flex flex-col items-start justify-center gap-y-2 max-w-xs">
      <BlueSky className="size-16 bg-gray-600/30 rounded-full p-2" />
      <AuthButtonServer />
      <section className="w-full flex flex-col *:font-semibold *:text-lg *:py-4 *:px-3 *:w-full *:rounded-md hover:*:bg-gray-400/20 *:cursor-pointer">
        <div><p>Home</p></div>
        <div><p>Search</p></div>
        <div><p>Feeds</p></div>
        <div><p>Notifications</p></div>
        <div><p>Lists</p></div>
        <div><p>Moderation</p></div>
        <div><p>Profile</p></div>
        <div><p>Settings</p></div>
      </section>
      <div><p>New Posts</p></div>
    </aside>
  )
}
