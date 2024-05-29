import { Suspense } from "react"
import TicketList from "./TicketList"
import Loading from "../loading"
import Link from "next/link"

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Tickets',
}

export default function Tickets() {
  return (
    <main>
      <nav>
        <div>
          <h2>Tickets</h2>
          <p><small>Currently open tickets.</small></p>
        </div>
        <Link href="/tickets/create" className="button btn-primary ml-auto">
          New Ticket
        </Link>
      </nav>
      <Suspense fallback={<Loading />}>
        <TicketList />
      </Suspense>
    </main>
  )
}