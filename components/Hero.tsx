import { Button } from "./Button";
import { Logo } from "./Logo";
import { Slogan } from "./Slogan";

export const Hero = () => {
  return (
    <section className="flex flex-col items-center max-w-4xl mx-auto my-14 gap-9">
      <Logo />
      <Slogan />
      <Button text={"Try for free"} />
    </section>
  );
};
