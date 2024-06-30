const RentalRequestCardEmployee = ({ user, status, time, date, sport }) => {

    return (
        <button className="rounded-lg bg-gray-200 m-2 w-full">
            <div className="bg-sky-200 rounded-lg p-2">
                <p>{date} at {time}</p>
            </div>
            <div className="p-2 text-left">
                <p>{user}</p>
                <p>{status}</p>
                <p>{sport}</p>
            </div>
        </button>
    )
}

export default RentalRequestCardEmployee;