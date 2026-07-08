import {
  Boxes,
  Braces,
  ClipboardCheck,
  Database,
  Facebook,
  Figma,
  Github,
  GitPullRequestArrow,
  Mail,
  MapPin,
  Phone,
  Presentation,
  ServerCog,
  TerminalSquare,
  Wrench,
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
    'I am a web developer focused on building clean, responsive, and visually polished interfaces.',
  focus: 'UI systems, responsive web apps, dashboard interfaces, product flow',
  technicalInterest: 'React, Tailwind CSS, ASP.NET Core, Oracle, SQL Server, Excel VBA, BA / PM / PO',
  workingStyle: 'Detail-oriented, visual-focused, structured, learning by building',
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

export const workflowSignals = [
  { label: 'BA Lens', value: 'Requirement mapping', detail: 'User stories, acceptance criteria, process flow' },
  { label: 'PM Track', value: 'Delivery control', detail: 'Scope, priority, risk, timeline, handoff' },
  { label: 'PO Mindset', value: 'Product value', detail: 'Backlog, feature impact, user outcome' },
  { label: 'UI System', value: 'Interface precision', detail: 'Responsive layout, motion, visual hierarchy' },
];

export const skills = [
  {
    group: 'Frontend Engine',
    icon: Braces,
    signal: 94,
    items: ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'],
  },
  {
    group: 'Product Strategy',
    icon: Presentation,
    signal: 84,
    items: ['Business Analysis', 'User Story', 'Backlog', 'Roadmap', 'Acceptance Criteria'],
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
      en: 'A bookstore website focused on product presentation, page structure, and polished UI.',
      vi: 'Dự án website nhà sách tập trung vào trình bày sản phẩm, cấu trúc trang và giao diện gọn gàng.',
    },
    stack: ['HTML', 'CSS', 'JavaScript', 'Product Listing'],
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
      en: 'A gym website emphasizing service presentation, responsive layout, and user-friendly interface structure.',
      vi: 'Dự án website phòng gym nhấn mạnh trình bày dịch vụ, layout responsive và cấu trúc giao diện thân thiện.',
    },
    stack: ['HTML', 'CSS', 'JavaScript', 'Service Flow'],
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
      en: 'A weather tracker built for collecting and organizing weather data with a clean reporting structure.',
      vi: 'Dự án theo dõi thời tiết dùng để thu thập và tổ chức dữ liệu thời tiết với cấu trúc báo cáo rõ ràng.',
    },
    stack: ['Python', 'API', 'Data Processing', 'Reporting'],
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
      en: 'A technology portfolio interface with theme switching, signal backgrounds, and a custom 3D slot machine.',
      vi: 'Giao diện portfolio công nghệ với chuyển đổi chủ đề, nền tín hiệu và máy slot 3D được thiết kế riêng.',
    },
    stack: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Product Narrative'],
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
    stack: ['Excel VBA', 'Data Processing', 'Workflow Automation'],
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
    period: '2024 - Present',
    title: 'Frontend & Product Interface',
    description:
      'Building web interfaces, dashboards, and portfolio systems with React, Tailwind, motion, and structured user flows.',
    tags: ['React', 'UI', 'Frontend', 'User Flow'],
  },
  {
    period: '2024 - Present',
    title: 'BA / PM / PO Direction',
    description:
      'Practicing requirement analysis, backlog structure, acceptance criteria, scope control, and delivery planning.',
    tags: ['BA', 'PM', 'PO', 'Backlog'],
  },
  {
    period: '2024 - Present',
    title: 'Database & Backend Practice',
    description:
      'Working with ASP.NET Core, Oracle, SQL Server, and structured backend workflows.',
    tags: ['ASP.NET Core', 'Oracle', 'SQL'],
  },
  {
    period: '2023 - Present',
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
  { label: 'REQ', value: 'Mapped' },
  { label: 'Flow', value: 'Clear' },
  { label: 'Scope', value: 'Lean' },
  { label: 'Mode', value: 'Build' },
];

export const orbitNodes = [
  { label: 'UI', icon: Boxes },
  { label: 'BA', icon: ClipboardCheck },
  { label: 'PM', icon: GitPullRequestArrow },
  { label: 'PO', icon: Presentation },
  { label: 'API', icon: TerminalSquare },
  { label: 'DB', icon: Database },
];
