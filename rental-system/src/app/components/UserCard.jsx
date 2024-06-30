'use client';
import { useRouter } from 'next/navigation';

const formatName = (fullName) => {
    if (!fullName) {
        return '';
    }
    const nameParts = fullName.trim().split(' ');
    if (nameParts.length === 1) {
        return nameParts[0];
    } else if (nameParts.length > 1) {
        return `${nameParts[0]} ${nameParts[nameParts.length - 1]}`;
    }
    return '';
};

const UserCard = ({ name = '', gender, age, _id }) => {
    const router = useRouter();
    const handleCardClick = () => {
        window.location.href = `/edit-account-employee?id=${_id}`;
    };

    const formattedName = formatName(name);

    return (
        <button className="rounded-lg bg-gray-200" onClick={handleCardClick}>
            <div className="bg-sky-200 rounded-lg p-2">
                <p>{formattedName}</p>
            </div>
            <div className="p-2 text-left">
                <p>{gender}</p>
                <p>{age}</p>
            </div>
        </button>
    );
};

export default UserCard;
