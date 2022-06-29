export type BreadCrumb = {
    text: String,
    disabled: Boolean,
    href: String
};

export type Link = {
    name: String,
    url: String,
    sublinks?: Array<Object>
};