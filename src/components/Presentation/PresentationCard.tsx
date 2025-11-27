import GithubInLogo from "@assets/github.svg?react";
import LinkedInLogo from "@assets/linkedin.svg?react";
import me from "@assets/me.jpg";
import { Card, Divider, IconLink,Tag } from "@components/ui";
import { Mail, MapPin, Phone } from "lucide-react";

import { cn } from "@/utils/classes";

import PresentationListItem from "./PresentationListItem";

function PresentationCard() {
  return (
    <Card className="h-fit">
      <div className="flex items-start xl:items-center flex-col">
        <div className="flex xl:flex-col gap-x-4 items-center">
          <img
            src={me}
            className={cn(
              "xl:w-1/2 md:w-32 w-20 sm:w-24 aspect-square xl:mb-6 mx-auto my-auto",
              "cartoon:rounded-4xl cartoon:border cartoon:border-transparent",
              "neo:rounded-full neo:border-5 neo:border-white"
            )}
            alt="Une photo de ma chienne Pichu et moi"
          />
          <div className="flex xl:items-center items-start flex-col">
            <h1 className="mb-1.5 md:mb-3 xl:text-center text-2xl md:text-4xl cartoon-title cartoon:text-shadow-md cartoon:text-shadow-primary neo:font-bold">
              Emma Guilbault
            </h1>
            <Tag text="Développeuse full stack" className="hidden sm:block" />
            <Tag text="Dev. full stack" className="sm:hidden block" />
          </div>
        </div>
        <div className="w-full 2xl:w-[90%] xl:text-center">
          <Divider className="my-5 md:my-7" />
          <ul className="flex flex-col xl:flex xl:flex-col md:grid md:grid-cols-2 gap-x-8 gap-y-6">
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
          <div className="flex items-center gap-4 xl:justify-center xl:mt-12 flex-wrap">
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
