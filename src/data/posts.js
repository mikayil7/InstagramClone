import { USERS } from "./users";

export const POSTS = [
  {
    imageUrl:
      "https://scontent.fgyd8-1.fna.fbcdn.net/v/t39.30808-6/264590613_2135015009986427_6392118390072250844_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=e3f864&_nc_ohc=Kvt88I4KbYIAX8q2_aE&_nc_ht=scontent.fgyd8-1.fna&oh=00_AT91r09ZenTL8cltisfRAjfyePlXCIqFgf5IJf_J9gx4Fg&oe=61D2322C",
    user: USERS[0].user,
    likes: 4545,
    caption: "Train Ride To Hogwarts.",
    profile_picture: USERS[0].image,
    comments: [
      {
        user: "turanology_",
        comment: "Great photo",
      },
      {
        user: "terlansherifli",
        comment: "Perfect",
      },
    ],
  },

  {
    imageUrl:
      "https://scontent.fgyd8-1.fna.fbcdn.net/v/t1.6435-9/179607571_1882948668523900_2628938692070970389_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=k2gd_knEsMQAX_RBppn&_nc_oc=AQlpbyRJ105lMVWtX_XSr0OS9VBM5Cm7y8CwHz_buhylPYX_T2Xa2am5iiG2TuugN4M&tn=KPeEXcl3l0lwREL9&_nc_ht=scontent.fgyd8-1.fna&oh=00_AT83tPG9Jt1IXxsMBOwb9jVHXAt-NqWxx8W3GMvxtDzCtQ&oe=61EB27AE",
    user: USERS[1].user,
    likes: 8787,
    caption: "Love love love",
    profile_picture: USERS[1].image,
    comments: [
      {
        user: "mixaelguliyev_",
        comment: "Good luck",
      },
      {
        user: "terlansherifli",
        comment: "Wooowwwww",
      },
    ],
  },

  {
    imageUrl:
      "https://scontent.fgyd8-1.fna.fbcdn.net/v/t1.6435-9/51444036_954340638105074_5237963065604964352_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=S1an8CuKdXMAX8ZfBQg&_nc_ht=scontent.fgyd8-1.fna&oh=00_AT9VMT2TbTu_Idn0XbE_ihSndQcRX3kyisX54VVD3xoUsw&oe=61ED709D",
    user: USERS[2].user,
    likes: 8457,
    caption: "Hellloouuuu",
    profile_picture: USERS[2].image,
    comments: [
      {
        user: "zamin681",
        comment: "yeaahhh mannn",
      },
      {
        user: "turonology_",
        comment: "Stoppp))",
      },
    ],
  },
];
