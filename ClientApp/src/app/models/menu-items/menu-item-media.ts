import { MenuItemData } from './menu-item';

export enum MediaType {
  Image = 0,
  Video = 1
}

export class Media {
  constructor(thumbnail: string, type: MediaType, src: string) {
    this.thumbnailUrl = thumbnail;
    this.type = type;
    this.src = src;
  }

  thumbnailUrl: string;
  type: MediaType;
  src: string;

  public static OutterPhoto1: Media = new Media("outter1.jpg", MediaType.Image, "outter1.jpg");
  public static OutterPhoto2: Media = new Media("outter2.jpg", MediaType.Image, "outter2.jpg");
  public static InnerPhoto1: Media = new Media("inner1.jpg", MediaType.Image, "inner1.jpg");
  public static InnerPhoto2: Media = new Media("inner2.jpg", MediaType.Image, "inner2.jpg");
}

export class MenuItemMedia implements MenuItemData {
  items: MediaCollection[] = [MediaCollection.InnerPhotos, MediaCollection.OutterPhotos];
}

export class MediaCollection {
  constructor(title: string, collection: Media[]) {
    this.groupTitle = title;
    this.groupItems = collection;
  }

  groupTitle: string;
  groupItems: Media[];

  public static OutterPhotos: MediaCollection = new MediaCollection("Outter", [Media.OutterPhoto1, Media.OutterPhoto2]);
  public static InnerPhotos: MediaCollection = new MediaCollection("Inner", [Media.InnerPhoto1, Media.InnerPhoto2]);
}
