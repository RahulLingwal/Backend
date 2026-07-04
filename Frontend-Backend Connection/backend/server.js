import express from "express"; //module js syntax

const app = express();

app.get("/api/salesranking", (req, res) => {
  const data = [
    { position: 1, brand: "Maruti Suzuki", Country: "Japan" },
    { position: 2, brand: "Tata", Country: "India" },
    { position: 3, brand: "Mahindra", Country: "India" },
    { position: 4, brand: "Hyundai", Country: "South Korea" },
    { position: 5, brand: "Toyota", Country: "Japan" },
    { position: 6, brand: "Kia", Country: "South Korea" },
    { position: 7, brand: "VW Group", Country: "Germany" },
    { position: 8, brand: "Morris Garages", Country: "China" },
    { position: 9, brand: "Honda", Country: "Japan" },
    { position: 10, brand: "Renault", Country: "France" },
  ];

  res.send(data);
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
