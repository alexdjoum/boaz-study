export interface Step {
  id: number;
  title: string;
  description?: string;
}

export interface PdfDocument {
  fileName: string;
  date: string;
  reference: string;
  address: string;
  clientName: string;
  clientDetails: string;
  amount: string;
  status: string;
  url?: string;
}

export interface PdfViewerCardProps {
  document: PdfDocument;
  onDownload?: () => void;
  onSettings?: () => void;
  onPreview?: () => void;
}