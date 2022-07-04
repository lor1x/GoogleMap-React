export default function LocationPin({ text, active }) {
  return (
    <div className="flex flex-col">
      <div class="flex flex-col justify-center items-center content-center">
        <p
          className={`text-center px-6 py-2 rounded-2xl text-white ${
            active ? " bg-red-600 " : " bg-blue-600 "
          }`}
        >
          {text}
        </p>
        <div
          className={`h-4 w-4 -rotate-45 transform origin-top-left ${
            active ? " bg-red-600 " : " bg-blue-600 "
          }`}
        />
      </div>
    </div>
  );
}
