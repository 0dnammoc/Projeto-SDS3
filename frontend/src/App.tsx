import DataTable from "components/dataTable";
import Footer from "components/footer";
import NavBar from "components/navbar";
import { Fragment } from "react";


function App() {
  return (
    <>
    <NavBar />
    <div className="container">
      <h1 className="text-primary">Olá Mundo</h1>
    </div>
    <DataTable />
    <Footer />
    </>
  );
}

export default App;
