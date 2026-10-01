"use server";

import { messages } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function deleteMessage(formData) {
  const id = formData.get("id");

  if (!id) {
    return {
      success: false,
      error: "ID message tidak ditemukan",
    };
  }

  const messageId = Number(id);

  const index = messages.findIndex(
    (message) => message.id === messageId
  );

  if (index === -1) {
    return {
      success: false,
      error: "Message tidak ditemukan",
    };
  }

  messages.splice(index, 1);

  revalidatePath("/messages");

  return {
    success: true,
  };
}