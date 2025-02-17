"use client";
import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavbarComponent() {
  const pathname = usePathname(); // Get the current route

  const getLinkClass = (path) =>
    pathname === path
      ? "text-white font-semibold scale-110 transition-transform duration-300"
      : "text-gray-300 hover:text-white hover:scale-110 transition-transform duration-300";

  return (
    <Navbar fluid className="dark">
      <Link href="/">
        <img src="shortw.png" className="mr-3 h-6 sm:h-9" alt="Logo" />
      </Link>
      <div className="flex md:order-2">
        {/* <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle /> */}
        <Button color="blue" pill className="mr-3" >
          Login
        </Button>
        {/* <Button color="green" pill >
          Signup
        </Button> */}
      </div>
      <Navbar.Collapse className="relative left-10 md:left-0">
        <Link href="/" className={getLinkClass("/")}>
          Home
        </Link>
        <Link href="#about" className={getLinkClass("/about")}>
          About
        </Link>
        <Link href="/product" className={getLinkClass("/product")}>
          Product
        </Link>
        <Link href="/pricing" className={getLinkClass("/pricing")}>
          Pricing
        </Link>
        <Link href="/contact" className={getLinkClass("/contact")}>
          Contact
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
