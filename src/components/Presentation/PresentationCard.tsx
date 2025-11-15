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
        <h1 className="mb-3 text-center text-xl font-bold">Emma Guilbault</h1>
        <Tag text="Développeuse full stack" />
        <div className="w-5/6 text-center">
          <Divider className="my-7" />
          <ul className="flex flex-col gap-y-6">
            <PresentationListItem
              key="email"
              Icon={MapPin}
              title="EMAIL"
              text="emmaguilbault1504@gmail.com"
            />
            <PresentationListItem
              key="phone"
              Icon={Phone}
              title="TÉLÉPHONE"
              text="06.11.69.73.57"
            />
            <PresentationListItem
              key="address"
              Icon={Mail}
              title="ADRESSE"
              text="Normandie, France"
            />
          </ul>
          <a
            className="mt-7 inline-block"
            href="https://www.linkedin.com/in/emma-guilbault-078588183/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInLogo className="fill-secondary-2 size-6" />
          </a>
        </div>
      </div>
    </Card>
  );
}

export default PresentationCard;
