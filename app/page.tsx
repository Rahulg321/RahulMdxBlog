import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section>
      <div className="mb-12">
        <h2 className="mb-8">hey, I am Rahul 👋</h2>
        <div className="">
          <p className="text-muted-foreground">
            I am a frontend developer, optimist, and community builder. I
            currently specialize in building marketing websites for companies.
            With two years of coding experience, I am now a full-time freelancer
            and tester.
          </p>

          <p className="text-muted-foreground">
            I am fine-tuning my freelancing business, sharing more online, and
            leveling up my design skills. I enjoy crafting components and
            experimenting new things.
          </p>
          <p className="text-muted-foreground">
            If you would like to collaborate, feel free to send me an{" "}
            <Link
              href="mailto:rg5353070@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-black dark:text-white"
            >
              email
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
