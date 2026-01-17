import IconBluesky from "../ui/icons/icon-bluesky";
import IconInstagram from "../ui/icons/icon-instagram";
import IconTiktok from "../ui/icons/icon-tiktok";

function Footer() {
  return (
    <div className="flex flex-col gap-6 px-4 pt-8 pb-5 text-center md:flex-row-reverse md:items-center md:justify-between md:px-8 md:py-10 lg:mx-auto lg:max-w-314">
      <div className="flex items-center justify-center gap-6">
        <IconInstagram />
        <IconBluesky />
        <IconTiktok />
      </div>
      <p className="text-preset-9 text-neutral-900">Made with ❤️ and 🥑</p>
    </div>
  );
}

export default Footer;
