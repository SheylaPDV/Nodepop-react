import ProductsPage from "./components/products/ProductsPage.js";
import Button from "./components/products/common/button.js";

function App() {
  return (
    <div className="App">
      <ProductsPage/>
      <Button variant="primary">Primary</Button>
      <Button>Normal</Button>
      <Button disabled>Normal</Button>
    </div>
  );
}

export default App;
