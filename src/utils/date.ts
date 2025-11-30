function getStringPeriod(
  startDate: Date,
  endDate?: Date,
  formaterOptions?: Intl.DateTimeFormatOptions
) {
  const dateTimeFormatter = new Intl.DateTimeFormat("fr-FR", formaterOptions);

  const formattedStartDate = dateTimeFormatter.format(startDate);

  if (!endDate) return formattedStartDate;

  const formattedEndDate = endDate && dateTimeFormatter.format(endDate);

  return `${formattedStartDate} - ${formattedEndDate}`;
}

export { getStringPeriod };
