import { useState, useEffect, useContext } from 'react'
import TicketCard from '../va-components/TicketCard'
import aios from 'axios'
import CategoriesContext from '../context'


const Dashboard = () => {
    const [tickets, setTickets] = useState(null)
    const { categories, setCategories } = useContext(CategoriesContext)

    useEffect(async () => {
        const response = await axios.get('http://localhost:8000/tickets')

        const dataObject  = response.data.data

        const keys = Object.keys(dataObject)
        const dataArray = Object.entries(dataObject)
        const arrayFormatted = []
        keys.forEach((key, index) => {
            const dataFormatted = { ...dataArray[index]}
            dataFormatted['documentId'] = key
            arrayFormatted.push(dataFormatted)
        })
        setTickets(arrayFormatted)
    }, [])

    useEffect(() => {
        setCategories([...new Set(tickets?.map(({ category }) => category))])
    }, [tickets])

    const colors = [
        'rgb(255,179,186)',
        'rgb(255,223,186)',
        'rgb(255,255,186)',
        'rgb(186,255,201)',
        'rgb(186,255,255)'
    ]

    const uniqueCategories = [
        ...new Set(tickets?.map(({ category }) => category))
    ]

    return (
        <div className="dashboard">
            <h1>Value-Add Requests</h1>
            <div className="ticket-container">
                {tickets && uniqueCategories?.map((uniqueCategory, categoryIndex) => (
                    <div key={categoryIndex}>
                        <h3>{uniqueCategory}</h3>
                        {tickets.filter(ticket => ticket.category === uniqueCategory)
                            .map((filteredTicket, _index) => (
                                <TicketCard
                                    id={_index}
                                    color={colors[categoryIndex] || colors[0]}
                                    title={filteredTicket.title}
                                />
                            ))
                        }
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Dashboard
