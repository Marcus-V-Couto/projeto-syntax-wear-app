import iconInstagram from "@/assets/img/icon-instagram.png";
import iconWhatsapp from "@/assets/img/icon-whatsapp.png";
import iconTikTok from "@/assets/img/icon-tiktok.png";
import iconFacebook from "@/assets/img/icon-facebook.png";
import iconX from "@/assets/img/icon-x.png";
import iconYoutube from "@/assets/img/icon-youtube.png";
import iconLinkedin from "@/assets/img/icon-linkedin.png";
import iconPinterest from "@/assets/img/icon-pinterest.png";

const socialMedias = [
  {
    id: 1,
    name: "Instagram",
    href: "#",
    icon: iconInstagram,
    target: "_blank",
    rel: "noopener noreferrer",
    alt: "Instagram",
  },
  {
    id: 2,
    name: "WhatsApp",
    href: "#",
    icon: iconWhatsapp,
    target: "_blank",
    rel: "noopener noreferrer",
    alt: "WhatsApp",
  },
  {
    id: 3,
    name: "TikTok",
    href: "#",
    icon: iconTikTok,
    target: "_blank",
    rel: "noopener noreferrer",
    alt: "TikTok",
  },
  {
    id: 4,
    name: "Facebook",
    href: "#",
    icon: iconFacebook,
    target: "_blank",
    rel: "noopener noreferrer",
    alt: "Facebook",
  },
  {
    id: 5,
    name: "X",
    href: "#",
    icon: iconX,
    target: "_blank",
    rel: "noopener noreferrer",
    alt: "X",
  },
  {
    id: 6,
    name: "Youtube",
    href: "#",
    icon: iconYoutube,
    target: "_blank",
    rel: "noopener noreferrer",
    alt: "Youtube",
  },
  {
    id: 7,
    name: "Linkedin",
    href: "#",
    icon: iconLinkedin,
    target: "_blank",
    rel: "noopener noreferrer",
    alt: "Linkedin",
  },
  {
    id: 8,
    name: "Pinterest",
    href: "#",
    icon: iconPinterest,
    target: "_blank",
    rel: "noopener noreferrer",
    alt: "Pinterest",
  }
];

export const SocialMediaLinks = () => {
  return (
    <div className="flex flex-col items-center">
      <p className="mb-4 text-x1 font-medium text-surface-alt">Redes Sociais</p>
      <ul className="flex gap-2.5">
        {socialMedias.map((socialMedia) => (
          <li key={socialMedia.id}>
            <a
              href={socialMedia.href}
              aria-label={socialMedia.name}
              target={socialMedia.target}
              rel={socialMedia.rel}
            >
              <img src={socialMedia.icon} alt={socialMedia.alt} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
