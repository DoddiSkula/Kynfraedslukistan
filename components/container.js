export default function Container({ children }) {
  return (
    <div className="container mx-auto px-1 sm:px-5 pt-24 max-w-7xl">
      {children}
    </div>
  );
}
