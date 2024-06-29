const RentalRequestCard = ({status, time, date}) => {

    return (
        <button className="rounded-lg bg-gray-200">
            <div className="bg-sky-200 rounded-lg p-2">
                <p>josef</p>
            </div>
            <div className="p-2 text-left">
                <p>{time}</p>
                <p>{date}</p>
                <p>{status}</p>
            </div>
        </button>
    )
}

export default RentalRequestCard;