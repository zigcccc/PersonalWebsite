export const blogPreviewQuery = `
  _id,
  _createdAt,
  title,
  category->{ name, icon },
  "slug": slug.current,
  excerpt,
  viewCount,
  "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 )
`;

export const blogFullQuery = `
  ...,
  category->{ name, icon },
  "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 ),
  body[] {
    _type != "reference" => @,
    _type == "reference" => @-> {
      _type == "blog" => {
        ...,
        "slug": slug.current,
        category->{ name, icon },
        "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 ),
      },
      _type != "blog" => @
    },
    _type == "inlineImage" => {
      ...,
      image {
        asset->{
          ...,
          metadata
        }
      }
    },
  }
`;
