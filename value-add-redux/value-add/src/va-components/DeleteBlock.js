import axios from "axios"

const DeleteBlock = ({ documentId}) => {

    const deleteTicket = async () => {
        const response = await axios.delete(`http://localhost:3000/tickets/${documentId}`)
        const success = (response.status === 200)
        if (success) {
            window.location.reload()
        }
    }

    return (
        <div className="delete">
            <div className="delete-icon" onClick={deleteTicket}>X</div>
        </div>
    )
}

export default DeleteBlock