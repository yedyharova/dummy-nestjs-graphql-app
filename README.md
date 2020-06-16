mutation {
  createClient(client: {
    name: "Olena2"
  }) {
    name, signUpDate
  }
}

mutation {
  updateClient(
    client: {name: "Olena Yedyharova"},
    id: "5ee863993dfeaf4dd5dc41a9") {name, signUpDate}
}

query {
   client(id: "5ee863993dfeaf4dd5dc41a9") {name, signUpDate}
}