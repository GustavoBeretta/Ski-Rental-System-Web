import RentalRequestCard from "../components/RentalRequestCard";

const getRequests = async() => {
  try {
      const res = await fetch('http://localhost:3000/api/rental-requests', {
       cache: "no-store"});
      if(!res.ok) {
          throw new Error("Failed to fetch the rental requests")
      }

      return res.json();
  }catch (error) {
      console.log("Error loading topics: ", error)
  }
}


export default async function RentalRequestsPage() {
  const { requests } = await getRequests();


    return (
      <main className="mt-20 flex flex-col items-center justify-between">
          <div className="mb-10">
            <h1 className="text-3xl">Rental Requests</h1>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {requests.map(r => (
            <RentalRequestCard status={r.status} created={r.createdAt} />
          ))}
          </div>
      </main>
    );
  }