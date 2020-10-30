import * as Contentful from 'contentful';
import { Gallery, Photo } from '@/api/apiModels';


const client = Contentful.createClient({
    space: "g31dyjc0dhaa",
    accessToken: "RTomXH7fKYbwdsci7vLV4VThsANN4Fv_PydbBNtfueA"
  });



export const listGalleries = async () => {
  try {
    const response = await client.getEntries({ 'content_type': 'gallery'});
    return response as Gallery;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const listPhotos = async (id) => {
  try {
    const response = await client.getEntries({ 'content_type': 'photo', 'links_to_entry': id });
    return response as Photo[];
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const photoShow = async (id) => {
  try {
    const response = await client.getEntry(id);
    return response as Photo;
  } catch (error) {
    console.error(error);
    return null;
  }
};




