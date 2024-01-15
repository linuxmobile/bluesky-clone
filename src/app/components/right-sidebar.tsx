export function RightSidebar() {
  return (
    <aside className="span-col-1 h-full flex flex-col items-start justify-start gap-y-6">
      <form className="py-3">
       <input type="search" name="search" placeholder="Search" className="bg-gray-500/30 rounded-full px-4 py-2 text-white/30"/>
      </form>
      <section className="flex flex-col gap-y-2 border-y border-gray-200/30 w-full py-6 *:text-gray-400 hover:*:underline *:cursor-pointer">
        <p className="font-semibold !text-white/80">Following</p>
        <p>Discover</p>
        <p>Popular With Friends</p>
        <p className="!text-sky-600">More Feeds</p>
      </section>
      <section className="flex gap-x-2 border-b border-gray-200/30 w-full pb-6 *:text-sky-600 hover:*:underline *:cursor-pointer">
        <p>Feedback ·</p>
        <p>Privacy ·</p>
        <p>Terms ·</p>
        <p>Help</p>
      </section>
      <span className="font-semibold text-sky-600 hover:underline cursor-pointer">5 invites codes available</span>
    </aside>
  )
}
