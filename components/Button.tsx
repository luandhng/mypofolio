interface ButtonProps {
  text: string;
}

export const Button = ({ text }: ButtonProps) => {
  return (
    <button className="bg-violet-400 shadow-lg text-violet-950 py-3.5 px-7 rounded-full font-bold border border-white/5">
      {text}
    </button>
  );
};
