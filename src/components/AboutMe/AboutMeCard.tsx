import Card from "../ui/Card";
import Divider from "../ui/Divider";

function AboutMeCard() {
  return (
    <Card>
      <h1 className="font-bold text-3xl">À propos de moi</h1>
      <Divider className="w-1/12 mt-4 mb-6" type="thick" />
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
    </Card>
  );
}

export default AboutMeCard;
