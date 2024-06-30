'use client';
import { useRouter } from 'next/navigation';

const RentalRequestCard = ({ status, time, date, _id }) => {


    const router = useRouter();
    const handleCardClick = () => {
        window.location.href = `/rental-requests/information?id=${_id}`;
    }

    return (
        <button className="rounded-lg bg-gray-200 min-w-32 md:min-w-48" onClick={handleCardClick}>
            <div className="bg-sky-200 rounded-lg p-2">
                <p>josef</p>
            </div>
            <div className="p-2 text-left">
                <p>{time}</p>
                <p>{date}</p>
                <p>{status}</p>
                <p>{_id}</p>
            </div>
        </button>
    );
};

export default RentalRequestCard;