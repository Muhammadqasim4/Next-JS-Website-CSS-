
import React, { ReactNode } from 'react';
import Link from 'next/link';


interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="layoutContainer">
      <header className="header">
        <nav className="nav">
          <h1 className="logo">MyBank</h1>
          <div className=".navLinks">
            <Link href="/" className="link">Home</Link>
            <Link href="/about" className="link">About</Link>
            <Link href="/services" className="link">Services</Link>
            <Link href="/contact" className="link">Contact</Link>
            <Link href="/login" className="link">Login</Link>
          </div>
          
      


        </nav>
      </header>
      <main className="main">{children}</main>
      <footer className="footer">
        &copy; 2024 MyBank. All rights reserved.
      </footer>
    </div>
  );
}
