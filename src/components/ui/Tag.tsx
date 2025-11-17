type TypeProps = { text: string };

function Tag({ text }: TypeProps) {
  return (
    <div className="px-2.5 py-1.5 border-3 rounded-xl inline-block font-semibold shadow-xs text-primary text-sm bg-light">
      {text}
    </div>
  );
}

export default Tag;
