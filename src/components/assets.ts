interface ItemsAboutPageProps {
  text: string;
  link?: string;
  linkText?: string;
}
export const itemsAboutPage: ItemsAboutPageProps[] = [
  { text: "Address: Turkey, Gaziantep" },
  {
    text: "Whatsapp",
    link: "https://wa.me/+306993352454",
    linkText: "My Phone",
  },
  {
    text: "Email",
    link: "mailto:asaad99hayani@gmail.com",
    linkText: "My Email",
  },
  {
    text: "LinkedIn",
    link: "https://www.linkedin.com/in/as3d-7ayani/",
    linkText: "Asaad Hayani",
  },
  {
    text: "Github",
    link: "https://github.com/AsaadHayani",
    linkText: "Asaad Hayani",
  },
];

interface ItemsTeamPageProps {
  name: string;
  image: string;
  desc: string;
  social: {
    facebook: string;
    linkedin: string;
    github: string;
  };
}
export const itemsTeamPage: ItemsTeamPageProps[] = [
  {
    name: "Asaad Hayani",
    image: "https://i.pravatar.cc/300",
    desc:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus id nihil sequi itaque, voluptatem nobis.",
    social: {
      facebook: "https://www.facebook.com/asaad.hayani.9/",
      linkedin: "https://www.linkedin.com/in/as3d-7ayani/",
      github: "https://github.com/AsaadHayani",
    },
  },
  {
    name: "Sami Khalil",
    image: "https://i.pravatar.cc/301",
    desc:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus id nihil sequi itaque, voluptatem nobis.",
    social: {
      facebook: "https://www.facebook.com/asaad.hayani.9/",
      linkedin: "https://www.linkedin.com/in/as3d-hayani/",
      github: "https://github.com/AsaadHayani",
    },
  },
  {
    name: "Ahmed Ismaeel",
    image: "https://i.pravatar.cc/302",
    desc:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus id nihil sequi itaque, voluptatem nobis.",
    social: {
      facebook: "https://www.facebook.com/asaad.hayani.9/",
      linkedin: "https://www.linkedin.com/in/as3d-hayani/",
      github: "https://github.com/AsaadHayani",
    },
  },
];

interface ItemsTestimoPageProps {
  name: string;
  image: string;
  desc: string;
}
export const itemsTestimoPage: ItemsTestimoPageProps[] = [
  {
    image: "https://i.pravatar.cc/300",
    desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, numquam saepe maiores animi harum error inventore amet incidunt cumque, excepturi a architecto aliquid ex vitae explicabo asperiores repellat! Assumenda, magnam.",
    name: "Asaad Hayani",
  },
];

export const imagesWorkPage: string[] = [
  "https://picsum.photos/180/101",
  "https://picsum.photos/180/102",
  "https://picsum.photos/180/103",
  "https://picsum.photos/180/104",
];

export const navItems: { text: string; link: string }[] = [
  { text: "Website", link: "" },
  { text: "Products", link: "products" },
  { text: "Posts", link: "posts" },
  { text: "Quiz", link: "quiz" },
  { text: "Gallery", link: "gallery" },
  { text: "Todos", link: "todos" },
  // { text: "Qoute", link: "qoute" },
];

export const imagesGalley: { id: number; src: string }[] = [
  {
    id: 1,
    src: "https://picsum.photos/200/100",
  },
  {
    id: 2,
    src: "https://picsum.photos/201/100",
  },
  {
    id: 3,
    src: "https://picsum.photos/202/100",
  },
  {
    id: 4,
    src: "https://picsum.photos/203/100",
  },
  {
    id: 5,
    src: "https://picsum.photos/204/100",
  },
];
