import Image from './image';

export interface Album {
  album_type: string;
  available_markets: string[];
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  images: Image[];
  name: string;
  type: string;
  uri: string;
}

export default Album;
