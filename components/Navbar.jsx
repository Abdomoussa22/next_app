import Link from 'next/link'
import React from 'react'
import { useRouter } from "next/router";
const Navbar = () => {
  const router = useRouter();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
      <a className="navbar-brand" href="#">Navbar</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className={
                    "nav-link " + `${router.pathname === "/" ? "active" : ""}`
                  } aria-current="page" href="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className={
                    "nav-link " + `${router.pathname === "/about" ? "active" : ""}`
                  } href="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className={
                    "nav-link " + `${router.pathname === "/blog" ? "active" : ""}`
                  } href="/blog">Blog</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar