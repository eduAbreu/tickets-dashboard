interface Ticket {
  id: string,
  title: string,
  body: string,
  priority: string
  user_email: string
}

type PageProps = {
  params: { id: string },
  searchParams?: { [key: string]: string | string[] | undefined };
}