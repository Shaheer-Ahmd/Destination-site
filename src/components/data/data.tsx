const Destinations: {
  id: number;
  name: string;
  image: string;
  description: string;
}[] = [
  {
    id: 1,
    name: "Machu Picchu",
    image:
      "https://images.unsplash.com/photo-1526392060635-9d6019884377?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    description: `Machu Picchu is a 15th-century Inca citadel situated on a mountain ridge 2,430 metres (7,970 ft) above sea level. It is located in the Cusco Region, Urubamba Province, Machupicchu District in Peru, above the Sacred Valley, which is 80 kilometres (50 mi) northwest of Cuzco and through which the Urubamba River flows.`,
  },
  {
    id:2,
    name:"Hawaii",
    image: "https://images.unsplash.com/photo-1598135753163-6167c1a1ad65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80",
    description:`Hawaii is a state of the United States of America. It is the only U.S. state located in Oceania and the only one composed entirely of islands. It is the northernmost island group in Polynesia, occupying most of an archipelago in the central Pacific Ocean. Hawaii is the 8th-smallest, the 11th-least populous, and the 13th-least densely populated of the 50 United States. The state capital and largest city is Honolulu on the island of Oʻahu. `,
  }
];

const Flights: {
  id: number;
  name: string;
  time: string;
}[] = [
  {
    id: 1,
    name: "Flight 1",
    time: "10:00 AM",
  },
  {
    id: 2,
    name: "Flight 2",
    time: "12:00 PM",
  },
];

export { Destinations, Flights };