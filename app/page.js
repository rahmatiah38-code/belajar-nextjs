"use client";
import UserCard from "@/components/UserCard"
import Footer from "@/components/Footer"
import { useEffect, useState } from "react"
import Navbar from "@/components/Navbar";


export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Gagal mengambil data");
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        console.log("Data: ", { data })
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    console.log("SEDANG LOADING.....")
    return <p>Loading...</p>;
  }
  if (error) {
    console.log("ERROR....")
    return <p>Error:...</p>;
  }

  return (
    <>
      <main className="min-h-screen bg-gray-100 p-8">
        <div className="mx-auto max-w-6xl">

          <h1 className="mb-6 text-3xl font-bold">
            Users
          </h1>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {users.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </div>

        </div>
      </main>
    </>
  )

}