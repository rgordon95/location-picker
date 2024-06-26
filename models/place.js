export class Place {
  constructor(imageUri, location, title, id) {
    this.address = location.address;
    this.id = id
    this.imageUri = imageUri;
    this.location = { lat: location.lat, lng: location.lng }
    this.title = title;
  }
}
