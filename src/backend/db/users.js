import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have cart (Quantity of all Products in Cart is set to 1 by default), wishList by default
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Jadaun",
    email: "adarshjadaun@gmail.com",
    password: "jadaunAdarsh",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Akshat",
    lastName: "Gupta",
    email: "akshat@gmail.com",
    password: "akshat",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
