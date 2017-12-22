const products = [
  {
    "index": 0,
    "category": "Guitars",
    "subcategory": "Electro",
    "name": "occaecat veniam",
    "model": "X683",
    "price": 775,
    "description": "Veniam aliqua incididunt nulla sint sit do ullamco magna. Sit aliqua dolor eu veniam incididunt excepteur excepteur. Exercitation ipsum duis Lorem non laboris sit minim dolore consequat officia."
  },
  {
    "index": 1,
    "category": "Combo",
    "subcategory": "Hybrid",
    "name": "consequat dolor",
    "model": "B164",
    "price": 135,
    "description": "Est non commodo elit velit do exercitation pariatur eiusmod anim ad deserunt. Laborum velit ipsum fugiat ad qui proident laboris. Sint qui qui amet ipsum culpa fugiat sit ut laboris aliquip irure tempor."
  },
  {
    "index": 2,
    "category": "Guitars",
    "subcategory": "Acoustic",
    "name": "Gibson Les Paul",
    "model": "C100",
    "price": 171,
    "description": "Excepteur non voluptate enim esse commodo voluptate veniam pariatur. Ut exercitation deserunt est non adipisicing adipisicing fugiat excepteur qui fugiat. Incididunt exercitation ea voluptate minim laboris minim anim ipsum deserunt."
  },
  {
    "index": 3,
    "category": "Pedals",
    "subcategory": "Chorus",
    "name": "tempor irure",
    "model": "X522",
    "price": 825,
    "description": "Irure adipisicing mollit incididunt velit excepteur ipsum exercitation irure commodo. Culpa officia mollit deserunt aute. Duis anim mollit enim occaecat cillum nulla aute veniam velit aute aliqua exercitation fugiat."
  },
  {
    "index": 4,
    "category": "Combo",
    "subcategory": "Transistor",
    "name": "dolor Lorem",
    "model": "X893",
    "price": 988,
    "description": "Adipisicing deserunt aliquip et adipisicing. Laborum excepteur deserunt labore adipisicing do laborum irure anim qui occaecat ad veniam. Sit ut velit voluptate occaecat fugiat adipisicing mollit officia ipsum ea excepteur non."
  },
  {
    "index": 5,
    "category": "Combo",
    "subcategory": "Transistor",
    "name": "est in",
    "model": "C650",
    "price": 202,
    "description": "Sint aliquip eiusmod adipisicing consequat reprehenderit officia excepteur tempor eu labore ex dolor. Eu sunt duis pariatur dolore quis. Aliqua velit culpa magna aliquip aliquip deserunt do pariatur deserunt anim non cillum."
  },
  {
    "index": 6,
    "category": "Guitars",
    "subcategory": "Bass",
    "name": "labore adipisicing",
    "model": "X898",
    "price": 242,
    "description": "Esse eu fugiat minim enim amet cupidatat labore enim voluptate commodo irure magna. Sint anim do incididunt et proident. Duis cupidatat quis tempor do exercitation ullamco."
  },
  {
    "index": 7,
    "category": "Guitars",
    "subcategory": "Classic",
    "name": "pariatur ipsum",
    "model": "Z572",
    "price": 719,
    "description": "Laboris eiusmod Lorem nisi non cillum do ipsum consequat dolore. Sint minim consectetur laboris ipsum et anim tempor dolore excepteur eu. Culpa commodo occaecat ut reprehenderit nulla et excepteur esse anim tempor aute."
  },
  {
    "index": 8,
    "category": "Guitars",
    "subcategory": "Electro",
    "name": "aliquip amet",
    "model": "X580",
    "price": 849,
    "description": "Non consectetur excepteur ipsum esse dolor culpa non cupidatat officia consectetur enim consectetur. Eiusmod proident nostrud incididunt nulla eiusmod anim anim incididunt aliqua fugiat. Ut commodo ex amet veniam non eiusmod esse adipisicing non."
  },
  {
    "index": 9,
    "category": "Guitars",
    "subcategory": "Electro",
    "name": "sunt adipisicing",
    "model": "C164",
    "price": 617,
    "description": "Sint cupidatat in non officia ex ipsum labore ullamco irure id. Ipsum laborum do commodo enim ea non qui non eiusmod Lorem. Nostrud aute do tempor tempor culpa consequat."
  },
  {
    "index": 10,
    "category": "Combo",
    "subcategory": "Lamp",
    "name": "mollit eiusmod",
    "model": "Z459",
    "price": 311,
    "description": "Sint culpa cillum minim est in amet ex Lorem culpa proident reprehenderit culpa fugiat sit. Esse veniam qui consectetur laboris reprehenderit labore dolore nostrud consequat ex reprehenderit eu Lorem ad. Sunt sint enim incididunt irure exercitation."
  },
  {
    "index": 11,
    "category": "Guitars",
    "subcategory": "Electro",
    "name": "reprehenderit proident",
    "model": "X859",
    "price": 561,
    "description": "Amet aute excepteur aliqua laborum. Pariatur eiusmod cupidatat sunt ut eiusmod ipsum esse sint dolore mollit laborum. Aliquip ad ad anim est quis non qui tempor irure adipisicing officia enim."
  },
  {
    "index": 12,
    "category": "Guitars",
    "subcategory": "Electro",
    "name": "sunt proident",
    "model": "C585",
    "price": 413,
    "description": "Ut laborum id nulla sit id reprehenderit labore ullamco sunt aliqua proident dolore eu sint. Sunt consectetur irure amet voluptate ea in proident. Sunt consequat fugiat eu esse deserunt sint dolore ea veniam adipisicing nisi incididunt."
  },
  {
    "index": 13,
    "category": "Pedals",
    "subcategory": "Wah-Wah",
    "name": "do in",
    "model": "X782",
    "price": 556,
    "description": "Do velit nulla et nostrud incididunt cillum sit quis tempor anim sint est. Non velit dolor aliqua dolore aute consectetur aliqua esse laborum esse qui. Lorem cupidatat voluptate non nisi sit tempor veniam deserunt sit exercitation fugiat voluptate ex."
  },
  {
    "index": 14,
    "category": "Combo",
    "subcategory": "Transistor",
    "name": "culpa excepteur",
    "model": "Z946",
    "price": 104,
    "description": "Elit fugiat enim ut ut nostrud consequat occaecat. Lorem quis esse est culpa sit. Proident deserunt dolore exercitation et id enim veniam aliqua mollit."
  },
  {
    "index": 15,
    "category": "Pedals",
    "subcategory": "Delay",
    "name": "fugiat labore",
    "model": "X102",
    "price": 769,
    "description": "Cillum exercitation anim cupidatat aliqua irure labore proident sint anim reprehenderit tempor consequat laborum esse. Aute id elit aliquip cillum qui esse. Laborum est labore id sit irure mollit ad elit mollit laboris est excepteur enim consectetur."
  },
  {
    "index": 16,
    "category": "Guitars",
    "subcategory": "Acoustic",
    "name": "culpa nostrud",
    "model": "B533",
    "price": 765,
    "description": "Dolor elit ut ipsum sint laborum ipsum. Fugiat esse occaecat eu eiusmod magna do et incididunt. Veniam do adipisicing commodo velit nulla adipisicing id velit."
  }
];

export { products };