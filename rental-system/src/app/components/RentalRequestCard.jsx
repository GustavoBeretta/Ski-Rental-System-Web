


const RentalRequestCard = ({status, created}) => {





    return (
    <div className="rounded-lg bg-gray-200">
        <div className="bg-sky-200 rounded-lg p-2">
            <p>josef alguma coisa</p>
        </div>
        <div className="p-2">
            <p>{created}</p>
            <p>09:44</p>
            <p>{status}</p>
        </div>

    </div>
    )
}

export default RentalRequestCard;