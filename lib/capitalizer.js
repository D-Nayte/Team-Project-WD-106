export function capitalizaFirstCahr(array) {
  const formatted = array
    .map((entry) => entry.charAt(0).toUpperCase() + entry.slice(1))
    .toString()
    .replaceAll(",", ", ");
  console.log(formatted);
  return formatted;
}
