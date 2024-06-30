'use client';
import { useRouter } from 'next/navigation';

const RentalRequestCardEmployee = ({ name, status, time, date, sport, _id}) => {

    const router = useRouter();
    const handleCardClick = () => {
        window.location.href = `/rental-requests-employee/information?id=${_id}`;
    }

    return (
        <button className="rounded-lg bg-gray-200 m-2 w-full" onClick={handleCardClick}>
            <div className="bg-sky-200 rounded-lg p-2">
                <p>{date} at {time}</p>
            </div>
            <div className="p-2 text-left">
                <p className="uppercase">{name}</p>
                <p>{status}</p>
                <p>{sport}</p>
            </div>
        </button>
    )
}

export default RentalRequestCardEmployee;