export type Certification = {
  title: string;
  issuer: string;
  issueDate?: string;
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  documentUrl?: string;
  skills?: string[];
  tags?: string[];
  image?: string;
  imageAlt?: string;
  status?: 'active' | 'expired' | 'revoked';
};
export const certifications: Certification[] = [
  {
    title: 'SKILL’UP IT — Cybersécurité et architecture réseau',
    issuer: 'EMAN Aerospace / Université Cadi Ayyad',
    issueDate: '2026',
    tags: ['Formation', 'Cybersécurité'],
  },
  {
    title: 'Introduction to Front-End Development',
    issuer: 'Meta · Coursera',
    issueDate: '2024-06',
    credentialId: '7DGPWA2ZY8NJ',
    credentialUrl: 'https://coursera.org/verify/7DGPWA2ZY8NJ',
    image: '/certs/meta-front-end.webp',
    imageAlt:
      'Certificat Meta Introduction to Front-End Development de Yasser Boudad',
    tags: ['Web'],
  },
  {
    title: 'Introduction to Web Development with HTML, CSS, JavaScript',
    issuer: 'IBM · Coursera',
    issueDate: '2023-01',
    credentialId: 'PFBP3L2CMD8P',
    credentialUrl: 'https://coursera.org/verify/PFBP3L2CMD8P',
    image: '/certs/ibm-web-development.webp',
    imageAlt: 'Certificat IBM de développement web de Yasser Boudad',
    tags: ['Web'],
  },
  {
    title: 'Getting Started with Git and GitHub',
    issuer: 'IBM · Coursera',
    issueDate: '2023-12',
    credentialId: '94CWJ7UCBQVP',
    credentialUrl: 'https://coursera.org/verify/94CWJ7UCBQVP',
    image: '/certs/ibm-git-github.webp',
    imageAlt: 'Certificat IBM Git et GitHub de Yasser Boudad',
    tags: ['Git'],
  },
  {
    title: 'C for Everyone, Part 2: Structured Programming (Honors)',
    issuer: 'UC Santa Cruz · Coursera',
    issueDate: '2024-02',
    credentialId: 'NHP962799K43',
    credentialUrl: 'https://coursera.org/verify/NHP962799K43',
    image: '/certs/c-structured-programming.webp',
    imageAlt:
      'Certificat avec distinction de programmation structurée en C de Yasser Boudad',
    tags: ['Programmation', 'C'],
  },
  {
    title: 'C for Everyone, Part 1: Programming Fundamentals',
    issuer: 'UC Santa Cruz · Coursera',
    issueDate: '2023-10',
    credentialId: 'NEG6Y85HD56B',
    credentialUrl: 'https://coursera.org/verify/NEG6Y85HD56B',
    image: '/certs/c-programming-fundamentals.webp',
    imageAlt:
      'Certificat des fondamentaux de programmation en C de Yasser Boudad',
    tags: ['Programmation', 'C'],
  },
  {
    title: 'Fondamentaux et Concepts Avancés de la Programmation Java',
    issuer: 'MLIAEdu',
    issueDate: '2026-09',
    credentialId: '6-f07bffda-835d-4810-99a5-abb5c41d64eb-048605',
    image: '/certs/java-fondamentaux-avances.webp',
    imageAlt:
      'Certification professionnelle Java de BOUDAD Yasser délivrée par MLIAEdu',
    documentUrl: '/certs/java-fondamentaux-avances.pdf',
    tags: ['Programmation', 'Java'],
  },
  {
    title: 'Hibernate & JPA',
    issuer: 'MLIAEdu',
    issueDate: '2026-10',
    image: '/certs/hibernate-jpa.webp',
    imageAlt:
      'Certification professionnelle Hibernate et JPA de BOUDAD Yasser délivrée par MLIAEdu',
    documentUrl: '/certs/hibernate-jpa.pdf',
    tags: ['Java', 'JEE', 'Hibernate', 'JPA'],
  },
];
