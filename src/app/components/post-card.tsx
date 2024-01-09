export default function PostCard({
  userFullName,
  userName,
  avatarUrl,
  content }: {
    userFullName: string
    userName: string
    avatarUrl: string
    content: string
  }) {
  return (
    <article className="w-full flex items-start justify-start gap-x-6">
      <img src={avatarUrl} className="size-12 rounded-full" />
      <section>
        <header className="flex items-center justify-start gap-y-3">
          <div>
            <p className="font-bold">{userFullName} <span className="font-light opacity-70">@{userName}</span></p>
          </div>
        </header>
        <p>{content}</p>
        <footer></footer>
      </section>
    </article>
  )
}

