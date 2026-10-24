const Navs = () => {
  const NavLinks = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About Us",
      href: "/about",
    },
    {
      title: "Services",
      href: "/services",
    },
    {
      title: "How It Works",
      href: "/how-it-works",
    },
  ];

  return (
    <div>
      <ul className="flex flex-row">
        {NavLinks.map((nav) => (
          <li
            key={nav.title}
            className="px-5 py-2 hover:font-bold hover:text-royal hover:border-b-royal hover:border-b-2"
          >
            <a href={nav.href}>{nav.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navs;
