import {
  Boxes,
  Braces,
  Database,
  Figma,
  Github,
  Mail,
  MapPin,
  Phone,
  ServerCog,
  TerminalSquare,
  Wrench,
  Facebook,
} from 'lucide-react';

export const profile = {
  name: 'Nguyễn Ngọc Trinh',
  role: 'Frontend Developer / Web Developer',
  location: 'Ho Chi Minh City, Vietnam',
  email: 'nn.trinh.insys@gmail.com',
  phone1: '0799120045',
  phone2: '0393888564',
  github: 'https://github.com/ngoctrinh564',
  facebook: 'https://www.facebook.com/ngoctrinh.5604',
  headline: 'Building digital experiences through code, motion, and systems thinking.',
  summary:
    'I’m a web developer focused on building clean, responsive, and visually polished interfaces. I enjoy turning structured ideas into usable digital products with thoughtful UI, organized components, and smooth interaction.',
  focus: 'UI systems, responsive web apps, dashboard interfaces',
  technicalInterest: 'React, Tailwind CSS, ASP.NET Core, Oracle, SQL Server, Excel VBA',
  workingStyle: 'Detail-oriented, visual-focused, learning by building',
};

export const navItems = [
  { label: 'Profile', href: '#profile' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Work', href: '#projects' },
  { label: 'Activity', href: '#activity' },
  { label: 'Contact', href: '#contact' },
];

export const profileFacts = [
  { label: 'Role', value: profile.role },
  { label: 'Location', value: profile.location },
  { label: 'Focus', value: profile.focus },
  { label: 'Technical Interest', value: profile.technicalInterest },
  { label: 'Working Style', value: profile.workingStyle },
];

export const skills = [
  {
    group: 'Frontend Engine',
    icon: Braces,
    signal: 94,
    items: ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'],
  },
  {
    group: 'Backend Module',
    icon: ServerCog,
    signal: 78,
    items: ['Node.js', 'Express', 'ASP.NET Core', 'REST API', 'Auth'],
  },
  {
    group: 'Database Layer',
    icon: Database,
    signal: 72,
    items: ['SQL Server', 'Oracle', 'MySQL', 'Schema Design', 'Query Optimization'],
  },
  {
    group: 'Tools Matrix',
    icon: Wrench,
    signal: 88,
    items: ['Git', 'GitHub', 'VS Code', 'Figma', 'Excel VBA'],
  },
  {
    group: 'UI/UX System',
    icon: Figma,
    signal: 86,
    items: ['Wireframing', 'Responsive Design', 'Design Systems', 'Interaction Design'],
  },
];

export const projects = [
  {
    title: 'BookStoreWebsite',
    description: {
      en: 'A bookstore website project focused on product presentation, page structure, and polished UI.',
      vi: 'Dự án website nhà sách tập trung vào trình bày sản phẩm, cấu trúc trang và giao diện gọn gàng.',
    },
    stack: ['HTML', 'CSS', 'JavaScript'],
    role: 'Web Developer',
    status: 'Built',
    type: 'Web Project',
    demo: 'https://github.com/ngoctrinh564/BookStoreWebsite',
    github: 'https://github.com/ngoctrinh564/BookStoreWebsite',
    accent: 'cyan',
  },
  {
    title: 'courseproject-ltweb-gym',
    description: {
      en: 'A gym website project emphasizing service presentation, responsive layout, and user-friendly interface structure.',
      vi: 'Dự án website phòng gym nhấn mạnh trình bày dịch vụ, layout responsive và cấu trúc giao diện thân thiện.',
    },
    stack: ['HTML', 'CSS', 'JavaScript'],
    role: 'Web Developer',
    status: 'Built',
    type: 'Web Application',
    demo: 'https://github.com/ngoctrinh564/courseproject-ltweb-gym',
    github: 'https://github.com/ngoctrinh564/courseproject-ltweb-gym',
    accent: 'violet',
  },
  {
    title: 'capital-weather-tracker',
    description: {
      en: 'A weather tracker built for collecting and organizing weather data with clean reporting structure.',
      vi: 'Dự án theo dõi thời tiết xây dựng để thu thập và tổ chức dữ liệu thời tiết với cấu trúc báo cáo rõ ràng.',
    },
    stack: ['Python', 'API', 'Data Processing'],
    role: 'Developer',
    status: 'Built',
    type: 'Data Project',
    demo: 'https://github.com/ngoctrinh564/capital-weather-tracker',
    github: 'https://github.com/ngoctrinh564/capital-weather-tracker',
    accent: 'electric',
  },
  {
    title: 'Portfolio Interface',
    description: {
      en: 'An artistic portfolio interface with theme switching, background modes, and a polished three-reel control.',
      vi: 'Giao diện portfolio nghệ thuật với chuyển đổi chủ đề, chế độ nền và điều khiển ba cuộn tinh chỉnh.',
    },
    stack: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    role: 'Designer & Frontend Developer',
    status: 'In Progress',
    type: 'Personal Website',
    demo: 'https://github.com/ngoctrinh564',
    github: 'https://github.com/ngoctrinh564',
    accent: 'cyan',
  },
  {
    title: 'Student Data Tool',
    description: {
      en: 'An Excel VBA automation tool for searching, extracting, and exporting student records.',
      vi: 'Công cụ tự động Excel VBA để tìm kiếm, trích xuất và xuất hồ sơ sinh viên.',
    },
    stack: ['Excel VBA', 'Data Processing'],
    role: 'Developer',
    status: 'Built',
    type: 'Automation Tool',
    demo: 'https://github.com/ngoctrinh564',
    github: 'https://github.com/ngoctrinh564',
    accent: 'amber',
  },
];

export const timeline = [
  {
    period: '2024 — Present',
    title: 'Frontend & Web Development',
    description:
      'Building web interfaces, dashboards, and portfolio projects with React, Tailwind, and modern UI patterns.',
    tags: ['React', 'UI', 'Frontend'],
  },
  {
    period: '2024 — Present',
    title: 'Database & Backend Practice',
    description:
      'Working with ASP.NET Core, Oracle, SQL Server, and structured backend workflows.',
    tags: ['ASP.NET Core', 'Oracle', 'SQL'],
  },
  {
    period: '2023 — Present',
    title: 'Automation & Data Tools',
    description:
      'Creating Excel VBA tools for data extraction, validation, and workflow automation.',
    tags: ['VBA', 'Excel', 'Data'],
  },
];

export const contactCards = [
  {
    label: 'Email',
    value: 'nn.trinh.insys@gmail.com',
    subtext: 'Reach out with project ideas or collaboration requests.',
    href: 'mailto:nn.trinh.insys@gmail.com',
    icon: Mail,
  },
  {
    label: 'Phone',
    value: '0799120045',
    subtext: 'Call or message for quick project inquiries.',
    href: 'tel:0799120045',
    icon: Phone,
  },
  {
    label: 'GitHub',
    value: 'github.com/ngoctrinh564',
    subtext: 'View code samples and interface experiments.',
    href: 'https://github.com/ngoctrinh564',
    icon: Github,
  },
  {
    label: 'Facebook',
    value: 'facebook.com/ngoctrinh.5604',
    subtext: 'Connect on social or ask about collaboration.',
    href: 'https://www.facebook.com/ngoctrinh.5604',
    icon: Facebook,
  },
  {
    label: 'Location',
    value: 'Ho Chi Minh City, Vietnam',
    subtext: 'Working remotely or locally across Southeast Asia.',
    href: 'https://www.google.com/maps/search/Ho+Chi+Minh+City',
    icon: MapPin,
  },
];

export const commandStats = [
  { label: 'Latency', value: '24ms' },
  { label: 'Uptime', value: '99.9%' },
  { label: 'Modules', value: '05' },
  { label: 'Mode', value: 'Build' },
];

export const orbitNodes = [
  { label: 'UI', icon: Boxes },
  { label: 'API', icon: TerminalSquare },
  { label: 'DB', icon: Database },
];
