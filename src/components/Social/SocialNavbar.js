import { Social } from "@/api/socials";
import { useState, useEffect } from 'react';
import Link from "next/link";

export default function SocialNavbar() {
  const [socialLinks, setSocialLinks] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const social = new Social();

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await social.social_links();
        setSocialLinks(data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    }

    fetchData();
  }, []);
  

  if (error) {
    return <p>Error al cargar los enlaces sociales: {error.message}</p>;
  }

  if (!socialLinks) {
    return null; // O algún otro mensaje si no hay datos
  }

  return (
    <div className="social-container container-xl">
      <h4>Síguenos :</h4>
      <div className="social-bar">
        {socialLinks.data.map((link) => (
          <Link href={link.url} target="_blank" rel="noopener noreferrer" className="social-bar_icon">
            <img src={`http://localhost:1337${link.icon.url}`}></img>
          </Link>
        ))}
      </div>
    </div>
  );
}