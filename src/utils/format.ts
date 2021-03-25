function formatCurrencyPtBR(value: number) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
}

function formatDatePtBR(date: string) {
  return new Intl.DateTimeFormat('pt-BR').format(new Date(date));
}

export { formatCurrencyPtBR, formatDatePtBR };
