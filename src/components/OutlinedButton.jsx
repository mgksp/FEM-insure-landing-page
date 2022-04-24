export default function OutlinedButton({ text }) {
  return (
    <div>
      <button className="uppercase text-sm font-bold tracking-[1px] border-2 px-7 py-2 mx-auto block">
        {text}
      </button>
    </div>
  );
}
