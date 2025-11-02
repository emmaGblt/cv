type DividerProps = { className?: string };

function Divider({ className }: DividerProps) {
  return <hr className={className} />;
}

export default Divider;
