import { ProjectItem, ImageSlot, SoftwareItem, ExperienceItem } from '../types/portfolio';

export const INITIAL_IMAGE_SLOTS: ImageSlot[] = [
  {
    key: 'hero_banner',
    label: 'Hero Banner Cinematográfico (Operador / Dir. Cena)',
    section: 'Hero Principal',
    currentUrl: '/images/hero_banner.jpg',
    defaultUrl: '/images/hero_banner.jpg',
    altText: 'Maurício Henrique - Filmmaker em ação com equipamento cinematográfico',
    aspectRatio: '16:9 / Landscape',
    notes: 'Exibido no banner principal com corte P&B e contrastes analógicos.'
  },
  {
    key: 'project_aurun',
    label: 'Projeto: AUTISMO RUN',
    section: 'Projetos Selecionados',
    currentUrl: '/images/project_aurun.jpg',
    defaultUrl: '/images/project_aurun.jpg',
    altText: 'Monochrome dynamic running athlete in a high contrast street race at dawn, intense facial expression',
    aspectRatio: '16:9 / 4:3',
    notes: 'Esportivo & Performance em alta velocidade com gimbal e atmosfera ao vivo.'
  },
  {
    key: 'project_cantata',
    label: 'Projeto: CANTATA DE NATAL',
    section: 'Projetos Selecionados',
    currentUrl: '/images/project_cantata.jpg',
    defaultUrl: '/images/project_cantata.jpg',
    altText: 'Monochrome theatrical choir stage under high-contrast spotlight, dramatic shafts of light through haze',
    aspectRatio: '16:9 / 4:3',
    notes: 'Espetáculo teatral sinfônico com sincronização multicâmera.'
  },
  {
    key: 'project_opus',
    label: 'Projeto: R & K — CHÁ REVELAÇÃO',
    section: 'Projetos Selecionados',
    currentUrl: '/images/renatoekarinecha.jpg',
    defaultUrl: '/images/renatoekarinecha.jpg',
    altText: 'Monochrome intimate documentary portrait in clean minimalist interior, hands holding a handwritten letter',
    aspectRatio: '16:9 / 4:3',
    notes: 'Storytelling emocional intimista com luz de janela natural e filme 35mm.'
  },
  {
    key: 'PROJECT_DAVIJOSE',
    label: 'Davi José — Chá Revelação',
    section: 'Sobre / Autoria & Rigor Técnico',
    currentUrl: '/images/mauricio-portrait.jpg',
    defaultUrl: '/images/mauricio-portrait.jpg',
    altText: 'Maurício Henrique em estúdio com câmera de cinema',
    aspectRatio: '4:5 / Vertical Portrait',
    notes: 'Retrato em estúdio com câmera profissional e iluminação lateral.'
  },
  {
    key: 'PROJECT_ALICE15ANOS',
    label: 'Maria Alice - 15 anos',
    section: 'Sobre / Autoria & Rigor Técnico',
    currentUrl: '/images/alice15anos.jpg',
    defaultUrl: '/images/alice15anos.jpg',
    altText: 'Maurício Henrique em estúdio com câmera de cinema',
    aspectRatio: '4:5 / Vertical Portrait',
    notes: 'Retrato em estúdio com câmera profissional e iluminação lateral.'
  },
  {
    key: 'about_portrait',
    label: 'Retrato de Autoria (Maurício Henrique)',
    section: 'Sobre / Autoria & Rigor Técnico',
    currentUrl: '/images/mauricio-portrait.jpg',
    defaultUrl: '/images/mauricio-portrait.jpg',
    altText: 'Maurício Henrique em estúdio com câmera de cinema',
    aspectRatio: '4:5 / Vertical Portrait',
    notes: 'Retrato em estúdio com câmera profissional e iluminação lateral.'
  }
];

