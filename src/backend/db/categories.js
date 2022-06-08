import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id:uuid(),
     image:
      "https://drive.google.com/uc?export=view&id=1_MGIYn5BvWieMX7x7PzIY8upZUj_nZ8g",
    text: "Mechanical",
    category:"Mechanical",
  },
  {_id:uuid(),
    image:
      "https://drive.google.com/uc?export=view&id=18LxxSb-sMJ2C7tDBEzAJpWYCBQjN7n3c",
    text: "Body",
     category:"Body",
  },
  {_id:uuid(),
    image:
      "https://drive.google.com/uc?export=view&id=1RFu68a2kyWYFHFuaIDuMEVJgKkbkadwR",
    text: "Air conditioning",
    category:"AIR_CONDITIONING",
  },
  {_id:uuid(),
    image:
      "https://drive.google.com/uc?export=view&id=1GhlNpr0xQxoM8kQueSSrEJ384StQ_EtD",
    text: "Engine",
     category: "Oil",
  },
  {_id:uuid(),
    image:
      "https://drive.google.com/uc?export=view&id=1cnz0NNxtf8QDfQvqt7UsVSLFbDChsMR7",
    text: "Brakes",
     category:"Brakes",
  },
];
