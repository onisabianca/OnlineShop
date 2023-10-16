const userRole = JSON.parse(localStorage.getItem("user"))?.Role;

export const navItems = [
  {
    id: 1,
    title: "Home",
    path: "./",
    cName: "nav-item",
  },
  {
    id: 2,
    title: "News",
    path: "./news",
    cName: "nav-item",
  },
  {
    id: 3,
    title: "About",
    path: "./about",
    cName: "nav-item",
  },
  {
    id: 4,
    title: "Sales",
    cName: "nav-item",
  },
  {
    id: 5,
    title: "Rentals",
    cName: "nav-item",
  },
  {
    id: 6,
    title: "Contact",
    path: "./contact",
    cName: "nav-item",
  },
];

export const salesDropdown = [
  {
    id: 1,
    title: "Studios",
    path: "./sales-studios",
    cName: "submenu-item",
  },
  {
    id: 2,
    title: "Apartments",
    path: "./sales-apartments",
    cName: "submenu-item",
  },
  {
    id: 3,
    title: "Houses",
    path: "./sales-houses",
    cName: "submenu-item",
  },
];

export const rentalsDropdown = [
  {
    id: 1,
    title: "Studios",
    path: "./rentals-studios",
    cName: "submenu-item",
  },
  {
    id: 2,
    title: "Apartments",
    path: "./rentals-apartments",
    cName: "submenu-item",
  },
  {
    id: 3,
    title: "Houses",
    path: "./rentals-houses",
    cName: "submenu-item",
  },
];
