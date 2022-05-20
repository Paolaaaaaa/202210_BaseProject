export class Articulo

{
  id: number;
  name: string;
  collection: string;
  price: number;
  description: number;
  image: string


  constructor
  (
    id: number,
    name: string,
    collection: string,
    price: number,
    description: number,  image: string)
    {
      this.id = id;
      this.name= name;
      this.collection = collection;
      this.price = price;
      this.description = description;

      this.image = image;

    }

  }

