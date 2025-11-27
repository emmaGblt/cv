import "./index.css";

import type { TExperience } from "@/types";

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
      className="experience-list-item relative"
    >
      <div className="ml-9 md:ml-14.5">
        <h4 className="font-bold md:text-lg">{title}</h4>
        <div className="cartoon:text-primary/80">
          {organization}
          <span className="text-sm italic">&nbsp;-&nbsp;{location}</span>
        </div>
        <p className="cartoon:text-secondary-2 neo:text-secondary-1 mb-1 text-sm">
          {formattedStartDate}
          {formattedEndDate ? ` - ${formattedEndDate}` : ""}
        </p>
        {descriptions && descriptions.length > 0 && (
          <ul className="cartoon:text-primary/70 neo:text-black/70 ml-4 text-sm md:text-base">
            {descriptions.map((description, index) => (
              <li key={`description-${index + 1}`} className="list-disc">
                {description}
              </li>
            ))}
          </ul>
        )}
      </div>
    </li>
  );
}

export default Experience;
