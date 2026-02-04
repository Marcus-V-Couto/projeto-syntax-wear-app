import { Copyright } from "../Copyright";
import { SubscriptionForm } from "../SubscriptionForm";
import { SocialMediaLinks } from "../SocialMediaLinks";
import { MenuItems } from "../MenuItems";

export const Footer = () => {
  return (
    <footer className="bg-footer-bg">
      <div className="container">
        <div className="flex flex-col lg:flex-row justify-between py-10 px-2 gap-2">
          <div className="flex flex-col gap-8 px-4 min-w-[344px]">
            <SubscriptionForm />
            <SocialMediaLinks />
          </div>
          <MenuItems />
        </div>
        <Copyright />
      </div>
    </footer>
  );
};
