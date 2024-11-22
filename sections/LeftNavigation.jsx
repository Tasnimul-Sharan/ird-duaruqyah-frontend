import Image from "next/image";

const navItems = [
  { src: "/left_Home.png", alt: "Home", id: 1 },
  { src: "/left_All_Duas.png", alt: "All Duas", id: 2 },
  { src: "/left_Memorize.png", alt: "Memorize", id: 3 },
  { src: "/left_Bookmark.png", alt: "Bookmark", id: 4 },
  { src: "/left_Ruqyah.png", alt: "Ruqyah", id: 5 },
  { src: "/left_Dua_Q&A.png", alt: "Dua Q&A", id: 6 },
  { src: "/left_Book.png", alt: "Book", id: 7 },
];

const LeftNavigation = () => {
  return (
    <div className="flex flex-col bg-white w-full h-[90vh] justify-between items-center p-4 rounded-2xl shadow-md">
      <div className="mb-32">
        <Image src="/logo.png" alt="Logo" width={73} height={73} />
      </div>

      <div>
        <ul className="flex flex-col gap-5">
          {navItems.map((item) => (
            <li
              key={item.id}
              className="group cursor-pointer"
            >
              <Image src={item.src} alt={item.alt} width={38} height={38} />
              <span className="sr-only">{item.alt}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="cursor-pointer">
        <Image src="/donate.png" alt="Donate" width={57} height={56} />
      </div>
    </div>
  );
};

export default LeftNavigation;
