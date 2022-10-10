// TODO: Fix typescript errors

const values = "0.5s ease-in-out";

export function getThemeTransition({ properties }: any) {
  if (Array.isArray(properties)) {
    return properties
      .map((property, index) => {
        return `${property} ${values}`;
      })
      .toString();
  }

  return `${properties} ${values}`;
}
