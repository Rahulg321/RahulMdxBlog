import { getMusings } from "../musings/utils";
import { MusingCard } from "@/components/MusingCard";

export const metadata = {
  title: "Musings",
  description: "My daily thoughts and one-liners.",
};

export default function MusingsPage() {
  let musings = getMusings();

  return (
    <section className="narrow-container block-space min-h-screen">
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Musings
      </h1>
      <div className="flex flex-col gap-4">
        {musings.map((musing) => (
          <MusingCard
            key={musing.metadata.date} // Using date as key, assuming unique dates for simplicity
            content={musing.content}
            date={musing.metadata.date}
          />
        ))}
      </div>
    </section>
  );
}