export const PROJECTS_LIST: ProjectItem[] = [

  {
    id: 'RenatoeKarine',
    year: '2026',
    title: 'R & K Ensaio Gestante',
    category: 'CINEMA AFETIVO & INTIMISTA',
    duration: '00:02:18',
    badge: 'LUZ NATURAL • 50MM',
    description: 'Fotografia documental intimista guiada por reações espontâneas e color grading de tons naturais e quentes.',
    role: 'CAPTAÇÃO & EDIÇÃO',
    imageKey: 'project_opus',
    client: 'Renato e Karine Saatman',
    equipment: 'Canon t6i + 50mm f/1.8 + iPhone 16 Pro Max',
    colorGrade: 'Apple Log DHR',
    stills: [
      '/images/renatokarinegestante.jpg'
    ]
  },
  {
    id: 'aurun',
    year: '2025',
    title: 'AUTISMO RUN',
    category: 'ESPORTIVO & CORRIDA DE RUA',
    duration: '00:03:12',
    badge: 'LUZ NATURAL • T6I + 50MM',
    description: 'Cobertura de fotos esportivas de pacientes e colaboradores da Clínica Multi Ninho em corrida de rua em prol da luta do autismo',
    role: 'DIREÇÃO & CÂMERA',
    imageKey: 'project_aurun',
    client: 'Clínica Ninho',
    equipment: 'Canon SL3',
    colorGrade: 'Rec709 / Contraste suave e tons neutros',
    stills: [
      '/images/project_aurun.jpg'
    ]
  },
  {
    id: 'ALICE15ANOS',
    year: '2026',
    title: 'Maria Alice - 15 anos',
    category: 'intimista & afetivo',
    duration: '00:03:12',
    badge: 'T6I + 18-55MM • Flash Contínuo',
    description: 'Cobertura de evento intimista de aniversário de 15 anos, com foco em storytelling afetivo e cinematográfico.',
    role: 'DIREÇÃO & CÂMERA',
    imageKey: 'project_alice15anos',
    client: 'Maria Alice e Família',
    equipment: 'Canon t6i + 18-55mm f/3.5-5.6 + 50mm f/1.8',
    colorGrade: 'Rec709 / Contraste suave e tons neutros',
    stills: [
      '/images/alice15anos.jpg'
    ]
  },
  {
    id: 'cantata',
    year: '2025',
    title: 'CANTATA DE NATAL',
    category: 'ESPETÁCULO PARA PAIS DE CRIANÇAS AUTISTAS DA CLÍNICA NINHO',
    duration: '00:08:45',
    badge: 'MULTICAM • SYNC AUDIO',
    description: 'Captação multicâmera, Registro de crianças e familiares em espetáculo promovido pela CLÍNICA NINHO.',
    role: 'DIREÇÃO DE FOTOGRAFIA',
    imageKey: 'project_cantata',
    client: 'Clínica Ninho',
    equipment: 'Canon SL3 + 18-55mm f/3.5-5.6',
    colorGrade: 'Rec709 / Contraste suave e tons neutros',
    stills: [
      '/images/project_cantata.jpg'
    ]
  },
  {
    id: 'RenatoeKarine2',
    year: '2026',
    title: 'R & K Chá Revelação',
    category: 'Intimista & Afetivo',
    duration: '00:08:45',
    badge: 'Canon t6i + 24-70mm f/2.8',
    description: 'Captação multicâmera, com um iPhone 11 PRO para vídeos e uma canon t6i + 24-70mm f/2.8, com foco em storytelling intimista e afetivo, captando reações espontâneas e momentos de emoção genuína.',
    role: 'DIREÇÃO DE FOTOGRAFIA E FILMAGEM',
    imageKey: 'project_cantata',
    client: 'Renato e Karine Saatman',
    equipment: 'Canon SL3 + 24-70mm f/2.8 + iPhone 11 Pro',
    colorGrade: 'Rec709 / Contraste suave e tons neutros',
    stills: [
      '/images/renatoekarinecha.jpg'
    ]
  },
  {
    id: 'pegada',
    year: '2024',
    title: 'AGÊNCIA PEGADA DIGITAL',
    category: 'CAMPANHAS COMERCIAIS & SOCIAL REELS',
    duration: 'REELS SERIADO',
    badge: '9:16 VERTICAL • AD RETENTION',
    description: 'Edição e finalização de vídeos verticais com foco em Reels e TikTok. Receção do material bruto gravado, corte de ritmo, aplicação de legendas dinâmicas, tratamento básico de áudio e entrega rápida para publicação nas redes.',
    role: 'EDITOR DE VÍDEOS PARA REELS & TIKTOK',
    imageKey: 'hero_banner',
    client: 'Pegada Digital & Clientes Nacionais',
    equipment: 'Setup Vertical 9:16 com Mobile',
    colorGrade: 'Rec.709 comercial com saturação seletiva e alto contraste de curvas',
    stills: [
      '/images/hero_banner.jpg'
    ]
  },
  {
    id: 'multininho',
    year: '2025 - 2026',
    title: 'CLÍNICA NINHO',
    category: 'DOCUMENTÁRIO & SAÚDE INFANTIL',
    duration: '00:04:10',
    badge: 'HUMANIZED DOC • WIDE SHOTS',
    description: 'Estágio de captação documental com crianças e terapeutas da clínica Multi Ninho, com foco em humanização e narrativa sensível.',
    role: 'ESTAGIÁRIO, FILMMAKER, MARKETING, FOTÓGRAFO',
    imageKey: 'about_portrait',
    client: 'Clínica Multi Ninho Saúde Infantil',
    equipment: 'Canon SL3 + 18-55mm f/3.5-5.6 + 50mm f/1.8 + Samsung S24 ULTRA + iPhone 11 Pro',
    colorGrade: 'Tons acolhedores, curvas suaves de highlight sem corte abrupto',
    stills: [
      '/images/clinicaninhoestagi.jpg'
    ]
  }
];

