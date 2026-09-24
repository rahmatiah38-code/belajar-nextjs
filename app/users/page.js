"use client";
import UserCard from "@/components/UserCard"
import { useEffect, useState } from "react"


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
        return (
            <main className="flex min-h-screen items-center justify-center bg-gray-100">
                <p className="text-gray-600">
                    Loading users...
                </p>
            </main>
        );
    }
    if (error) {
        console.log("ERROR....")
        return (
            <main className="flex min-h-screen items-center justify-center bg-gray-100">
                <div className="rounded-xl border border-red-200 bg-red-50 p-6 text-center">
                    <h2 className="font-semibold text-red-700">
                        Something went wrong
                    </h2>

                    <p className="mt-2 text-sm text-red-600">
                        {error}
                    </p>
                </div>
            </main>
        );
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