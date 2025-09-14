import { MenuCategory } from './types';

export const MENU_DATA: MenuCategory[] = [
  {
    title: "Starters & Snacks",
    items: [
      {
        name: "Rajwada Paneer Tikka",
        description: "Cottage cheese marinated in royal spices and yogurt, grilled to perfection in a tandoor.",
        price: "₹450",
      },
      {
        name: "Dahi Ke Kebab",
        description: "Exquisite, melt-in-the-mouth kebabs made from hung curd and delicate spices.",
        price: "₹400",
      }
    ]
  },
  {
    title: "Fast Food",
    items: [
      {
        name: "Paneer Kathi Roll",
        description: "Spiced paneer and veggie filling wrapped in a flaky paratha. A hearty and flavorful snack.",
        price: "₹350",
      },
      {
        name: "Samosa Chaat",
        description: "Crushed samosas topped with yogurt, tamarind chutney, and sev. A burst of flavors.",
        price: "₹250",
      },
      {
        name: "Masala Fries",
        description: "Crispy french fries tossed in a special blend of Indian chaat masala and spices.",
        price: "₹200",
      }
    ]
  },
  {
    title: "Main Course",
    items: [
      {
        name: "Shahi Paneer",
        description: "A rich, creamy curry of soft paneer cubes in a tomato, butter and cashew sauce.",
        price: "₹600",
      },
      {
        name: "Dal Haweli",
        description: "Our signature black lentils, slow-cooked overnight with cream and butter for a velvety finish.",
        price: "₹550",
      },
      {
        name: "Hyderabadi Veg Biryani",
        description: "Fragrant basmati rice slow-cooked with vegetables, infused with saffron and mint.",
        price: "₹650",
      },
      {
        name: "Jeera Rice",
        description: "Fluffy basmati rice tempered with cumin seeds and fresh coriander.",
        price: "₹300",
      }
    ]
  },
  {
    title: "Indian Breads",
    items: [
       {
        name: "Butter Naan",
        description: "Soft, fluffy, and leavened tandoori bread brushed with a generous amount of butter.",
        price: "₹80",
      },
      {
        name: "Garlic Naan",
        description: "A popular flatbread topped with minced garlic and coriander, cooked in a tandoor.",
        price: "₹90",
      },
      {
        name: "Tandoori Roti",
        description: "A healthy and traditional whole wheat flatbread, cooked to perfection in a clay oven.",
        price: "₹60",
      },
      {
        name: "Lachha Paratha",
        description: "Crispy, multi-layered whole wheat bread, shallow fried with ghee for a flaky texture.",
        price: "₹100",
      }
    ]
  },
  {
    title: "Desserts & Sweets",
    items: [
      {
        name: "Shahi Tukda",
        description: "Crispy fried bread soaked in thickened, sweetened milk, garnished with nuts and saffron.",
        price: "₹400",
        isHighlight: true,
      },
      {
        name: "Moong Dal Halwa",
        description: "A rich and decadent dessert made with yellow lentils, ghee, and sugar, slow-cooked to perfection.",
        price: "₹350",
      }
    ]
  },
  {
    title: "Beverages & Mocktails",
    items: [
      {
        name: "Royal Rose Lassi",
        description: "A refreshing yogurt-based drink flavored with rose syrup and topped with pistachios.",
        price: "₹300",
      },
      {
        name: "Jaipur Sunset",
        description: "A vibrant mocktail with orange, pineapple, and a hint of grenadine, reminiscent of a desert sunset.",
        price: "₹350",
      }
    ]
  }
];