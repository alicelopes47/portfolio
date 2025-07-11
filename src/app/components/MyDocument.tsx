'use client';

import { Document, Page, Text, View, StyleSheet } from './pdf-client';
import { CareerType } from '../Domain';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 30,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
  },
  careerItem: {
    marginBottom: 15,
    padding: 10,
    borderBottom: '1pt solid #DDDDDD',
  },
});

interface MyDocumentProps {
  career: CareerType[];
  isEnUs: boolean;
}

const MyDocument = ({ career, isEnUs }: MyDocumentProps) => {
  // Use o operador de coalescência nulo para garantir que career seja sempre um array
  const careerItems = career || [];

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.title}>Alice Lopes</Text>
          <Text style={styles.subtitle}>
            {isEnUs ? 'Frontend Developer' : 'Desenvolvedora Frontend'}
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.subtitle}>{isEnUs ? 'Career' : 'Carreira'}</Text>
          {careerItems.map((item, idx) => (
            <View key={idx.toString()} style={styles.careerItem}>
              <Text style={styles.text}>
                {isEnUs ? item.textUs : item.text}
              </Text>
              <Text style={styles.text}>
                {isEnUs ? item.dateUs : item.date}
              </Text>
              <Text style={styles.text}>
                {isEnUs ? item.finaldescriptionUs : item.finaldescription}
              </Text>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
};

export default MyDocument;
