import type { TExperience } from "@/types";
import "./index.css";

type ExperienceProps = TExperience;

function Experience({
  title,
  organization,
  location,
  startDate,
  endDate,
  descriptions,
  showOnlyDateYear = false,
}: ExperienceProps) {
  const dateTimeFormatter = new Intl.DateTimeFormat("fr-FR", {
    month: showOnlyDateYear ? undefined : "short",
    year: "numeric",
  });

  const formattedStartDate = dateTimeFormatter.format(startDate);
  const formattedEndDate = endDate && dateTimeFormatter.format(endDate);

  return (
    <li
      key={`${title} - ${organization}`}
      className="relative experience-list-item"
    >
      <div className="ml-14.5">
        <h4 className="font-bold text-lg">{title}</h4>
        <div className="cartoon:text-primary/80">
          {organization}
          <span className="text-sm italic">&nbsp;-&nbsp;{location}</span>
        </div>
        <p className="cartoon:text-secondary-2 text-sm mb-1">
          {formattedStartDate}
          {formattedEndDate ? ` - ${formattedEndDate}` : ""}
        </p>
        {descriptions && descriptions.length > 0 && (
          <ul className="ml-4 cartoon:text-primary/70">
            {descriptions.map((description) => (
              <li className="list-disc">{description}</li>
            ))}
          </ul>
        )}
      </div>
    </li>
  );
}

export default Experience;
