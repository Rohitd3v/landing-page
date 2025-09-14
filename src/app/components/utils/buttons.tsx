type ButtonProps = {
  children: React.ReactNode;
};

export function Button({ children }: ButtonProps) {
  return (
    <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded-lg transition">
      {children}
    </button>
  );
}

export function Button2({ children }: ButtonProps) {
  return (
    <button className="bg-white hover:bg-gray-100 text-gray-700 border border-gray-300 font-semibold py-2 px-6 rounded-lg transition">
      {children}
    </button>
  );
}

export function Button3({ children }: ButtonProps) {
  return (
    <button className="bg-transparent hover:bg-gray-100 text-gray-700 border border-black font-semibold py-2 px-6 rounded-2xl transition">
      {children}
    </button>
  );
}

export function Button4({ children }: ButtonProps) {
  return (
    <button className="bg-black hover:bg-gray-100 text-white hover:text-black border border-black font-semibold py-2 px-6 rounded-2xl transition">
      {children}
    </button>
  );
}
