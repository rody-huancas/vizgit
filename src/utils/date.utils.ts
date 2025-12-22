export const formatDate = (date: Date): string => {
  return date.toLocaleDateString("es-ES", {
    weekday: "short",
    day    : "numeric",
    month  : "short",
    year   : "numeric",
  });
};
