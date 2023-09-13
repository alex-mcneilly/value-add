import { Link } from "react-router-dom"
import Avatar from "./Avatar"
import Status from "./Status"
import Priority from "./Priority"
import Progress from "./Progress"
import DeleteBlock from "./DeleteBlock"


const TicketCard = ({ color, ticket }) => {
    return (
        <div className="ticket-card">
            
            <Link to={`/ticket/${ticket.documentId}`} id="link">
                <div className="ticket-color" style={{backgroundColor: color}}></div>
                <h3>{ticket.title}</h3>
                <Avatar ticket={ticket} />
                <Status status={ticket.status}/>
                <Priority priority={ticket.priority}/> 
                <Progress progess={ticket.progess}/>
            </Link>
            <DeleteBlock documentId={ticket.documentId}/>
        </div>
    )
}

export default TicketCard