import React, { useEffect, useRef, useState } from "react";
import { useRouter } from 'next/router';
import Link from "next/link";

const menuItems = [
  {
    text: 'Home',
    href: '/',
    asPath: '/home',
  },
  {
    text: 'Past events',
    href: '/event-recaps',
  },
  {
    text: 'For teams',
    href: '/ManyHands-for-Teams',
  },
];

const MenuLink = ({ href, asPath, tabIndex, onClick, children }) => {
  const router = useRouter();

  return (
    (<Link
      href={href}
      className="whitespace-nowrap bg-light-gray rounded-full leading-7 px-4 py-1.5 underline decoration-2 decoration-transparent font-medium hover:decoration-current transition-all"
      tabIndex={tabIndex}
      onClick={onClick}
      aria-current={asPath === router?.asPath || href === router?.asPath}>

      {children}

    </Link>)
  );
};

export const Menu = () => {
  const [open, setOpen] = useState(false);
  const menuElementRef = useRef(null);

  const setMenuSize = () => {
    menuElementRef.current.style.width = '';
    menuElementRef.current.style.height = '';
    const w = `${menuElementRef.current.scrollWidth}px`;
    const h = `${menuElementRef.current.scrollHeight}px`;
    menuElementRef.current.style.width = '0';
    menuElementRef.current.style.height = '0';
    setTimeout(() => {
      menuElementRef.current.style.width = w;
      menuElementRef.current.style.height = h;
    }, 10);
  }

  useEffect(() => {
    if (open) {
      setMenuSize();
    } else {
      menuElementRef.current.style.width = '0';
      menuElementRef.current.style.height = '0';
    }
  }, [open]);

  return (
    <div className="fixed top-0 right-0 tablet:m-4 z-10">
      <div className="relative m-4 rounded-[1.75rem] grid bg-white after:content-[''] after:pointer-events-none after:rounded-[1.75rem] after:absolute after:w-full after:h-full after:border-[3px]">
        <button
          aria-controls="menu"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-labelledby="menu-button-title"
          className="h-14 w-14 transition-colors bg-white hover:bg-light-gray rounded-[1.75rem] justify-self-end grid place-items-center [&_path]:hover:[d:path('M4_4l8_0M4_8h8M4_12l8_0')] [&_path]:aria-expanded:[d:path('M4_4l8_8M8_8h0M4_12l8-8')]"
        >
          <svg width="32" height="32" viewBox="0 0 16 16" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round">
            <title id="menu-button-title">{open ? 'Close menu' : 'Open menu'}</title>
            <path d="M4 5l8 0M4 8h8M4 11l8 0" className="transition-all"></path>
          </svg>
        </button>

        <div
          id="menu"
          ref={menuElementRef}
          aria-hidden={!open}
          className="transition-all duration-300 overflow-hidden"
          style={{ width: 0, height: 0 }}
        >
          <nav className={`justify-end grid gap-3 p-4 transition-all ${open ? 'opacity-100' : 'opacity-0'}`}>
            {menuItems.map((item) => (
              <MenuLink
                key={item.href}
                href={item.href}
                asPath={item.asPath}
                tabIndex={open ? undefined : -1}
                onClick={() => setOpen(false)}
              >
                {item.text}
              </MenuLink>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
