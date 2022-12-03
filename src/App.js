import products from "./data/items.json";
import { Card } from "./components/Card";
import { Hero } from "./components/Hero";
function App() {
  return (
    <>
      <Hero />
      <div className=" w-full h-full justify-center mt-2">
        <div>
          <img
            className="object-cover w-full"
            src="assets/foto.png"
            alt="personal"
          />
          <div className="bg-slate-200 w-full">
            <h1 className="text-center p-3 text-2xl text-gray-600 font-bold ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem IpsumZ
            </h1>
          </div>
        </div>
      </div>
      <div className="m-4">
        {products.map((cake) => (
          <Card key={cake.id} title={cake.title} personal={cake.image} />
        ))}
      </div>
    </>
  );
}

export default App;
