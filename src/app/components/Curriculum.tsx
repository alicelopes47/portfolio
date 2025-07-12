'use client';

import { Document, Page, Text, View, StyleSheet } from './pdf-client';
import { CareerType, SkillsType } from '../Domain';

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
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 10,
    marginBottom: 5,
  },
  careerItem: {
    marginBottom: 15,
    borderBottom: '1pt solid #DDDDDD',
  },
  skillItem: {
    marginBottom: 3,
  },
  starsContainer: {
    flexDirection: 'row',
  },
  starContainer: {
    position: 'relative',
    width: 15,
    height: 5,
    marginRight: 3,
  },
  starPoints: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  starFilled: {
    backgroundColor: '#CF96DF',
  },
  starEmpty: {
    backgroundColor: '#E5E7EB',
  },
  proficiencyText: {
    fontSize: 10,
    color: '#666666',
    marginTop: 2,
  },
});

const Star = ({ filled = false }: { filled?: boolean }) => {
  return (
    <View style={styles.starContainer}>
      <View
        style={[
          styles.starPoints,
          filled ? styles.starFilled : styles.starEmpty,
        ]}
      />
    </View>
  );
};

const SkillRating = ({ proficiency }: { proficiency: number }) => {
  const starCount = Math.round(proficiency / 20);

  return (
    <View style={styles.starsContainer}>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star key={star} filled={star <= starCount} />
      ))}
    </View>
  );
};

interface MyDocumentProps {
  career: CareerType[];
  isEnUs: boolean;
  skills: SkillsType[];
}

const MyDocument = ({ career, skills, isEnUs }: MyDocumentProps) => {
  const careerItems = career || [];
  const skillsItems = skills || [];

  // Detailed resume text in English
  const resumeEnglish = `Graduated in Systems Analysis and Development at the Institute of Higher Education of Brasília (IESB), a passionate Front-End developer with a lot of experience and robust knowledge. 
  Recently, I have been working with development frameworks such as ReactJs and NextJs. During my experience, I have acquired solid skills in Frontend development, focusing on creating intuitive and responsive user interfaces. I have also gained experience with design systems and component documentation using Storybook to ensure consistency and efficiency in interface development. Additionally, I possess expertise in unit testing and end-to-end testing, ensuring the quality and robustness of the developed code. I also have experience with automation and monitoring using CI/CD. I continuously seek to learn and stay updated on new technologies and best development practices, aiming to contribute significantly to the projects I am involved in.
  I am a resilient professional, with focus and proactive initiative, looking to overcome challenges and achieve goals efficiently and effectively.`;

  const resumePortuguese = `Formada em Análise e Desenvolvimento de Sistemas no Instituto de Educação Superior de Brasília (IESB), uma desenvolvedora Front-End apaixonada com muita experiência e conhecimento robusto. Durante minha experiência, adquiri habilidades sólidas em desenvolvimento Frontend, focando na criação de interfaces de usuário intuitivas e responsivas. Também obtive experiência com design systems e documentação de componentes usando Storybook para garantir consistência e eficiência no desenvolvimento de interfaces. Além disso, possuo expertise em testes unitários e end-to-end, garantindo a qualidade e robustez do código desenvolvido. Também tenho experiência com automação e monitoramento usando CI/CD. Busco continuamente aprender e me manter atualizada sobre novas tecnologias e melhores práticas de desenvolvimento, visando contribuir significativamente para os projetos em que estou envolvida. Sou uma profissional resiliente, com foco e iniciativa proativa, buscando superar desafios e alcançar objetivos de forma eficiente e eficaz.`;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.title}>Alice Lopes</Text>
          <Text style={styles.subtitle}>
            {isEnUs ? 'Frontend Developer' : 'Desenvolvedora Frontend'}
          </Text>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ ...styles.section, flex: 2 }}>
            <Text style={styles.subtitle}>
              {isEnUs ? 'Career' : 'Carreira'}
            </Text>

            {careerItems.map(
              (item, idx) =>
                item.shouldrenderonpdf !== false && (
                  <View key={idx.toString()} style={styles.careerItem}>
                    <Text style={styles.text}>{item.text}</Text>
                    <Text style={styles.text}>{item.date}</Text>
                    <Text style={styles.text}>{item.finaldescription}</Text>
                  </View>
                )
            )}
          </View>
          <View style={{ ...styles.section, flex: 1 }}>
            <Text style={styles.subtitle}>
              {isEnUs ? 'Skills' : 'Habilidades'}
            </Text>
            {skillsItems.map((item, idx) => {
              const proficiency = item.proficiency;

              return (
                <View key={idx.toString()} style={styles.skillItem}>
                  <Text style={{ ...styles.text, fontSize: 10 }}>
                    {item.name}
                  </Text>
                  <SkillRating proficiency={proficiency} />
                </View>
              );
            })}
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.subtitle}>{isEnUs ? 'Summary' : 'Resumo'}</Text>
          <Text
            style={{ ...styles.text, lineHeight: 1.5, textAlign: 'justify' }}
          >
            {isEnUs ? resumeEnglish : resumePortuguese}
          </Text>
        </View>
      </Page>
    </Document>
  );
};

export default MyDocument;
