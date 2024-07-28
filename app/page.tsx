import { LinkSite } from "@/components/LinkSite";

export default function Home() {
  return (
    <main className="max-w-xl mx-auto py-10">
      <div className="flex flex-col space-y-3.5">
        <LinkSite href="https://rentry.org/Piracy-BG" text="FMHY" />
        <LinkSite
          href="https://rutracker.org/forum/index.php"
          text="RuTracker"
        />
        <LinkSite href="https://asianc.sh/" text="Asian Streaming" />
        <LinkSite href="https://hianime.to/" text="Anime" />
      </div>
    </main>
  );
}
