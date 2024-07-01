'use client';
import { useRouter } from 'next/navigation';

const RentalRequestCard = ({ status, time, date, sport, _id, boots, helmet, skiBoard}) => {

    const router = useRouter();
    const handleCardClick = () => {
        router.push(`/rental-requests/information/${_id}`);
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
                <p>Sport: {sport}</p>
                <p>Boots: {boots ? 'Yes' : 'No'}</p>
                <p>Helmet: {helmet ? 'Yes' : 'No'}</p>
                <p>Skiboard: {skiBoard ? 'Yes' : 'No'}</p>               
            </div>
        </button>
    );
};

export default RentalRequestCard;