'use client'
import { useRouter } from "next/navigation";


export default function DeleteTicketButton({ id }: { id: string}) {
  const router = useRouter();

  const handleDeleteTicket = async (e: React.MouseEvent<HTMLElement>)  => {
    e.preventDefault();

    const res = await fetch(`http://localhost:4000/tickets/${id}`, {
      method: "DELETE",
    })

    if (res.status === 200) {
      router.refresh();
      router.push('/tickets')
    }
  }

  return (
    <button className="button btn-destructive" onClick={handleDeleteTicket}>Delete Ticket</button>
  )
}