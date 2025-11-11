type TypeProps = { text: string };

function Tag({ text }: TypeProps) {
  return (
    <div className="rounded-lg px-2 py-1 border inline-block text-xs shadow">
      {text}
    </div>
  );
}

export default Tag;
