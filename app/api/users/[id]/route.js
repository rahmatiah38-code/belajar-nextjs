const users = [
    {id: 1, name: "Leanne Graham", email: "Sincere@april.biz"},
    {id: 2, name: "Ervin Howell", email: "Shanna@melissa.tv"},
    {id: 3, name: "Clementine Bauch", email: "Nathan@yesenia.net"},
    {id: 4, name: "Patricia Lebsack", email: "Julianne.OConner@kory.org"},
];

export async function GET(request, { params }) {
    const { id } = await params;
    const user = users.find((u) => u.id === Number(id));

    if (!user) {
        return Response.json({ error: "User tidak ditemukan" }, { status: 404 });
    }

    return Response.json(user);
}