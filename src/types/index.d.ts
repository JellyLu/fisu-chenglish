type SentenceType = {
  cn: string;
  en: string;
  sc?: string;
  id?: string;
}

type SectionType = {
  id?: string;
  name: string;
  sentences: SentenceType[];
}