'use client';
import { useRouter } from 'next/navigation';

const UserCard = ({ name, gender, age, _id}) => {

    
    const router = useRouter();
    const handleCardClick = () => {
        window.location.href = `/edit-account-employee?id=${_id}`;
    }
    return (
        <button className="rounded-lg bg-gray-200" onClick={handleCardClick}>
            <div className="bg-sky-200 rounded-lg p-2">
                <p>{name}</p>
            </div>
            <div className="p-2 text-left">
                <p>{gender}</p>
                <p>{age}</p>
            </div>

        </button>
    )
}

export default UserCard;