import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

const users = [
    {id: 1, name: "Leanne Graham", email: "Sincere@april.biz"},
    {id: 2, name: "Ervin Howell", email: "Shanna@melissa.tv"},
    {id: 3, name: "Clementine Bauch", email: "Nathan@yesenia.net"},
    {id: 4, name: "Patricia Lebsack", email: "Julianne.OConner@kory.org"}, 
    
];
export async function GET() {
    const { data, error } = await supabase.from("app_users").select("*");
    
      if (error) {
        return Response.json({ error: error.message }, { status: 500 });
      }
    
      return Response.json(data);
    
}

export async function POST(request) {
  const body = await request.json();

  // Validasi ID
  if (body.id === undefined || body.id === null || body.id === "") {
    return NextResponse.json(
      {
        message: "ID wajib diisi"
      },
      {
        status: 400
      }
    );
  }

  // Validasi Name
  if (!body.name || body.name.trim() === "") {
    return NextResponse.json(
      {
        message: "Name wajib diisi"
      },
      {
        status: 400
      }
    );
  }

  // Cek ID sudah digunakan
  const existingUser = users.find(
    (user) => user.id === Number(body.id)
  );

  if (existingUser) {
    return NextResponse.json(
      {
        message: "ID sudah digunakan"
      },
      {
        status: 409
      }
    );
  }

  const newUser = {
    id: Number(body.id),
    name: body.name.trim(),
    email: body.email || ""
  };

  users.push(newUser);

  return NextResponse.json(
    {
      message: "User berhasil ditambahkan",
      data: newUser
    },
    {
      status: 201
    }
  );
}