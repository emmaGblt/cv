import Divider from "../ui/Divider";
import SkillsList from "./SkillsList";
import "./index.css";

function AboutMeContent() {
  return (
    <>
      <h2 className="font-bold text-3xl mb-4">À propos de moi</h2>
      <Divider className="w-1/12 mb-8" type="thick" />
      <div className="flex flex-col gap-y-4">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mi
          ligula, dignissim vitae placerat eu, convallis eu est. Vestibulum quis
          vulputate odio, sed dignissim dui. In auctor leo consectetur sem
          cursus, sit amet porttitor ipsum posuere. Vivamus nec convallis sem,
          semper vestibulum risus.
        </p>
        <p>
          Nunc lacinia euismod porttitor. Aliquam euismod scelerisque sem, a
          malesuada quam volutpat vitae. Ut ac vehicula nunc, nec vestibulum
          sapien. Nam at posuere lorem.
        </p>
      </div>
      <div className="mt-8 holographic-cards-scrollbar">
        <h3 className="font-bold text-xl mb-4">Compétences</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mi
          ligula, dignissim vitae placerat eu, convallis eu est.
        </p>
        <div className="relative h-48 overflow-x-auto">
          <SkillsList />
        </div>
      </div>
    </>
  );
}

export default AboutMeContent;
