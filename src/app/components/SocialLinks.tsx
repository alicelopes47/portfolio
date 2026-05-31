import { LiaGithub, LiaLinkedin, LiaFileArchive } from 'react-icons/lia';
import { IoLogoWhatsapp } from 'react-icons/io';
import { LinkWithAlert } from './LinkWithAlert';
import { PDFViewer, PDFDownloadLink } from './pdf-client';
import { useWorkExperience } from '../context/WorkExperienceContext';
import { useUserPreferences } from '../context/UserPreferencesProvider.tsx';
import MyDocument from './Curriculum';
import { useAmplitudeContext } from '../context/AmplitudeContext';

interface SocialLinksProps {
  showPdf: boolean;
  setShowPdf: (value: boolean) => void;
}

export function SocialLinks({ showPdf, setShowPdf }: SocialLinksProps) {
  const { experiences, loading } = useWorkExperience();
  const { trackAmplitudeEvent } = useAmplitudeContext();
  const { isEnUs } = useUserPreferences();

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
          href="https://wa.me/5561992718410"
          icon={<IoLogoWhatsapp className="md:ml-1 text-3xl text-icons" />}
          message="WhatsApp"
        />
        <LinkWithAlert
          href="#curriculum"
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            setShowPdf(true);
            trackAmplitudeEvent('clicked', {
              text: 'Um usuário clicou para ver o currículo!',
            });
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
                  <MyDocument experiences={experiences} isEnUs={isEnUs} />
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
                  document={
                    <MyDocument experiences={experiences} isEnUs={isEnUs} />
                  }
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
