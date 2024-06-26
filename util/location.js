const GOOGLE_MAPS_API_KEY = "AIzaSyCwtf6Dxy6X-luNPgWSxSPX1acPrcCCVAQ";

export const getAddress = async (lat, lng) => {
  let url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_MAPS_API_KEY}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch address. Please try again!");
  }

  try {
    const data = await response.json();
    const address = data.results[0].formatted_address;
    return address;
  } catch (e) {
    throw new Error("Failed to fetch address. Please try again!");
  }
};

export const getMapPreview = (lat, lng) => {
  return `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:A%7C${lat},${lng}&key=${GOOGLE_MAPS_API_KEY}`;
};
