import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFDownloadLink,
  Font,
} from "@react-pdf/renderer";

// Register font
Font.register({
  family: "Inter",
  fonts: [
    {
      src: "https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfMZg.ttf",
      fontWeight: 400,
    },
    {
      src: "https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuI6fMZg.ttf",
      fontWeight: 700,
    },
  ],
});

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#ffffff",
    padding: 30,
    fontFamily: "Inter",
  },
  section: {
    margin: 10,
    padding: 10,
  },
  header: {
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  title: {
    fontSize: 16,
    color: "#4B5563",
    marginBottom: 10,
  },
  contact: {
    fontSize: 10,
    marginBottom: 5,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    backgroundColor: "#F3F4F6",
    padding: 5,
  },
  sectionContent: {
    marginBottom: 15,
  },
  experienceTitle: {
    fontSize: 12,
    fontWeight: "bold",
  },
  experienceSubtitle: {
    fontSize: 10,
    color: "#4B5563",
    marginBottom: 5,
  },
  experienceDescription: {
    fontSize: 10,
    marginBottom: 5,
  },
  skillsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 10,
  },
  skill: {
    fontSize: 10,
    backgroundColor: "#EFF6FF",
    borderRadius: 2,
    padding: "3 6",
    margin: 2,
  },
});

// Create Document Component
const CV = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.name}>Rami Abdelhamid</Text>
        <Text style={styles.title}>Full-Stack Web Developer</Text>
        <Text style={styles.contact}>
          Email: rami@gmail.com | Phone: +962785956180 | Location: Jordan, Zarqa
        </Text>
        <Text style={styles.contact}>
          https://github.com/RamiAbdelhamid | LinkedIn:
          linkedin.com/in/alexmorgan
        </Text>
      </View>

      {/* Summary */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Summary</Text>
        <Text style={styles.experienceDescription}>
          Passionate Full-Stack Web Developer with expertise in HTML, CSS,
          JavaScript, React, Node.js, PostgreSQL, MongoDB, Next.js, and Odoo.
          Committed to creating seamless, responsive, and user-friendly web
          experiences through clean, maintainable code.
        </Text>
      </View>

      {/* Skills */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Technical Skills</Text>

        <Text style={{ ...styles.experienceTitle, marginBottom: 5 }}>
          Frontend:
        </Text>
        <View style={styles.skillsContainer}>
          <Text style={styles.skill}>HTML5</Text>
          <Text style={styles.skill}>CSS3</Text>
          <Text style={styles.skill}>JavaScript</Text>
          <Text style={styles.skill}>React</Text>
          <Text style={styles.skill}>Next.js</Text>
          <Text style={styles.skill}>Tailwind CSS</Text>
          <Text style={styles.skill}>Redux</Text>
        </View>

        <Text style={{ ...styles.experienceTitle, marginBottom: 5 }}>
          Backend:
        </Text>
        <View style={styles.skillsContainer}>
          <Text style={styles.skill}>Node.js</Text>
          <Text style={styles.skill}>Express</Text>
          <Text style={styles.skill}>RESTful APIs</Text>
          <Text style={styles.skill}>GraphQL</Text>
          <Text style={styles.skill}>Authentication</Text>
        </View>

        <Text style={{ ...styles.experienceTitle, marginBottom: 5 }}>
          Database:
        </Text>
        <View style={styles.skillsContainer}>
          <Text style={styles.skill}>PostgreSQL</Text>
          <Text style={styles.skill}>MongoDB</Text>
          <Text style={styles.skill}>SQL</Text>
          <Text style={styles.skill}>Database Design</Text>
        </View>

        <Text style={{ ...styles.experienceTitle, marginBottom: 5 }}>
          Tools & Others:
        </Text>
        <View style={styles.skillsContainer}>
          <Text style={styles.skill}>Git</Text>
          <Text style={styles.skill}>Docker</Text>
          <Text style={styles.skill}>Odoo ERP</Text>
          <Text style={styles.skill}>AWS</Text>
          <Text style={styles.skill}>CI/CD</Text>
        </View>
      </View>

      {/* Experience */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Professional Experience</Text>

        <View style={styles.sectionContent}>
          <Text style={styles.experienceTitle}>
            Senior Full-Stack Developer
          </Text>
          <Text style={styles.experienceSubtitle}>
            TechSolutions Inc., San Francisco, CA | January 2022 - Present
          </Text>
          <Text style={styles.experienceDescription}>
            • Developed and maintained multiple web applications using React,
            Node.js, and PostgreSQL
          </Text>
          <Text style={styles.experienceDescription}>
            • Implemented Next.js for server-side rendering, improving
            performance and SEO
          </Text>
          <Text style={styles.experienceDescription}>
            • Led a team of 5 developers, providing technical guidance and code
            reviews
          </Text>
          <Text style={styles.experienceDescription}>
            • Reduced application load time by 40% through performance
            optimization techniques
          </Text>
        </View>

        <View style={styles.sectionContent}>
          <Text style={styles.experienceTitle}>Full-Stack Developer</Text>
          <Text style={styles.experienceSubtitle}>
            WebCraft Studios, San Jose, CA | March 2019 - December 2021
          </Text>
          <Text style={styles.experienceDescription}>
            • Built RESTful APIs using Node.js and Express for various client
            projects
          </Text>
          <Text style={styles.experienceDescription}>
            • Designed and implemented MongoDB schemas for scalable data storage
          </Text>
          <Text style={styles.experienceDescription}>
            • Created responsive user interfaces with React and Tailwind CSS
          </Text>
          <Text style={styles.experienceDescription}>
            • Integrated Odoo ERP systems for e-commerce and business management
            solutions
          </Text>
        </View>

        <View style={styles.sectionContent}>
          <Text style={styles.experienceTitle}>Frontend Developer</Text>
          <Text style={styles.experienceSubtitle}>
            Digital Innovations, Oakland, CA | June 2017 - February 2019
          </Text>
          <Text style={styles.experienceDescription}>
            • Developed responsive websites using HTML, CSS, and JavaScript
          </Text>
          <Text style={styles.experienceDescription}>
            • Collaborated with designers to implement UI/UX improvements
          </Text>
          <Text style={styles.experienceDescription}>
            • Maintained and updated existing web applications
          </Text>
        </View>
      </View>

      {/* Education */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Education</Text>
        <View style={styles.sectionContent}>
          <Text style={styles.experienceTitle}>
            Bachelor of Science in Computer Science
          </Text>
          <Text style={styles.experienceSubtitle}>
            University of California, Berkeley | 2013 - 2017
          </Text>
        </View>
      </View>
    </Page>
  </Document>
);

// PDF Download Component
const CVDownload = () => (
  <PDFDownloadLink document={<CV />} fileName="Rami Abdelhamid- Full Stack Web Developer.pdf">
    {({ blob, url, loading, error }) =>
      loading ? "Loading document..." : "Download CV"
    }
  </PDFDownloadLink>
);

export default CVDownload;
