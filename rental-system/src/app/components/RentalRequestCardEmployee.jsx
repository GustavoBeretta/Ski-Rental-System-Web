'use client';
import { useRouter } from 'next/navigation';

const RentalRequestCardEmployee = ({ name, time, date, sport, _id, boots, helmet, skiBoard}) => {

    const router = useRouter();
    const handleCardClick = () => {
        router.push(`/rental-requests-employee/information/${_id}`);
    }
    console.log(boots)
    return (
        <button className="rounded-lg bg-gray-200 m-2 w-full" onClick={handleCardClick}>
            <div className="bg-sky-200 rounded-lg p-2">
                <p className="uppercase">{name}</p>
            </div>
            <div className="p-2 text-left">
            <p className="uppercase"></p>
            <p>Made at: {date}, {time}</p> 
            <p>Sport: {sport}</p>
            <p>Boots: {boots ? 'Yes' : 'No'}</p>
            <p>Helmet: {helmet ? 'Yes' : 'No'}</p>
            <p>Skiboard: {skiBoard ? 'Yes' : 'No'}</p>
            </div>
        </button>
    )
}

export default RentalRequestCardEmployee;