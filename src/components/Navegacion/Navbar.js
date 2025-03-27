import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { map } from "lodash";
import { MenuItems } from "@/api/menu";

const menuCtrl = new MenuItems();

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await menuCtrl.getMenuItems();
        setItems(response.data);
      } catch (error) {
        console.error("Error al obtener el menú:", error);
      }
    })();
  }, []);

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark  py-5">
        <div className="container">
          <Link className="navbar-brand" href="/">
            <img src="/images/logo.png" className="img-fluid" alt="Logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
            <ul className="navbar-nav ms-auto">
              {items &&
                map(items, (item) => (
                  <li key={item.id} className="nav-item">
                    <Link className="nav-link" href={`${item.slug}`}>
                      {item.title}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