export const SOFTWARE_STACK: SoftwareItem[] = [
  {
    name: 'CapCut Pro / Desktop',
    abbr: 'CP',
    subtitle: 'NÍVEL EXPERT // CORTE ÁGIL & ADS',
    level: 'Expert'
  },
  {
    name: 'Adobe Lightroom',
    abbr: 'Lr',
    subtitle: 'NÍVEL EXPERT // COLOR SCIENCE & RAW',
    level: 'Expert'
  },
  {
    name: 'Affinity Suite',
    abbr: 'Af',
    subtitle: 'AVANÇADO // PHOTO & VECTOR DESIGN',
    level: 'Avançado'
  },
  {
    name: 'Meta Ads Manager',
    abbr: 'FB',
    subtitle: 'ESTRATÉGICO // RETENÇÃO & TRÁFEGO',
    level: 'Estratégico',
    icon: 'campaign'
  },
  {
    name: 'Canva Pro',
    abbr: 'CV',
    subtitle: 'ÁGIL // BRAND DECKS & STORYBOARDS',
    level: 'Ágil',
    icon: 'auto_fix_high'
  },
  {
    name: 'Trello & Notion',
    abbr: 'TN',
    subtitle: 'PRODUÇÃO // GESTÃO DE SET & ROTEIRO',
    level: 'Produção',
    icon: 'dataset'
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    period: 'projetos independentes',
    company: 'AUTÔNOMO / FREELANCE',
    role: 'FOTÓGRAFO & VIDEOMAKER FREELANCER',
    location: 'PROJETOS INDEPENDENTES',
    description: 'Atendimento autónomo para cobertura de eventos, ensaios fotográficos e conteúdos para marcas locais. Execução completa do trabalho: direção de quem está a ser fotografado, captação das imagens e tratamento de cor e áudio na pós-produção.',
    tags: ['COBERTURA DE EVENTOS', 'ENSAIOS FOTOGRÁFICOS', 'EDIÇÃO & DESIGN']
  },
  {
    period: '2025 - 2026',
    company: 'CLÍNICA NINHO',
    role: 'VÍDEO, FOTO & COMUNICAÇÃO',
    location: 'RECIFE / PE • ESTÁGIO',
    description: 'Produção de fotografia e vídeo no ambiente da clínica com profissionais de saúde e crianças. Condução de gravações com cuidado no manuseio de luz e equipamento para respeitar a rotina dos pacientes, além de apoiar o padrão visual e as diretrizes da marca.',
    tags: ['FOTOGRAFIA & VÍDEO', 'SAÚDE & INFANTIL', 'BRANDING INSTITUCIONAL']
  },
  {
    period: '2023',
    company: 'AGÊNCIA PEGADA DIGITAL',
    role: 'EDITOR DE VÍDEO',
    location: 'RECIFE / PE',
    description: 'Edição e finalização de vídeos verticais com foco em Reels e TikTok. Receção do material bruto gravado, corte de ritmo, aplicação de legendas dinâmicas, tratamento básico de áudio e entrega rápida para publicação nas redes.',
    tags: ['EDIÇÃO DE VÍDEOS', 'REELS & TIKTOK', 'CORTE & RITMO']
  },
];
