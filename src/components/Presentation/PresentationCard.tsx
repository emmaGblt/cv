import GithubInLogo from "@assets/github.svg?react";
import LinkedInLogo from "@assets/linkedin.svg?react";
import me from "@assets/me.jpg";
import { Card, Divider, IconLink, Tag } from "@components/ui";
import { Mail, MapPin, Phone } from "lucide-react";

import { cn } from "@/utils/classes";

import PresentationListItem from "./PresentationListItem";

function PresentationCard() {
  return (
    <Card className="h-fit">
      <div className="flex flex-col items-start xl:items-center">
        <div className="flex items-center gap-x-4 xl:flex-col">
          <img
            src={me}
            className={cn(
              "mx-auto my-auto aspect-square w-20 sm:w-24 md:w-32 xl:mb-6 xl:w-1/2",
              "cartoon:rounded-4xl cartoon:border cartoon:border-transparent",
              "neo:rounded-full neo:border-5 neo:border-white"
            )}
            alt="Une photo de ma chienne Pichu et moi"
          />
          <div className="flex flex-col items-start xl:items-center">
            <h1 className="cartoon-title cartoon:text-shadow-md cartoon:text-shadow-primary neo:font-bold mb-1.5 text-2xl md:mb-3 md:text-4xl xl:text-center">
              Emma Guilbault
            </h1>
            <Tag text="Développeuse full stack" className="hidden sm:block" />
            <Tag text="Dev. full stack" className="block sm:hidden" />
          </div>
        </div>
        <div className="w-full xl:text-center 2xl:w-[90%]">
          <Divider className="my-5 md:my-7" />
          <ul className="flex flex-col gap-x-8 gap-y-6 md:grid md:grid-cols-2 xl:flex xl:flex-col">
            <PresentationListItem
              key="email"
              Icon={Mail}
              title="EMAIL"
              text="emmaguilbault1504@gmail.com"
              className="cartoon:bg-background"
            />
            <PresentationListItem
              key="phone"
              Icon={Phone}
              title="TÉLÉPHONE"
              text="06.11.69.73.57"
              className="cartoon:bg-secondary-2"
            />
            <PresentationListItem
              key="address"
              Icon={MapPin}
              title="ADRESSE"
              text="Normandie, France"
              className="cartoon:bg-secondary-1"
            />
          </ul>
          <Divider className="my-5 md:my-7 xl:hidden" />
          <div className="flex flex-wrap items-center gap-4 xl:mt-12 xl:justify-center">
            <IconLink
              href="https://www.linkedin.com/in/emma-guilbault-078588183/"
              name="LinkedIn"
              Icon={LinkedInLogo}
            />
            <IconLink
              href="https://github.com/emmaGblt"
              name="Github"
              Icon={GithubInLogo}
              className="cartoon:bg-background"
            />
          </div>
        </div>
      </div>
    </Card>
  );
}

export default PresentationCard;
