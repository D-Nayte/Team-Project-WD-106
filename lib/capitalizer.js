export function capitalizaFirstCahr(array) {
  return array
    .map((entry) => entry.charAt(0).toUpperCase() + entry.slice(1))
    .toString()
    .replace(",", ", ");
}
