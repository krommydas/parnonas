export class SocialMedia {

  constructor(public className: string, url: string) {
    this.iconClass = className;
    this.iconUrl = url;
  }

  iconClass: string;
  iconUrl: string;

  public static readonly Facebook: SocialMedia = new SocialMedia('fa fa-facebook',
    'https://www.facebook.com/Ψησταρια-Πάρνωνας-781460398660810');
}
