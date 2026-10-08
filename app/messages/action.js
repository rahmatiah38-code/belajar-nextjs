"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

export async function deleteMessage(formData) {
  const supabase = await createClient();
  const id = formData.get("id");
  console.log("Id yang akan dihapus: ",id)

  if (!id) {
    return {
      success: false,
      error: "ID message tidak ditemukan",
    };
  }

  const { error } = await supabase
    .from("messages")
    .delete()
    .eq("id", id);

  if (error) {
    return {
      success: false,
      error: error.message,
    };
  }

  revalidatePath("/messages");

  return {
    success: true,
  };
}