"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export async function login(formData) {
  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (error) redirect(`/error?message=${encodeURIComponent(error.message)}`);

  revalidatePath("/", "layout");
  redirect("/");
}

export async function signup(formData) {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.signUp({
    email: formData.get("email"),
    password: formData.get("password"),
    options: {
      data: {
        name: formData.get("name"),
      },
    },
  });
  console.log("SIGNUP DATA:", data);
  console.log("SIGNUP ERROR:", error);

  if (error) redirect(`/error?message=${encodeURIComponent(error.message)}`);

  revalidatePath("/", "layout");
  redirect("/");
}
