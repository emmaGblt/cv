type TypeProps = { text: string };

function Tag({ text }: TypeProps) {
  return (
    <div className="rounded-xl px-2.5 py-1.5 border-3 inline-block font-semibold text-secondary-3 text-sm shadow bg-secondary-2/30 border-setext-secondary-3">
      {text}
    </div>
  );
}

export default Tag;
