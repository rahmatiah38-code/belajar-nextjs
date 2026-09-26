"use client";

import { useEffect, useState } from "react";

import UserCard from "@/components/UserCard";
import { useFavorite } from "@/context/FavoriteContext";

export default function UsersPage() {
    const [allUsers, setAllUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    // Fungsi Pengecek Favorite
    const { isFavorite } = useFavorite();

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Gagal mengambil data");
                }

                return response.json();
            })
            .then((data) => {
                setAllUsers(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (error) {
        return (
            <main className="flex min-h-[70vh] items-center justify-center px-6">
                <div className="rounded-2xl border border-destructive/30 bg-destructive/10 p-6 text-center">
                    <h2 className="font-semibold text-destructive">
                        Something went wrong
                    </h2>

                    <p className="mt-2 text-sm text-destructive/80">{error}</p>
                </div>
            </main>
        );
    }

    if (loading) {
        return (
            <main className="flex min-h-[70vh] items-center justify-center px-6">
                <p className="animate-pulse text-muted-foreground">
                    Loading memuat data users dari favorite...
                </p>
            </main>
        );
    }

    // Ambil data yang tercatat sebagai favorite di context
    const favoriteUsers = allUsers.filter((user) => isFavorite(user.id));

    return (
        <section className="relative">
            <div className="bg-grid bg-radial-fade absolute inset-0 -z-10" />

            <div className="mx-auto max-w-6xl px-6 py-20">
                <div className="max-w-2xl">
                    <h1 className="text-4xl font-bold mb-2">My Favorite Users</h1>
                    <p className="text-gray-400 mb-8">Data ini diambil langsung dari FavoriteContext.</p>
                </div>

                <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {favoriteUsers.length > 0 ? (
                        favoriteUsers.map((user) => (
                            <UserCard
                                key={user.id}
                                user={user}
                            />
                        ))
                    ) : (
                        <div className="col-span-full flex flex-col items-center gap-3 py-16 text-center text-muted-foreground">
                            Belum ada pengguna yang Anda tambahkan ke daftar favorit.
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
