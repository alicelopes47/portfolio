import { LiaGithub, LiaLinkedin, LiaFileArchive } from 'react-icons/lia';
import { LinkWithAlert } from './LinkWithAlert';
import { useState } from 'react';
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
  PDFDownloadLink,
} from '@react-pdf/renderer';
import { CareerType } from '../Domain';
import { useCareer } from '../context/CareerContext';

import { useUserPreferences } from '../context/UserPreferencesProvider.tsx';

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
    fontSize: 30,
    marginBottom: 10,
    textAlign: 'left',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 10,
    marginBottom: 5,
  },
  careerItem: {
    marginBottom: 15,
    borderBottom: '1pt solid #DDDDDD',
  },
  careerTitle: {
    fontWeight: 'bold',
    fontSize: 10,
  },
  careerHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
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
          <Text style={styles.subtitle}>
            {isEnUs ? 'Experience' : 'Experiência'}
          </Text>
          {careerItems.map((item, idx) => (
            <View key={idx.toString()} style={styles.careerItem}>
              <View style={styles.careerHeader}>
                <Text style={styles.careerTitle}>
                  {isEnUs ? item.textUs : item.text}
                </Text>
                <Text style={styles.text}>
                  {isEnUs ? item.dateUs : item.date}
                </Text>
              </View>
              <Text style={styles.text}>
                {isEnUs ? item.finaldescriptionUs : item.finaldescription}
              </Text>
              <Text style={styles.text}>{item.description}</Text>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
};

export function SocialLinks() {
  const { career, loading } = useCareer();
  const { isEnUs } = useUserPreferences();
  const [showPdf, setShowPdf] = useState(false);

  return (
    <>
      <div
        data-aos="fade-up"
        className="flex rounded-md flex-col z-50 md:p-4 p-2 gap-4 bg-[#c946f117] fixed md:bottom-14 bottom-0 md:left-5 left-0"
      >
        <LinkWithAlert
          href="https://www.linkedin.com/in/alicelopes47/"
          icon={<LiaLinkedin className="md:text-4xl text-3xl text-icons" />}
          message="Linkedin"
        />
        <LinkWithAlert
          href="https://github.com/alicelopes47"
          icon={<LiaGithub className="md:text-4xl text-3xl text-icons" />}
          message="Github"
        />
        <LinkWithAlert
          href="#curriculum"
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            setShowPdf(true);
          }}
          icon={<LiaFileArchive className="md:text-4xl text-3xl text-icons" />}
          message="Currículo"
        />
      </div>

      {showPdf && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-white p-4 rounded-lg w-full max-w-4xl h-[90vh] flex flex-col">
            <div className="flex justify-between mb-4">
              <h2 className="text-xl font-bold">Currículo</h2>
              <button onClick={() => setShowPdf(false)} className="text-2xl">
                &times;
              </button>
            </div>
            <div className="flex-grow">
              {!loading ? (
                <PDFViewer className="w-full h-full">
                  <MyDocument career={career} isEnUs={isEnUs} />
                </PDFViewer>
              ) : (
                <div className="flex justify-center items-center h-full">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-primary"></div>
                </div>
              )}
            </div>
            <div className="mt-4 text-center">
              {!loading && (
                <PDFDownloadLink
                  document={<MyDocument career={career} isEnUs={isEnUs} />}
                  fileName="alice_lopes_cv.pdf"
                  className="px-4 py-2 bg-primary text-white rounded inline-block no-underline hover:bg-opacity-90"
                >
                  {({ loading: pdfLoading, error }) =>
                    pdfLoading ? 'Gerando PDF...' : 'Baixar PDF'
                  }
                </PDFDownloadLink>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
