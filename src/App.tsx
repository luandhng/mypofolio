import "./App.css";
import { Category } from "./components/Category";
import { Link } from "./components/Link";
import { Data } from "./data/data";

function App() {
  return (
    <>
      <div className="flex flex-col max-w-xl mx-auto lg:py-10 gap-3 max-lg:p-4">
        {Data.map((item) => (
          <Category key={item.title} text={item.title}>
            {item.content.map((child) => (
              <Link key={child.text} text={child.text} href={child.link} />
            ))}
          </Category>
        ))}

        {/* <p className="bg-neutral-800 p-2">Watch</p>
        <Link text="FMHY" href="https://rentry.org/Piracy-BG" />
        <Link text="RuTracker" href="https://rutracker.org/forum/index.php" />
        <Link text="Steamrip" href="https://steamrip.com/" />
        <Link text="Anime" href="https://hianime.to/home" />
        <Link text="Manga" href="https://mangareader.to/home" />
        <Link text="Asian" href="https://asianc.sh/" />

        <p className="bg-neutral-800 p-2">X</p>
        <Link
          text="Smoking Korean"
          href="https://www.91porn.com/view_video.php?viewkey=5b024127dc762223b545&page=1&c=mcztl&viewtype=basic&category=mr"
        />
        <Link
          text="Black"
          href="https://91porn.com/view_video.php?viewkey=1965497570&page=35&c=wbp47&viewtype=basic&category=mf"
        />
        <Link
          text="Two"
          href="https://91porn.com/view_video.php?viewkey=2995442c58b8525ed5f4&page=15&c=me3oe&viewtype=basic&category=mf"
        /> */}
      </div>
    </>
  );
}

export default App;
