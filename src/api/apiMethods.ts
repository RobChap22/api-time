import * as Contentful from 'contentful';


const client = Contentful.createClient({
    space: "g31dyjc0dhaa",
    accessToken: "RTomXH7fKYbwdsci7vLV4VThsANN4Fv_PydbBNtfueA"
  });

export const listGalleries = async () => {
  try {
    const response = await client.getEntries({ 'content_type': 'gallery'});
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const listPhotos = async () => {
  try {
    const response = await client.getEntries({ 'content_type': 'photo'});
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const photoShow = async (id) => {
  try {
    const response = await client.getEntry(id);
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};




