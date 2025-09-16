import { MenuCategory } from './types';

export const MENU_DATA: MenuCategory[] = [
  {
    title: "Breakfast",
    items: [
      {
        name: "Tropical Fruit Salad",
        description: "A refreshing colourful mixture of several sliced raw fruits with honey.",
        price: 225,
        imageUrl: "https://images.unsplash.com/photo-1525385133512-2f3bdd039054?q=80&w=1974&auto=format&fit=crop"
      },
      {
        name: "Cornflakes & Milk",
        description: "Cereal made from toasting flakes of corn along with the choice of milk, hot and cold.",
        price: 149,
        imageUrl: "https://images.unsplash.com/photo-1585447245900-11b0e3527b19?q=80&w=2070&auto=format&fit=crop"
      },
      {
        name: "Poori Bhaji (4pcs)",
        description: "Rich flavoured mildly-spiced potato curry served with puffed deep fried rounds of dough.",
        price: 149,
        imageUrl: "https://media.istockphoto.com/id/1337351213/photo/puri-bhaji-or-poori-bhaji-is-a-popular-indian-breakfast-or-lunch-menu-usually-served.jpg?s=612x612&w=0&k=20&c=g-f3lFp8Yh276GZ-b0PLdg6Zz4tLFEu9TNJB3dVANss="
      },
      {
        name: "Chole Bhature",
        description: "A combination of chana masala and bhatura/puri, a deep-fried bread.",
        price: 165,
        imageUrl: "https://static.vecteezy.com/system/resources/previews/015/933/458/large_2x/chole-bhature-is-a-north-indian-food-dish-a-combination-of-chana-masala-and-bhatura-or-puri-free-photo.jpg"
      },
      {
        name: "Idli Sambar",
        description: "Idli, a steamed cake made with fermented rice & lentils served with Sambar, lentil-based vegetable stew.",
        price: 145,
        imageUrl: "https://img.freepik.com/premium-photo/idly-sambar-idli-with-sambhar-green-red-chutney-popular-south-indian-breakfast_466689-29523.jpg?w=2000"
      },
      {
        name: "Vada Sambar",
        description: "Vada, donut shaped lentil fritters that are fluffy, deep fried savoury made with lentils & spices.",
        price: 145,
        imageUrl: "https://img.freepik.com/premium-photo/vada-medu-vadai-with-sambar-chutney-popular-south-indian-snack-breakfast_1174497-42202.jpg"
      },
      {
        name: "Upma",
        description: "Roasted semolina flour, white lentils, husked & split Bengal gram cooked with veggies, herbs & spices.",
        price: 135,
        imageUrl: "https://media.istockphoto.com/id/1283626886/photo/upma-uppumavu-or-uppittu-is-a-popular-south-indian-breakfast-recipe-made-with-rawa-or.jpg?s=612x612&w=0&k=20&c=Uv1J5J3aF-p03ySo-4QNPZtAnMSl-wYlB3Mn1uC-u-Q="
      },
      {
        name: "Dosa",
        description: "Savory pancake made from a fermented batter of lentils and rice, often served with chutney and sambar.",
        price: 165,
        imageUrl: "https://images.unsplash.com/photo-1668665053462-80087da07808?q=80&w=2070&auto=format&fit=crop"
      },
      {
        name: "Uttapam",
        description: "Savory pancakes with crispy golden edges and a pillowy soft center topped with veggies.",
        price: 165,
        imageUrl: "https://media.istockphoto.com/id/1317521369/photo/south-indian-breakfast-rava-uttapam-or-semolina-uttapam-with-sambar-and-chutney-selective.jpg?s=612x612&w=0&k=20&c=jM-c7D43fM5r3s_Gf-c-o5J5_Lp8J8bZtq0-vL5u4qI="
      },
      {
        name: "Paneer Paratha with Curd",
        description: "Stuffed flatbread of whole wheat flour, filled with rich spices & cottage cheese, served with curd.",
        price: 145,
        imageUrl: "https://img.freepik.com/premium-photo/indian-breakfast-dish-paneer-paratha-serve-with-curd-chutney_55610-4051.jpg?w=740"
      },
      {
        name: "Stuffed Paratha with Curd",
        description: "Choice of stuffing: potato, onion, or cauliflower, made of whole wheat flour and served with curd.",
        price: 125,
        imageUrl: "https://as2.ftcdn.net/v2/jpg/04/29/65/05/1000_F_429650525_VCojL9x6whdslRdFiH5G9LX3AieJozVA.jpg"
      },
      {
        name: "Plain Paratha with Aloo Chatpata",
        description: "Whole wheat flatbreads served with potatoes sautéed in chopped green chilies & savoury spices.",
        price: 145,
        imageUrl: "https://media.istockphoto.com/id/1313430588/photo/aloo-paratha-with-butter.jpg?s=612x612&w=0&k=20&c=vWfA3a-g2pW_J_rB-vHy2b5TjDcE45dG5w-Z_V-eBwU="
      },
      {
        name: "Poha Masala",
        description: "Flattened rice that is steam cooked with veggies, spices & herbs.",
        price: 135,
        imageUrl: "https://media.istockphoto.com/id/1202476537/photo/poha-or-pauwa-famous-indian-breakfast-snack.jpg?s=612x612&w=0&k=20&c=i35Z16pTFLCFQ8d2uCGCv3uJJYk532oH5u_4_eMEoec="
      },
      {
        name: "Vermicelli",
        description: "Cooked with tomatoes, veggies along with spices and herbs.",
        price: 135,
        imageUrl: "https://media.istockphoto.com/id/1319349867/photo/semiya-upma-or-vermicelli-upma-or-uppuma-is-a-popular-breakfast-menu-from-south-india.jpg?s=612x612&w=0&k=20&c=k3-fQh-z_0acJbE0GkY-H8vGwfNf2_g8u_O27tY7mZM="
      }
    ]
  },
  {
    title: "On The Run - Veg Delight",
    description: "Served from 10:00am to 10:30am",
    items: [
      {
        name: "Paneer Pakora",
        description: "Cottage cheese fritters coated with savouary gram flour batter.",
        price: 375,
        imageUrl: "https://media.istockphoto.com/id/1292882121/photo/paneer-pakora-or-pakoda-is-a-popular-crispy-and-delicious-indian-tea-time-snack-made-with.jpg?s=612x612&w=0&k=20&c=Jd3a-5S_yv6uQ02w2Yb-iG875f1yPqCRSo9i-70Wj6E="
      },
      {
        name: "Chilli Paneer",
        description: "Batter coated fried paneer, tossed in slightly sweet, spicy, hot and tangy chili sauce.",
        price: 395,
        imageUrl: "https://media.istockphoto.com/id/1297352504/photo/chilli-paneer-or-spicy-cottage-cheese-served-in-a-black-bowl-selective-focus.jpg?s=612x612&w=0&k=20&c=qTfoIHEY7fIokZKN-5xY93oVSp-5qt_LGFt0xO5h3j4="
      },
      {
        name: "Palak Cheese Balls",
        description: "Spinach & cheese balls deep fried to perfection.",
        price: 335,
        imageUrl: "https://img.freepik.com/premium-photo/falafel-deep-fried-balls-made-from-chopped-legumes-chickpeas_75924-18818.jpg"
      },
      {
        name: "Mix Veg. Pakora",
        description: "Mix veg. fritters coated with savoury gram flour batter.",
        price: 245,
        imageUrl: "https://images.unsplash.com/photo-1631206144415-5a0bf643c7a7?q=80&w=2070&auto=format&fit=crop"
      }
    ]
  },
  {
    title: "Chaat House",
    items: [
      {
        name: "Aloo Chaat",
        description: "Parboiled potatoes tossed in tangy sauces.",
        price: 175,
        imageUrl: "https://media.istockphoto.com/id/1301413554/photo/aloo-chaat-is-a-popular-indian-street-food-served-in-a-bowl-selective-focus.jpg?s=612x612&w=0&k=20&c=7d55u7B-0_qDR-BKL6jF1oRzV9w5Wso-oizJhxJT-U8="
      },
      {
        name: "Fruit Chaat",
        description: "Freshly diced seasonal fruits, mixed with liquids/syrups.",
        price: 175,
        imageUrl: "https://media.istockphoto.com/id/526685593/photo/fruit-chaat-or-fruit-salad.jpg?s=612x612&w=0&k=20&c=Cj8C9ggz3Gwa-TKKkO58i-8iA78yYvG40H4Cm4vo-ao="
      },
      {
        name: "Peanut Masala",
        description: "Fried peanuts mixed with chopped onions, tomatoes, green chili, coriander leaves & lemon juice.",
        price: 175,
        imageUrl: "https://media.istockphoto.com/id/1291104518/photo/masala-peanuts-is-a-popular-indian-snack-served-in-a-bowl.jpg?s=612x612&w=0&k=20&c=g-wQjZkE5S-yLp-w0Z5gQ-W8v8t-p2E-l3gX6iJ5iQ="
      },
      {
        name: "Masala Papad",
        description: "Fried papad topped with a spiced and tangy onion-tomato mixture.",
        price: 85,
        imageUrl: "https://media.istockphoto.com/id/1295325883/photo/masala-papad-is-an-indian-snack-made-with-fried-papad-topped-with-onions-tomatoes-and-spices.jpg?s=612x612&w=0&k=20&c=5Z-X6aJ-4q-V4a-H9Y-r-z2E-f-w7Y-8v9g-1a-1k="
      },
      {
        name: "Palak Cheese Balls (Chaat Style)",
        description: "Crispy cheesy balls made with corn flour, cheese, herbs and spices.",
        price: 325,
        imageUrl: "https://img.freepik.com/premium-photo/falafel-deep-fried-balls-made-from-chopped-legumes-chickpeas_75924-18818.jpg"
      },
      {
        name: "French Fries",
        description: "Chopped deep fried potato fingers.",
        price: 199,
        imageUrl: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?q=80&w=1974&auto=format&fit=crop"
      },
      {
        name: "Honey Chilli Potatoes",
        description: "Deep-fried potato fingers coated with sesame seeds, honey and sweet-spicy sauce.",
        price: 249,
        imageUrl: "https://media.istockphoto.com/id/1302298314/photo/honey-chilli-potato-is-a-popular-indian-chinese-snack-served-in-a-bowl-selective-focus.jpg?s=612x612&w=0&k=20&c=zG-4Z1-7Q8c-s_a-v-y-s9-d-1g-8w-z7-p-1k="
      },
      {
        name: "Crispy Corn",
        description: "Deep-fried crunchy sweet corn kernels are tossed in onion, spices & sauces.",
        price: 275,
        imageUrl: "https://media.istockphoto.com/id/1284534796/photo/crispy-corn-is-a-snack-made-by-frying-corn-kernels-and-then-flavoring-with-spice-powders.jpg?s=612x612&w=0&k=20&c=9wmyD-aH0_xSo1bJgXw-8-Z-1w-k-f-v9-z-1k="
      },
    ]
  },
  {
    title: "More Veg Delights",
    items: [
      {
        name: "Vegetable Pakora",
        description: "Crispy fritters made with veggies like onions, potatoes, gram flour, herbs and rich Indian spices.",
        price: 225,
        imageUrl: "https://images.unsplash.com/photo-1631206144415-5a0bf643c7a7?q=80&w=2070&auto=format&fit=crop"
      },
      {
        name: "Veg Kathi Roll",
        description: "Layered wheat flour wrap with a filling of finely julienne cut veggies, sauces & spices.",
        price: 299,
        imageUrl: "https://media.istockphoto.com/id/1301984942/photo/veg-kathi-roll-or-franky-is-a-popular-indian-street-food-made-with-a-wrap-of-roti-or-paratha.jpg?s=612x612&w=0&k=20&c=I-p742S2dfT0y9n_k-L_rG2vV_f_Y-j9-1-1q-1Q="
      },
      {
        name: "Hara Bhara Kebab",
        description: "Grilled patties filled with leafy green veggies, along with herbs and seasonings.",
        price: 249,
        imageUrl: "https://www.vegrecipesofindia.com/wp-content/uploads/2021/11/hara-bhara-kabab-2.jpg"
      },
      {
        name: "Paneer Papdi",
        description: "Paneer slices are covered with crumbled papad and peanuts, then deep-fried.",
        price: 299,
        imageUrl: "https://i.ytimg.com/vi/o0gZWUumnzI/maxresdefault.jpg"
      },
      {
        name: "Khichiya Papad (Plain/Masala)",
        description: "A thin, crisp, disc-shaped snack, typically based on seasoned dough fried or cooked with dry heat.",
        price: 75,
        imageUrl: "https://t3.ftcdn.net/jpg/03/99/81/70/360_F_399817048_NcbO56TcAyHzgU3vivfa1SbDUntD0coD.jpg"
      }
    ]
  },
  {
    title: "Sandwiches",
    items: [
      {
        name: "Veggie Club Sandwich",
        description: "Grilled three layered slices of bread loaded with fresh vegetable mix, mayonnaise & herbs.",
        price: 275,
        imageUrl: "https://images.unsplash.com/photo-1592415486698-028d7a428442?q=80&w=1974&auto=format&fit=crop"
      },
      {
        name: "Veg Cheese Sandwich",
        description: "Grilled slices of bread stuffed with fresh vegetables & loaded with cheese.",
        price: 275,
        imageUrl: "https://plus.unsplash.com/premium_photo-1668619119632-ca3134371744?q=80&w=2070&auto=format&fit=crop"
      },
      {
        name: "Veg Grilled Sandwich",
        description: "Grilled bread slices loaded with fresh seasonal vegetables & other spices.",
        price: 275,
        imageUrl: "https://images.unsplash.com/photo-1628191079336-625a68c55a12?q=80&w=2070&auto=format&fit=crop"
      }
    ]
  },
  {
    title: "Grill Charm",
    items: [
      {
        name: "Veg. Sizzler",
        description: "Vegetarian sizzler consists of rice, cottage cheese, mushroom and other veggies (might vary sometime).",
        price: 499,
        imageUrl: "https://images.unsplash.com/photo-1625039352426-5d2753877cc4?q=80&w=2070&auto=format&fit=crop"
      }
    ]
  },
  {
    title: "Chinese",
    items: [
      {
        name: "Sesame Grilled Paneer",
        description: "Marinated paneer is coated with sesame seeds & then grilled.",
        price: 395,
        imageUrl: "https://www.sharmispassions.com/wp-content/uploads/2017/01/SesamePaneerTikka3-470x500.jpg"
      },
      {
        name: "Chilli Paneer (Dry)",
        description: "Batter coated fried paneer is tossed in slightly sweet, spicy, hot & tangy chili sauce.",
        price: 395,
        imageUrl: "https://images.unsplash.com/photo-1606491104324-a7322b721e58?q=80&w=2070&auto=format&fit=crop"
      },
      {
        name: "Chilli Mushroom",
        description: "Batter coated mushroom tossed in slightly sweet, spicy, hot & tangy chili sauce.",
        price: 395,
        imageUrl: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/03/chilli-mushroom-recipe.jpg"
      },
      {
        name: "Veg. Manchurian",
        description: "Marinated deep fried veg. balls saute in chilli garlic sauce.",
        price: 235,
        imageUrl: "https://img.freepik.com/premium-photo/veg-manchurian-popular-indochinese-food-made-cauliflower-florets-other-vegetable-served-white-plate-rustic-wooden-table-selective-focus_726363-656.jpg?w=1380"
      },
      {
        name: "Chinese Platter",
        description: "Combination of Chinese varieties including noodles, Manchurian, chilli paneer.",
        price: 499,
        imageUrl: "https://as2.ftcdn.net/v2/jpg/02/79/10/99/1000_F_279109986_JcyuC0YhoVS51jM54AJFHXrj9vBSiLWr.jpg"
      },
      {
        name: "Spring Rolls",
        description: "Hot handheld pockets of vegetables are wrapped and deep fried, served with spicy dip.",
        price: 249,
        imageUrl: "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=1996&auto=format&fit=crop"
      }
    ]
  },
  {
    title: "Noodles & Maggi",
    items: [
      {
        name: "Veggie Noodles",
        description: "Stir-fried noodles cooked with vegetables, herbs and spices.",
        price: 225,
        imageUrl: "https://images.unsplash.com/photo-1612927601601-6638424737ce?q=80&w=1974&auto=format&fit=crop"
      },
      {
        name: "Hakka Noodles",
        description: "Noodles with mild flavours are stir-fried with veggies and seasonings.",
        price: 225,
        imageUrl: "https://www.vegrecipesofindia.com/wp-content/uploads/2021/05/hakka-noodles-1.jpg"
      },
      {
        name: "Chilli Garlic Noodles",
        description: "Spicy and mixed with fresh garlic, chilli oil, soy sauces, and sauteed veggies.",
        price: 225,
        imageUrl: "https://www.whiskaffair.com/wp-content/uploads/2020/09/Chilli-Garlic-Noodles-2-3.jpg"
      },
      {
        name: "Masala Maggi",
        description: "Classic maggi is loaded with fresh veggies, herbs, and rich spices.",
        price: 125,
        imageUrl: "https://i.ytimg.com/vi/u5IuIfthv_s/maxresdefault.jpg"
      },
      {
        name: "Cheese Maggi",
        description: "Stuffed with cheese, fresh vegetables, green chilli, herbs, and spicy flavourings into classic maggi.",
        price: 149,
        imageUrl: "https://c.ndtvimg.com/2022-03/32nnv99g_maggi_625x300_11_March_22.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=675"
      }
    ]
  },
  {
    title: "Pizza",
    items: [
        {
            name: "Margherita",
            description: "Pizza features a bubbly cheese crust, tomato sauce, fresh mozzarella and topped with herbs.",
            price: 365,
            imageUrl: "https://images.unsplash.com/photo-1598021680133-eb3a1680a133?q=80&w=1974&auto=format&fit=crop"
        },
        {
            name: "Veg. Haveli Garden Pizza",
            description: "Loaded with capsicum, onion, mushroom, golden corn, tomato along with cheese.",
            price: 395,
            imageUrl: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1981&auto=format&fit=crop"
        },
        {
            name: "Peri Peri Cottage Pizza",
            description: "Stuffed with black olives, capsicum, onion, mushroom, golden corn, tomato, jalapeno, and extra cheese.",
            price: 415,
            imageUrl: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?q=80&w=1974&auto=format&fit=crop"
        }
    ]
  },
  {
      title: "Pasta",
      items: [
          {
              name: "Alfredo",
              description: "Choice of pasta- penne, fusilli, combined with fresh veggies (bell pepper, sweet corn, broccoli), white cream & cheese.",
              price: 325,
              imageUrl: "https://images.unsplash.com/photo-1621996346565-e326b20f545c?q=80&w=2069&auto=format&fit=crop"
          },
          {
              name: "All' Arrabbiata",
              description: "Choice of pasta- penne, fusilli, seasoned with arrabbiata sauce (tomatoes, hot chili pepper, garlic) & fresh parsley.",
              price: 325,
              imageUrl: "https://images.unsplash.com/photo-1598866594240-a3b5a9502046?q=80&w=1974&auto=format&fit=crop"
          },
          {
              name: "Macaroni",
              description: "Boiled macaroni is tossed with onion, tomato, ginger, garlic & rich spices and herbs.",
              price: 249,
              imageUrl: "https://aartimadan.com/wp-content/uploads/2020/08/indian-style-masala-macaroni.jpg"
          }
      ]
  }
];