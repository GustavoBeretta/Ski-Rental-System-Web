'use client';
import { useRouter } from 'next/navigation';

const RentalRequestCard = ({ status, sport, time, date, _id }) => {

    const router = useRouter();
    const handleCardClick = () => {
        window.location.href = `/rental-requests/information?id=${_id}`;
    }

    return (
        <button className="rounded-lg bg-gray-200 max-w-32  md:min-w-48 text-sm sm:text-base" onClick={handleCardClick}>
            <div className="bg-sky-200 rounded-lg p-2">
                <p>Date: {date}</p>
                <p>Time: {time}</p>
            </div>
            <div className="p-2 text-left ">
                <p>{sport}</p>
                <p>{status}</p>
            </div>
        </button>
    );
};

export default RentalRequestCard;