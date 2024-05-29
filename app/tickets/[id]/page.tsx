import { notFound } from "next/navigation"
import BackButton from "@/app/components/BackButton"
import DeleteTicketButton from "./DeleteTicketButton"

async function getTicket(id: string) {
  const res = await fetch(`http://localhost:4000/tickets/${id}`, {
    next: {
      revalidate: 60
    }
  })

  if (!res.ok) {
    notFound()
  }

  return res.json()
}

export default async function TicketDetails({ params }: PageProps) {
  const { id } = params;
  const ticket = await getTicket(id);

  return (
    <main>
      <nav>
        <h2>Ticket Details</h2>
        <div className="ml-auto flex gap-2">
          <BackButton />
          <DeleteTicketButton id={id} />
        </div>
      </nav>
      <div className="card">
        <h3>{ticket.title}</h3>
        <small>Created by {ticket.user_email}</small>
        <p>{ticket.body}</p>
        <div className={`pill ${ticket.priority}`}>
          {ticket.priority} priority
        </div>
      </div>
    </main>
  )
}