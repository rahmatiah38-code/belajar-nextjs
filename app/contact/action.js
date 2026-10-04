"use server";

import { messages } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function submitContactForm(formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  if (!name || !email || !message) {
    return { success: false, error: "Semua field wajib diisi." };
  }
  const newId =
    messages.length === 0
      ? 1
      : Math.max(...messages.map((message) => message.id)) + 1;

  messages.push({
    id: newId,
    name,
    email,
    message,
    createdAt: new Date().toISOString(),
  });

  revalidatePath("/messages");

  return { success: true };
}