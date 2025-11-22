import Card from "@components/ui/Card";
import me from "@assets/me.jpg";
import Tag from "@components/ui/Tag";
import Divider from "@components/ui/Divider";
import PresentationListItem from "./PresentationListItem";
import { Mail, MapPin, Phone } from "lucide-react";
import LinkedInLogo from "@assets/linkedin.svg?react";
import { cn } from "@/utils/classes";

function PresentationCard() {
  return (
    <Card className="h-fit">
      <div className="flex items-center flex-col">
        <img
          src={me}
          className={cn(
            "w-1/2 aspect-square mb-6 mx-auto",
            "cartoon:rounded-4xl cartoon:border cartoon:border-transparent",
            "neo:rounded-full neo:border-5 neo:border-white"
          )}
          alt="Une photo de ma chienne Pichu et moi"
        />
        <h1 className="mb-3 text-center text-4xl cartoon-title cartoon:text-shadow-md cartoon:text-shadow-primary neo:font-bold">
          Emma Guilbault
        </h1>
        <Tag text="Développeuse full stack" />
        <div className="w-5/6 text-center">
          <Divider className="my-7" />
          <ul className="flex flex-col gap-y-6">
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
          <a
            className="cartoon:mt-7 neo:mt-9 inline-block neo:p-4 neo:rounded-full neo:shadow-outer-md neo:active:shadow-inner-md"
            href="https://www.linkedin.com/in/emma-guilbault-078588183/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInLogo className="cartoon:fill-primary neo:fill-secondary-2 size-6" />
          </a>
        </div>
      </div>
    </Card>
  );
}

export default PresentationCard;
