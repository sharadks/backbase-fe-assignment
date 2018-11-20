export interface Transaction {
  transactionDate: Date;
  merchantLogo: string;
  merchant: string;
  transactionType?: string;
  amount: number;
}
