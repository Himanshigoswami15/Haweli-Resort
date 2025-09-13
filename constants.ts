import { MenuCategory } from './types';

export const MENU_DATA: MenuCategory[] = [
  {
    title: "Starters & Snacks",
    items: [
      {
        name: "Rajwada Paneer Tikka",
        description: "Cottage cheese marinated in royal spices and yogurt, grilled to perfection in a tandoor.",
        price: "₹450",
        imageUrl: "https://ik.imagekit.io/j1fgksdwx/Curd-and-Yogurt-1-768x512.jpg?updatedAt=1757778358127"
      },
      {
        name: "Dahi Ke Kebab",
        description: "Exquisite, melt-in-the-mouth kebabs made from hung curd and delicate spices.",
        price: "₹400",
        imageUrl: "https://picsum.photos/seed/golden_dahi_kebab_platter/400/400"
      },
      {
        name: "Murg Malai Tikka",
        description: "Creamy chicken tikka, marinated in cheese, cream, and cashew paste, with a hint of cardamom.",
        price: "₹550",
        imageUrl: "https://picsum.photos/seed/creamy_chicken_malai_tikka/400/400"
      },
      {
        name: "Shikampuri Lamb Kebab",
        description: "Minced lamb patties with a surprise yogurt and mint filling, pan-fried to a golden brown.",
        price: "₹650",
        imageUrl: "https://picsum.photos/seed/shikampuri_lamb_kebab_dish/400/400"
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
        imageUrl: "https://picsum.photos/seed/paneer_kathi_roll_wrap/400/400"
      },
      {
        name: "Samosa Chaat",
        description: "Crushed samosas topped with yogurt, tamarind chutney, and sev. A burst of flavors.",
        price: "₹250",
        imageUrl: "https://picsum.photos/seed/spicy_samosa_chaat_bowl/400/400"
      },
      {
        name: "Chicken 65",
        description: "Spicy, deep-fried chicken chunks bursting with flavors of ginger, garlic, and red chillies.",
        price: "₹450",
        imageUrl: "https://picsum.photos/seed/spicy_chicken_65_appetizer/400/400"
      },
      {
        name: "Masala Fries",
        description: "Crispy french fries tossed in a special blend of Indian chaat masala and spices.",
        price: "₹200",
        imageUrl: "https://picsum.photos/seed/crispy_masala_french_fries/400/400"
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
        imageUrl: "https://picsum.photos/seed/creamy_shahi_paneer_curry/400/400"
      },
      {
        name: "Dal Haweli",
        description: "Our signature black lentils, slow-cooked overnight with cream and butter for a velvety finish.",
        price: "₹550",
        imageUrl: "https://picsum.photos/seed/rich_dal_makhani_haweli/400/400"
      },
      {
        name: "Laal Maas",
        description: "A fiery Rajasthani mutton curry, slow-cooked with a blend of Mathania chillies and aromatic spices.",
        price: "₹850",
        imageUrl: "https://picsum.photos/seed/authentic_laal_maas_curry/400/400"
      },
      {
        name: "Butter Chicken",
        description: "Tandoori chicken simmered in a luscious tomato and butter gravy, a timeless classic.",
        price: "₹750",
        imageUrl: "https://picsum.photos/seed/classic_indian_butter_chicken/400/400"
      },
      {
        name: "Hyderabadi Biryani",
        description: "Fragrant basmati rice slow-cooked with your choice of vegetables or meat, infused with saffron and mint.",
        price: "₹650 (Veg) / ₹800 (Chicken)",
        imageUrl: "https://picsum.photos/seed/aromatic_hyderabadi_biryani/400/400"
      },
      {
        name: "Jeera Rice",
        description: "Fluffy basmati rice tempered with cumin seeds and fresh coriander.",
        price: "₹300",
        imageUrl: "https://picsum.photos/seed/fluffy_jeera_cumin_rice/400/400"
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
        imageUrl: "https://picsum.photos/seed/soft_butter_naan_bread/400/400"
      },
      {
        name: "Garlic Naan",
        description: "A popular flatbread topped with minced garlic and coriander, cooked in a tandoor.",
        price: "₹90",
        imageUrl: "https://picsum.photos/seed/aromatic_garlic_naan/400/400"
      },
      {
        name: "Tandoori Roti",
        description: "A healthy and traditional whole wheat flatbread, cooked to perfection in a clay oven.",
        price: "₹60",
        imageUrl: "https://picsum.photos/seed/classic_tandoori_roti_bread/400/400"
      },
      {
        name: "Lachha Paratha",
        description: "Crispy, multi-layered whole wheat bread, shallow fried with ghee for a flaky texture.",
        price: "₹100",
        imageUrl: "https://picsum.photos/seed/flaky_lachha_paratha_bread/400/400"
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
        imageUrl: "https://picsum.photos/seed/royal_shahi_tukda_dessert/400/400"
      },
      {
        name: "Moong Dal Halwa",
        description: "A rich and decadent dessert made with yellow lentils, ghee, and sugar, slow-cooked to perfection.",
        price: "₹350",
        imageUrl: "https://picsum.photos/seed/rich_moong_dal_halwa/400/400"
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
        imageUrl: "https://picsum.photos/seed/creamy_rose_lassi_drink/400/400"
      },
      {
        name: "Jaipur Sunset",
        description: "A vibrant mocktail with orange, pineapple, and a hint of grenadine, reminiscent of a desert sunset.",
        price: "₹350",
        imageUrl: "https://picsum.photos/seed/tropical_jaipur_sunset_mocktail/400/400"
      }
    ]
  }
];