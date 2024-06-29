const RentalRequestCard = ({status, time, date, name, sport}) => {

    return (
        <button className="rounded-lg bg-gray-200">
            <div className="bg-sky-200 rounded-lg p-2">
                <p>{date} as {time}</p>
            </div>
            <div className="p-2 text-left">
                <p>{status}</p>
                <p>{name}</p>
                <p>{sport}</p>
            </div>
        </button>
    )
}

export default RentalRequestCard;