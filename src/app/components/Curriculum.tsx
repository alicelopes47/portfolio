'use client';

import { Document, Page, Text, View, StyleSheet } from './pdf-client';
import { WorkExperienceType } from '../Domain';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 36,
    paddingVertical: 30,
  },
  header: {
    marginBottom: 12,
  },
  title: {
    fontSize: 28,
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#555555',
  },
  divider: {
    borderBottom: '1pt solid #DDDDDD',
    marginBottom: 14,
  },
  body: {
    flexDirection: 'row',
    gap: 20,
  },
  leftCol: {
    flex: 1,
    paddingRight: 16,
    borderRight: '1pt solid #EEEEEE',
  },
  rightCol: {
    width: 140,
    flexShrink: 0,
    paddingLeft: 12,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#CF96DF',
    marginBottom: 10,
    letterSpacing: 0.8,
  },
  careerItem: {
    marginBottom: 14,
  },
  careerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 2,
  },
  careerCompany: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  careerPeriod: {
    fontSize: 11,
    color: '#888888',
  },
  careerRole: {
    fontSize: 11,
    color: '#555555',
    marginBottom: 5,
  },
  bulletRow: {
    flexDirection: 'row',
    marginBottom: 3,
    paddingLeft: 2,
  },
  bulletDot: {
    fontSize: 11,
    marginRight: 4,
    color: '#CF96DF',
  },
  bulletText: {
    fontSize: 11,
    color: '#333333',
    flex: 1,
    lineHeight: 1.4,
  },
  techRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 5,
  },
  techBadge: {
    fontSize: 10,
    color: '#666666',
    borderRadius: 3,
    paddingHorizontal: 4,
    paddingVertical: 2,
    border: '1pt solid #DDDDDD',
    marginRight: 3,
    marginBottom: 3,
  },
  skillItem: {
    marginBottom: 3,
  },
  skillName: {
    fontSize: 10,
    color: '#686868',
  },
  summarySection: {
    marginTop: 16,
    paddingTop: 12,
    borderTop: '1pt solid #DDDDDD',
  },
  summaryText: {
    fontSize: 11,
    lineHeight: 1.6,
    textAlign: 'justify',
    color: '#333333',
  },
});

interface MyDocumentProps {
  experiences: WorkExperienceType[];
  isEnUs: boolean;
}

const MyDocument = ({ experiences, isEnUs }: MyDocumentProps) => {
  const experienceItems = experiences || [];

  const allSkills = [
    isEnUs ? 'English' : 'Inglês',
    ...Array.from(
      new Set(experienceItems.flatMap((exp) => exp.techstack ?? []))
    ),
  ];

  const resumeEnglish = `With a background in Systems Analysis and Development from the Institute of Higher Education of Brasília (IESB), I am a passionate and highly proactive Front-End Developer dedicated to crafting exceptional user experiences. Throughout my career, I have cultivated a strong product mindset, taking ownership of the development lifecycle to ensure interface consistency, efficiency, and high quality. I take a deeply analytical approach to problem-solving, always anticipating potential issues and championing robust solutions. Recognized for my resilience and initiative, I thrive in dynamic environments where I can overcome challenges effectively. I am a continuous learner, constantly adapting to new methodologies and best practices to elevate team performance and deliver impactful results.`;

  const resumePortuguese = `Com formação em Análise e Desenvolvimento de Sistemas pelo Instituto de Educação Superior de Brasília (IESB), sou uma desenvolvedora Front-End apaixonada e altamente proativa, dedicada a criar experiências de usuário excepcionais. Ao longo da minha trajetória, desenvolvi uma forte mentalidade de produto (product mindset), assumindo a responsabilidade sobre o ciclo de vida do desenvolvimento para garantir consistência, eficiência e alta qualidade nas interfaces. Adoto uma postura profundamente analítica na resolução de problemas, sempre antecipando possíveis obstáculos e promovendo soluções robustas. Reconhecida pela minha resiliência e iniciativa, destaco-me em ambientes dinâmicos onde posso superar desafios de forma eficaz. Movida pelo aprendizado contínuo, busco me adaptar constantemente a novas metodologias e melhores práticas para elevar o desempenho da equipe e entregar resultados de alto impacto.`;

  return (
    <Document>
      <Page size="A4" style={styles.page} wrap={false}>
        <View style={styles.header}>
          <Text style={styles.title}>Alice Lopes</Text>
          <Text style={styles.headerSubtitle}>
            {isEnUs
              ? 'Pleno Frontend Developer'
              : 'Desenvolvedora Frontend Pleno'}
          </Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.body}>
          <View style={styles.leftCol}>
            <Text style={styles.sectionTitle}>
              {isEnUs ? 'Experience' : 'Experiências'}
            </Text>

            {experienceItems.map((item, idx) => {
              const role = isEnUs ? item.roleus : item.role;
              const period = isEnUs ? item.periodus : item.period;
              const responsibilities = isEnUs
                ? item.responsibilitieus
                : item.responsibilities;

              return (
                <View key={idx.toString()} style={styles.careerItem}>
                  <View style={styles.careerHeader}>
                    <Text style={styles.careerCompany}>{item.company}</Text>
                    <Text style={styles.careerPeriod}>{period}</Text>
                  </View>
                  <Text style={styles.careerRole}>{role}</Text>

                  {responsibilities?.map((resp, i) => (
                    <View key={i} style={styles.bulletRow}>
                      <Text style={styles.bulletDot}>•</Text>
                      <Text style={styles.bulletText}>{resp}</Text>
                    </View>
                  ))}

                  {item.techstack && item.techstack.length > 0 && (
                    <View style={styles.techRow}>
                      {item.techstack.map((tech, i) => (
                        <Text key={i} style={styles.techBadge}>
                          {tech}
                        </Text>
                      ))}
                    </View>
                  )}
                </View>
              );
            })}
          </View>

          <View style={styles.rightCol}>
            <Text style={styles.sectionTitle}>
              {isEnUs ? 'Skills' : 'Habilidades'}
            </Text>
            {allSkills.map((skill, idx) => (
              <View key={idx.toString()} style={styles.skillItem}>
                <Text style={styles.skillName}>{skill}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.summarySection}>
          <Text style={styles.sectionTitle}>
            {isEnUs ? 'Summary' : 'Resumo'}
          </Text>
          <Text style={styles.summaryText}>
            {isEnUs ? resumeEnglish : resumePortuguese}
          </Text>
        </View>
      </Page>
    </Document>
  );
};

export default MyDocument;
