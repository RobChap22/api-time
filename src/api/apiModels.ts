
export interface Gallery {
  sys: ContentfulSys;
  fields: ContentfulFields;
}

export interface Photo {
  sys: ContentfulSys;
  fields: ContentfulFields;
}





interface ContentfulSys {
  id: string;
}

interface ContentfulFields {
  slugline: string;
  title: string;
  image: ImageFields;
}

interface ImageFields {
  file: ContentfulImageFile;
}

interface ContentfulImageFile {
  url: string
}

