import type { TExperience } from "@/types";
import "./index.css";

type ExperienceProps = TExperience;

function Experience({
  job,
  organization,
  location,
  startDate,
  endDate,
  descriptions,
}: ExperienceProps) {
  const dateTimeFormatter = new Intl.DateTimeFormat("fr-FR", {
    month: "short",
    year: "numeric",
  });
  const period = `${dateTimeFormatter.format(
    startDate
  )} - ${dateTimeFormatter.format(endDate)}`;

  return (
    <li
      key={`${job} - ${organization}`}
      className="relative experience-list-item"
    >
      <div className="ml-14.5">
        <h4 className="font-bold text-lg mb-1">{job}</h4>
        <p className="cartoon:text-primary/80">{organization}</p>
        <p className="cartoon:text-secondary-2 text-sm">{period}</p>
        <p>{location}</p>
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
