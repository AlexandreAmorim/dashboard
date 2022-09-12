import { SummaryContainer, SummaryCard } from "./styles";
import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from "phosphor-react";

export function Summary() {
  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00875F" />
        </header>

        <strong>R$ 17.400,00</strong>
      </SummaryCard>
      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#7A1921" />
        </header>

        <strong>R$ 17.400,00</strong>
      </SummaryCard>
      <SummaryCard color="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#00875F" />
        </header>

        <strong>R$ 17.400,00</strong>
      </SummaryCard>
    </SummaryContainer>
  );
}
