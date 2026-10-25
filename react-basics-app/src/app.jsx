import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
<div className="page">
   <Header />

   <div className="card-grid">
     <Card
       title="Favorite Game"
       description="I love Minecraft because I can build houses, explore new worlds, and turn my imagination into something real."
     />
     <Card
       title="Favorite Food"
       description="Pizza is my favorite food because it is cheesy, delicious, and comes in so many fun flavors."
     />
     <Card
       title="Favorite Hobby"
       description="I enjoy coding because I can create projects, solve problems, and learn something exciting every time."
     />
   </div>

   <Footer />
</div>
  );
}

export default App;