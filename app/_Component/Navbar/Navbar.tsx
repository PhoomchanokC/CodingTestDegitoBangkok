"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import "./navbar.css";
import HomeIcon from '../icon/home.js';
import SearchIcon from '../icon/searchIcon.js';
import TripIcon from '../icon/tripIcon.js';
import ProfileIcon from '../icon/profileIcon.js';

type Props = {};

const Navbar = (props: Props) => {
  const [selectedMenu, setSelectedMenu] = useState("Explore");

  const handleSelect = (menu: string) => {
    setSelectedMenu(menu);
  };

  return (
    <div className='main'>
      <div className='space'>
        <div className='sub'>
          <Link href={"/Home"} onClick={() => handleSelect("Home")}>
            <div className={`${selectedMenu === "Home" ? 'active-circle circle' : ''}`}>
              <div className='icon-center'>
                <div className='fix'>
                <HomeIcon />
                </div>
              </div>
              Home
            </div>

          </Link>
        </div>
        <div className='sub'>
          <Link href={"/Explore"} onClick={() => handleSelect("Explore")}>
            <div className={`${selectedMenu === "Explore" ? 'active-circle circle' : ''}`}>
              <div className='icon-center'>
                <div className='fix'>
                <SearchIcon />
                </div>
              </div>
              Explore
            </div>
          </Link>
        </div>
        <div className='sub'>
          <Link href={"/Trip"} onClick={() => handleSelect("Trip")}>
          <div className={`${selectedMenu === "Trip" ? 'active-circle circle' : ''}`}>
              <div className='icon-center'>
                <div className='fix'>
                <TripIcon />
                </div>
              </div>
              <div className='text-navbar-center'>Trip</div>
            </div>
          </Link>
        </div>
        <div className='sub'>
          <Link href={"/Profile"} onClick={() => handleSelect("Profile")}>
          <div className={`${selectedMenu === "Profile" ? 'active-circle circle' : ''}`}>
              <div className='icon-center'>
                <div className='fix'>
                <ProfileIcon />
                </div>
              </div>
              <div className='text-navbar-center'>Profile</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
