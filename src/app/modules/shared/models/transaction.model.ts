export interface Transaction {
  transactionDate: number;
  merchantLogo: string;
  merchant: string;
  transactionType?: string;
  amount: number;
}
