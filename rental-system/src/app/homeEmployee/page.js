import RentalRequestCardEmployee from "../components/RentalRequestCardEmployee";
import NavBar from "../components/NavBar";

const getRequests = async () => {
    try {
        const res = await fetch('http://localhost:3000/api/rental-requests', {
            cache: "no-store"
        });
        if (!res.ok) {
            throw new Error("Failed to fetch the rental requests");
        }
        return res.json();
    } catch (error) {
        console.log("Error loading topics: ", error);
    }
};

const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

export default async function HomeEmployee() {
    const { requests } = await getRequests();

    const sentRequests = requests.filter(r => r.status === "sent");
    const inProgressRequests = requests.filter(r => r.status === "in-progress");
    const returnedRequests = requests.filter(r => r.status === "returned");
    const canceledRequests = requests.filter(r => r.status === "canceled");



    return (
        <div >
            <NavBar showLogOutIcon={true} showUsersIcon={true} />
            <main className="mt-10 flex flex-col items-center justify-between p-4">
                <div className="mb-10">
                    <h1 className="lg:text-4xl text-2xl text-[#8F8E8E]">Rental Requests</h1>
                </div>
                <div className="grid lg:grid-cols-4 grid-cols-2 gap-6 pl-20 pr-6 lg:w-full">
                    <div className="flex flex-col items-center justify-center">
                        <h2 className="text-center text-xl">Sent</h2>
                        {sentRequests.map(r => (
                            <RentalRequestCardEmployee
                                key={r.id}
                                user={r.name}
                                date={formatDate(r.createdAt)}
                                time={formatTime(r.createdAt)}
                                status={r.status}
                                sport={r.sport}
                            />
                        ))}
                    </div>
                    <div className="flex flex-col items-center">
                        <h2 className="text-center text-xl">In Progress</h2>
                        {inProgressRequests.map(r => (
                            <RentalRequestCardEmployee
                                key={r.id}
                                date={formatDate(r.createdAt)}
                                time={formatTime(r.createdAt)}
                                status={r.status}
                                sport={r.sport}
                            />
                        ))}
                    </div>
                    <div className="flex flex-col items-center">
                        <h2 className="text-center text-xl">Returned</h2>
                        {returnedRequests.map(r => (
                            <RentalRequestCardEmployee
                                key={r.id}
                                date={formatDate(r.createdAt)}
                                time={formatTime(r.createdAt)}
                                status={r.status}
                                sport={r.sport}
                            />
                        ))}
                    </div>
                    <div className="flex flex-col items-center ">
                        <h2 className="text-center text-xl">Canceled</h2>
                        {canceledRequests.map(r => (
                            <RentalRequestCardEmployee
                                key={r.id}
                                date={formatDate(r.createdAt)}
                                time={formatTime(r.createdAt)}
                                status={r.status}
                                sport={r.sport}
                            />
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}
