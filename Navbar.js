export default function Navbar() {
  return (
    <header className="p-6 flex justify-between items-center shadow-lg bg-green-950/90">
      <h1 className="text-xl font-bold tracking-wide">TNRAT India</h1>
      <nav className="space-x-4 hidden md:flex">
        <a href="/" className="hover:text-green-400">Home</a>
        <a href="/about" className="hover:text-green-400">About</a>
        <a href="/events" className="hover:text-green-400">Events</a>
        <a href="/gallery" className="hover:text-green-400">Gallery</a>
        <a href="/news" className="hover:text-green-400">News</a>
        <a href="/blog" className="hover:text-green-400">Blog</a>
        <a href="/contact" className="hover:text-green-400">Contact</a>
        <a href="/donate" className="hover:text-green-400 font-semibold">Donate</a>
      </nav>
    </header>
  );
}