'use client';

import dynamic from 'next/dynamic';

// Importando dinamicamente o componente PDF apenas no lado do cliente
export const PDFViewer = dynamic(
  () => import('@react-pdf/renderer').then((mod) => mod.PDFViewer),
  {
    ssr: false, // Isso garante que o componente só será carregado no cliente
  }
);

export const PDFDownloadLink = dynamic(
  () => import('@react-pdf/renderer').then((mod) => mod.PDFDownloadLink),
  {
    ssr: false, // Isso garante que o componente só será carregado no cliente
  }
);

export { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
