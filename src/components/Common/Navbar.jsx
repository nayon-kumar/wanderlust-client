"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navlink from "./Navlink";
import { Person, Bars, Xmark } from "@gravity-ui/icons";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { data: session, isPending } = authClient.useSession();

  const user = session?.user;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="fixed w-full sm:w-auto bg-white border-2 sm:top-4 sm:left-4 sm:right-4 z-50 sm:rounded-2xl shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between relative">
          {/* Logo - Left */}
          <div className="flex items-center">
            <Link href="/" onClick={closeMenu}>
              <Image
                width={162}
                height={24}
                src="/assets/Wanderlast-navbar.png"
                alt="Logo"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation - Center (Main Links) */}
          <div className="hidden lg:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
            <Navlink href="/">Home</Navlink>
            <Navlink href="/destinations">Destinations</Navlink>
            <Navlink href="/bookings">My Bookings</Navlink>
            <Navlink href="/admin">Admin</Navlink>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-6">
            {/* Desktop Auth Links */}
            <div className="hidden lg:flex items-center gap-6">
              {user ? (
                <>
                  <Avatar>
                    <Avatar.Image
                      referrerPolicy="no-referrer"
                      alt={user?.name}
                      src={user?.image}
                    />
                    <Avatar.Fallback>{user.name.charAt(0)}</Avatar.Fallback>
                  </Avatar>
                  <Button
                    onClick={async () => await authClient.signOut()}
                    variant="danger"
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Navlink href="/login">Login</Navlink>
                  <Navlink href="/signup">Sign Up</Navlink>
                </>
              )}
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 text-gray-700 hover:text-black focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <Xmark className="w-6 h-6" />
              ) : (
                <Bars className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-6 mb-4 pt-6 border-t border-gray-200">
            <div className="flex flex-col gap-5 text-lg">
              <Navlink href="/" onClick={closeMenu}>
                Home
              </Navlink>
              <Navlink href="/destinations" onClick={closeMenu}>
                Destinations
              </Navlink>
              <Navlink href="/bookings" onClick={closeMenu}>
                My Bookings
              </Navlink>
              <Navlink href="/admin" onClick={closeMenu}>
                Admin
              </Navlink>

              <div className="pt-4 border-t border-gray-300 flex flex-col gap-5">
                <Navlink
                  className="flex items-center gap-2"
                  href="/profile"
                  onClick={closeMenu}
                >
                  <Person className="w-5 h-5" />
                  Profile
                </Navlink>
                {user ? (
                  <>
                    <Link
                      onClick={closeMenu}
                      className="flex items-center justify-center"
                      href="/profile"
                    >
                      <Avatar>
                        <Avatar.Image
                          referrerPolicy="no-referrer"
                          alt={user?.name}
                          src={user?.image}
                        />
                        <Avatar.Fallback>{user.name.charAt(0)}</Avatar.Fallback>
                      </Avatar>
                    </Link>
                    <Button
                      className="w-full"
                      onClick={async () => await authClient.signOut()}
                      variant="danger"
                    >
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <Navlink onClick={closeMenu} href="/login">
                      Login
                    </Navlink>
                    <Navlink onClick={closeMenu} href="/signup">
                      Sign Up
                    </Navlink>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
