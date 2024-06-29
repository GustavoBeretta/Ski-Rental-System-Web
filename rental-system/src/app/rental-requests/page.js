import RentalRequestCard from "../components/RentalRequestCard";
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

export default async function RentalRequestsPage() {
  const { requests } = await getRequests();

  return (
    <div>
      <NavBar showGuestHomeIcon={true}/>
      <main className="mt-20 flex flex-col items-center justify-between">
        <div className="mb-10">
          <h1 className="text-3xl">Rental Requests</h1>
        </div>
        <div className="grid lg:grid-cols-8 gap-8 grid-cols-2 sm:gap-4">
          {requests.map(r => (
            <RentalRequestCard
              key={r.id}
              status={r.status}
              date={formatDate(r.createdAt)}
              time={formatTime(r.createdAt)}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
