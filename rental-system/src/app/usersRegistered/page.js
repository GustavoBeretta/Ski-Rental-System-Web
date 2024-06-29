import UserCard from "../components/UserCard";
import NavBar from "../components/NavBar";

const getUsers = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/users', {
      cache: "no-store"
    });
    if (!res.ok) {
      throw new Error("Failed to fetch users");
    }
    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};

export default async function UsersRegistered() {
  const { users } = await getUsers();

  return (
    <div>
      <NavBar showEmployeeHomeIcon={true}/>
      <main className="flex flex-col items-center justify-between lg:mt-20 p-4">
        <div className="mb-20 mt-0">
          <h1 className="text-5xl text-[#8F8E8E]">Users Registered</h1>
        </div>
        <div className="grid lg:grid-cols-5 gap-5 grid-cols-2 sm:gap-4">
          {users.map(r => (
            <UserCard
            name={r.name}
            gender={r.gender}
            age={r.age}
            _id={r._id}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
