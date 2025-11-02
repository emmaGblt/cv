import Card from "@components/ui/Card";
import me from "@assets/me.jpg";
import Tag from "@components/ui/Tag";
import Divider from "@components/ui/Divider";
import PresentationListItem from "./PresentationListItem";
import { Mail, MapPin, Phone } from "lucide-react";

function PresentationCard() {
  return (
    <Card>
      <div className="flex items-center flex-col">
        <img
          src={me}
          className="rounded-4xl w-1/2 aspect-square mb-6 mx-auto"
          alt="Une photo de ma chienne Pichu et moi"
        />
        <p className="mb-2 text-center text-xl font-bold">Emma Guilbault</p>
        <Tag text="Développeuse full stack" />
        <div className=" w-5/6">
          <Divider className="my-6" />
          <ul className="flex flex-col gap-y-3">
            <PresentationListItem Icon={MapPin} title="Hello" text="Yep" />
            <PresentationListItem Icon={Phone} title="Hello" text="Yep" />
            <PresentationListItem Icon={Mail} title="Hello" text="Yep" />
          </ul>
        </div>
      </div>
    </Card>
  );
}

export default PresentationCard;
