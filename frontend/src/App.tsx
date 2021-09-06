import BarChart from "components/BarChart";
import DataTable from "components/dataTable";
import DonutChart from "components/DonutChart";
import Footer from "components/footer";
import NavBar from "components/navbar";
import { Fragment } from "react";


function App() {
  return (
    <>
    <NavBar />
    <div className="container">
      <h1 className="text-primary py-3">Dashboard de Vendas</h1>
      
      <div className="row px-3">
        <div className="cols-sm-6">
          <h5 className="text-center text-secondary">Taxa de sucesso (%)</h5>
          <BarChart />
        </div>
        <div className="cols-sm-6">
          <h5 className="text-center text-secondary">Vendas</h5>
          <DonutChart />
        </div>
      </div>

    </div>

    <div className="py-3">
      <h2 className="text-primary text-center">Todas as Vendas</h2>
    </div>

    <DataTable />
    <Footer />
    </>
  );
}

export default App;
