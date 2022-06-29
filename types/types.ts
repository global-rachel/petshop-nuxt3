export type BreadCrumb = {
    text: string,
    disabled: Boolean,
    href: string
};

export type Link = {
    name: string,
    url: string,
    sublinks?: Array<Object>
};

export type LoginForm = {
    password: string | null,
    email: string | null
};