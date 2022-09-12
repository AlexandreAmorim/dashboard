import { useEffect } from "react";
import { Header } from "../components/Header";
import { Summary } from "../components/Summary";
import { Transaction } from "../components/Transaction";

export default function Home() {
  useEffect(() => {
    async function loadTransaction() {
      const response = await fetch("http://localhost:3333/orders");
      const data = await response.json();

      console.log(data);
    }

    loadTransaction();
  }, []);

  return (
    <div>
      <Header />
      <Summary />
      <Transaction />
    </div>
  );
}
