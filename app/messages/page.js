import { messages } from "@/lib/db";
import { Button } from "@/components/ui/button";
import { deleteMessage } from "./action";
import DeleteDialog  from "@/components/DeleteDialog";

export default function MessagesPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-3xl font-bold">Pesan Masuk</h1>

      <div className="mt-8 space-y-4">
        {messages.length === 0 ? (
          <p className="text-muted-foreground">
            Belum ada pesan masuk.
          </p>
        ) : (
          messages.map((msg) => (
            <div
              key={msg.id}
              className="rounded-lg border p-4"
            >
              <p className="font-medium">
                {msg.name} — {msg.email}
              </p>

              <p className="mt-1 text-sm text-muted-foreground">
                {msg.message}
              </p>

              <div className="mt-4">
                <DeleteDialog
                  id={msg.id}
                  name={`Pesan dari: ${msg.name}`}
                  action={deleteMessage}
                />
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}