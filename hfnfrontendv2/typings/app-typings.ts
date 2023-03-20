export type blogDataType = [
  {
    author: { _ref: string; _type: string };
    image: {
      _type: string;
      asset: {
        _ref: string;
        _type: string;
      };
    };
    image_alt_text: string;
    summary: string;
    title: string;
    url_slug: { _type: string; current: string };
    views: string;
    _createdAt: string;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: string;
  }
];

export type eventDataType = [
  {
    details: string;
    end_datetime: string;
    hybrid: false;
    image: {
      _type: string;
      asset: {
        _ref: string;
        _type: string;
      };
    };
    image_alt_text: string;
    in_person: boolean;
    location: string;
    start_datetime: string;
    title: string;
    virtual: true;
    _createdAt: string;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: string;
  }
];

export type blogDetailsDataType = {
  author: { _ref: string; _type: string };
  image: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
  content: Array<Object>;
  image_alt_text: string;
  summary: string;
  title: string;
  url_slug: { _type: string; current: string };
  views: string;
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
};
