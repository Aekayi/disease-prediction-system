import React from "react";

export default function Footer() {
  return (
    <div className="grid grid-cols-3 space-x-4 bg-[#05445E]  justify-items-center p-4">
      <div className="space-y-2">
        <h3 className="text-white text-xl">Contact Info</h3>
        <ul className="text-white text-justify">
          <li>Address</li>
          <li>Phone</li>
          <li>Email</li>
        </ul>
      </div>
      <div className="space-y-2">
        <h3 className="text-white text-xl">Quick Links</h3>
        <ul className="text-white">
          <li>Home</li>
          <li>About</li>
          <li>Doctors</li>
          <li>Register</li>
          <li>Login</li>
        </ul>
      </div>
      <div className="space-y-2">
        <h3 className="text-white text-xl">Social Media</h3>
        <ul className="text-white">
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Instagram</li>
        </ul>
      </div>
    </div>
  );
}
