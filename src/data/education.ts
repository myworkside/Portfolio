export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  board: string;
  year: string;
  status: string;
}

export interface LanguageItem {
  language: string;
  proficiency: string;
}

export const education: EducationItem[] = [
  {
    id: 'hs-vocational',
    degree: 'Higher Secondary Examination (10+2)',
    institution: 'W.B.S.C. Vocational Education',
    board: 'West Bengal State Council of Vocational Education & Training',
    year: 'Completed',
    status: 'Passed',
  },
  {
    id: 'madhyamik',
    degree: 'Secondary Examination (10th)',
    institution: 'W.B.B.S.E',
    board: 'West Bengal Board of Secondary Education',
    year: 'Completed',
    status: 'Passed',
  },
];

export const languages: LanguageItem[] = [
  {
    language: 'Bengali',
    proficiency: 'Native / Bilingual Proficiency',
  },
  {
    language: 'English',
    proficiency: 'Professional Working Proficiency',
  },
];
