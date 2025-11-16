import Card from "@components/ui/Card";
import me from "@assets/me.jpg";
import Tag from "@components/ui/Tag";
import Divider from "@components/ui/Divider";
import PresentationListItem from "./PresentationListItem";
import { Mail, MapPin, Phone } from "lucide-react";
import LinkedInLogo from "@assets/linkedin.svg?react";

function PresentationCard() {
  return (
    <Card className="h-fit">
      <div className="flex items-center flex-col">
        <img
          src={me}
          className="rounded-4xl w-1/2 aspect-square mb-6 mx-auto"
          alt="Une photo de ma chienne Pichu et moi"
        />
        <h1 className="mb-3 text-center text-4xl font-bold cartoon-title text-light text-shadow-md text-shadow-primary">
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
              className="bg-background"
            />
            <PresentationListItem
              key="phone"
              Icon={Phone}
              title="TÉLÉPHONE"
              text="06.11.69.73.57"
              className="bg-secondary-2"
            />
            <PresentationListItem
              key="address"
              Icon={MapPin}
              title="ADRESSE"
              text="Normandie, France"
              className="bg-secondary-1"
            />
          </ul>
          <a
            className="mt-7 inline-block"
            href="https://www.linkedin.com/in/emma-guilbault-078588183/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInLogo className="fill-primary size-6" />
          </a>
        </div>
      </div>
    </Card>
  );
}

export default PresentationCard;
