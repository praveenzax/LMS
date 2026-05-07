// src/data/dummyData.js
// Comprehensive dummy data for all LMS modules

export const student = {
  id: 'STU2024001',
  name: 'Arjun Sharma',
  branch: 'Computer Science & Engineering',
  semester: 6,
  rollNumber: 'CS2021042',
  email: 'arjun.sharma@college.edu',
  phone: '+91 98765 43210',
  cgpa: 8.7,
  avatar: 'https://i.pravatar.cc/150?img=11',
  bio: 'Passionate software developer with keen interest in full-stack web development, machine learning, and open-source contributions. Actively participating in hackathons and coding competitions.',
  skills: ['React.js', 'Python', 'Machine Learning', 'Node.js', 'MongoDB', 'Data Structures', 'Java', 'AWS', 'Docker', 'Git'],
  address: 'Bengaluru, Karnataka',
  dob: '2002-08-15',
  linkedin: 'linkedin.com/in/arjunsharma',
  github: 'github.com/arjun-sharma',
  joinedYear: 2021,
};

export const stats = {
  totalNotes: 48,
  journalsUploaded: 12,
  certificatesEarned: 9,
  fdpAttended: 5,
  assignmentsSubmitted: 34,
  attendancePercent: 87,
};

export const recentActivities = [
  { id: 1, icon: 'bi-file-earmark-text', color: '#4361ee', text: 'Uploaded lecture notes for Data Structures', time: '2 hours ago' },
  { id: 2, icon: 'bi-journal-check', color: '#06d6a0', text: 'Journal approved by Prof. Meena Iyer', time: '5 hours ago' },
  { id: 3, icon: 'bi-award', color: '#ffd166', text: 'Certificate earned – Cloud Computing Workshop', time: '1 day ago' },
  { id: 4, icon: 'bi-clipboard-check', color: '#f72585', text: 'Assignment submitted: OS Lab Report', time: '2 days ago' },
  { id: 5, icon: 'bi-calendar-event', color: '#7209b7', text: 'Registered for Hackathon 2025', time: '3 days ago' },
  { id: 6, icon: 'bi-book', color: '#4cc9f0', text: 'Downloaded: Machine Learning Notes – Unit 3', time: '4 days ago' },
];

export const upcomingEvents = [
  { id: 1, title: 'Mid-Semester Examinations', date: '2025-06-10', type: 'exam', color: '#ef476f' },
  { id: 2, title: 'Project Presentation – VI Sem', date: '2025-06-15', type: 'academic', color: '#4361ee' },
  { id: 3, title: 'Industry Expert Guest Lecture', date: '2025-06-18', type: 'event', color: '#06d6a0' },
  { id: 4, title: 'Hackathon Registration Deadline', date: '2025-06-20', type: 'deadline', color: '#ffd166' },
  { id: 5, title: 'Summer Internship Starts', date: '2025-07-01', type: 'academic', color: '#7209b7' },
];

export const semesterPerformance = [
  { sem: 'Sem 1', sgpa: 7.8, attendance: 82 },
  { sem: 'Sem 2', sgpa: 8.2, attendance: 88 },
  { sem: 'Sem 3', sgpa: 8.5, attendance: 85 },
  { sem: 'Sem 4', sgpa: 8.9, attendance: 91 },
  { sem: 'Sem 5', sgpa: 9.1, attendance: 89 },
  { sem: 'Sem 6', sgpa: 8.7, attendance: 87 },
];

export const subjectAttendance = [
  { subject: 'Data Structures & Algorithms', code: 'CS601', attended: 42, total: 48, percent: 87.5 },
  { subject: 'Operating Systems', code: 'CS602', attended: 38, total: 46, percent: 82.6 },
  { subject: 'Database Management', code: 'CS603', attended: 44, total: 48, percent: 91.7 },
  { subject: 'Computer Networks', code: 'CS604', attended: 35, total: 46, percent: 76.1 },
  { subject: 'Machine Learning', code: 'CS605', attended: 40, total: 44, percent: 90.9 },
  { subject: 'Software Engineering', code: 'CS606', attended: 36, total: 42, percent: 85.7 },
];

export const lectureNotes = [
  { id: 1, title: 'Data Structures – Linked Lists & Trees', subject: 'Data Structures', semester: 6, uploadedBy: 'Prof. Ramesh Kumar', date: '2025-05-28', size: '2.4 MB', type: 'PDF', downloads: 128 },
  { id: 2, title: 'OS Process Scheduling Algorithms', subject: 'Operating Systems', semester: 6, uploadedBy: 'Prof. Anita Singh', date: '2025-05-25', size: '1.8 MB', type: 'PDF', downloads: 95 },
  { id: 3, title: 'SQL Advanced Queries & Joins', subject: 'Database Management', semester: 6, uploadedBy: 'Prof. Priya Nair', date: '2025-05-22', size: '3.1 MB', type: 'DOCX', downloads: 142 },
  { id: 4, title: 'TCP/IP Protocols & Network Layers', subject: 'Computer Networks', semester: 6, uploadedBy: 'Prof. Suresh Babu', date: '2025-05-20', size: '2.7 MB', type: 'PDF', downloads: 87 },
  { id: 5, title: 'Supervised Learning Algorithms', subject: 'Machine Learning', semester: 6, uploadedBy: 'Prof. Meena Iyer', date: '2025-05-18', size: '4.2 MB', type: 'PDF', downloads: 201 },
  { id: 6, title: 'Software Development Life Cycle', subject: 'Software Engineering', semester: 6, uploadedBy: 'Prof. Kiran Rao', date: '2025-05-15', size: '1.5 MB', type: 'PPT', downloads: 73 },
  { id: 7, title: 'Graph Algorithms – BFS & DFS', subject: 'Data Structures', semester: 6, uploadedBy: 'Prof. Ramesh Kumar', date: '2025-05-12', size: '2.1 MB', type: 'PDF', downloads: 156 },
  { id: 8, title: 'Virtual Memory Management', subject: 'Operating Systems', semester: 6, uploadedBy: 'Prof. Anita Singh', date: '2025-05-10', size: '1.9 MB', type: 'PDF', downloads: 112 },
];

export const journals = [
  { id: 1, title: 'IoT-Based Smart Agriculture System', subject: 'Project Lab', semester: 6, status: 'approved', date: '2025-05-20', feedback: 'Excellent work on sensor integration.' },
  { id: 2, title: 'Comparative Study of Sorting Algorithms', subject: 'Data Structures', semester: 6, status: 'submitted', date: '2025-05-18', feedback: '' },
  { id: 3, title: 'Network Security Analysis Report', subject: 'Computer Networks', semester: 6, status: 'pending', date: '2025-05-15', feedback: '' },
  { id: 4, title: 'Database Normalization Case Study', subject: 'Database Management', semester: 5, status: 'approved', date: '2025-01-10', feedback: 'Well-structured and comprehensive.' },
  { id: 5, title: 'OS Scheduling Simulation', subject: 'Operating Systems', semester: 5, status: 'approved', date: '2024-12-20', feedback: 'Good implementation.' },
  { id: 6, title: 'Linear Regression on Housing Prices', subject: 'Machine Learning', semester: 6, status: 'rejected', date: '2025-05-10', feedback: 'Need to improve data preprocessing section.' },
];

export const achievements = [
  { id: 1, title: 'AWS Cloud Practitioner', category: 'certification', issuer: 'Amazon Web Services', date: '2025-04-10', imageUrl: 'https://placehold.co/300x200/4361ee/ffffff?text=AWS+Certificate', type: 'certificate' },
  { id: 2, title: '1st Place – College Hackathon 2025', category: 'hackathon', issuer: 'ISTE Student Chapter', date: '2025-03-22', imageUrl: 'https://placehold.co/300x200/06d6a0/ffffff?text=Hackathon+Winner', type: 'award' },
  { id: 3, title: 'Google Data Analytics Certificate', category: 'certification', issuer: 'Google / Coursera', date: '2025-02-14', imageUrl: 'https://placehold.co/300x200/f72585/ffffff?text=Google+Cert', type: 'certificate' },
  { id: 4, title: 'Best Project Award – AI Track', category: 'award', issuer: 'TechFest 2024', date: '2024-11-18', imageUrl: 'https://placehold.co/300x200/7209b7/ffffff?text=Best+Project', type: 'award' },
  { id: 5, title: 'Competitive Programming – Rank 12', category: 'competition', issuer: 'CodeChef Long Challenge', date: '2024-09-30', imageUrl: 'https://placehold.co/300x200/fb8500/ffffff?text=CodeChef+Rank', type: 'competition' },
  { id: 6, title: 'React Developer Certification', category: 'certification', issuer: 'Meta / Coursera', date: '2025-01-20', imageUrl: 'https://placehold.co/300x200/4cc9f0/111827?text=React+Cert', type: 'certificate' },
  { id: 7, title: 'Runner-up – National Coding Contest', category: 'competition', issuer: 'HackerEarth', date: '2024-08-15', imageUrl: 'https://placehold.co/300x200/ef476f/ffffff?text=Runner-up', type: 'award' },
  { id: 8, title: 'Cybersecurity Fundamentals', category: 'certification', issuer: 'IBM SkillsBuild', date: '2024-07-01', imageUrl: 'https://placehold.co/300x200/3a0ca3/ffffff?text=IBM+Cert', type: 'certificate' },
  { id: 9, title: 'NPTEL: Joy of Computing using Python', category: 'nptel', issuer: 'IIT Madras', date: '2024-04-15', imageUrl: 'https://placehold.co/300x200/ff9900/ffffff?text=NPTEL+Python', type: 'certificate' },
  { id: 10, title: 'Patent: IoT Smart Farm Model', category: 'patent', issuer: 'Indian Patent Office', date: '2024-12-05', imageUrl: 'https://placehold.co/300x200/333333/ffffff?text=Patent+Granted', type: 'patent' },
  { id: 11, title: 'NCC B-Certificate', category: 'other', issuer: 'National Cadet Corps', date: '2023-08-10', imageUrl: 'https://placehold.co/300x200/006600/ffffff?text=NCC+Cert', type: 'certificate' },
];

export const fdpPrograms = [
  { id: 1, title: 'Advanced Machine Learning Techniques', organizer: 'IIT Bangalore', duration: '5 Days', date: '2025-04-01', mode: 'Online', status: 'completed', certificate: true },
  { id: 2, title: 'Cloud Computing & DevOps Workshop', organizer: 'NASSCOM', duration: '3 Days', date: '2025-02-15', mode: 'Offline', status: 'completed', certificate: true },
  { id: 3, title: 'Research Paper Writing & Publication', organizer: 'Springer Events', duration: '2 Days', date: '2025-01-10', mode: 'Online', status: 'completed', certificate: false },
  { id: 4, title: 'Blockchain & Web3 Development', organizer: 'IEEE Student Branch', duration: '4 Days', date: '2024-11-20', mode: 'Hybrid', status: 'completed', certificate: true },
  { id: 5, title: 'Agile & Scrum Methodology', organizer: 'PMI India', duration: '1 Day', date: '2024-09-05', mode: 'Online', status: 'completed', certificate: true },
];

export const assignments = [
  { id: 1, title: 'Implement AVL Tree in Java', subject: 'Data Structures', dueDate: '2025-06-08', status: 'submitted', submittedDate: '2025-06-06', marks: '47/50' },
  { id: 2, title: 'OS Lab: Process Synchronization', subject: 'Operating Systems', dueDate: '2025-06-10', status: 'pending', submittedDate: null, marks: null },
  { id: 3, title: 'Design ER Diagram for Hospital DB', subject: 'Database Management', dueDate: '2025-06-05', status: 'submitted', submittedDate: '2025-06-05', marks: '48/50' },
  { id: 4, title: 'Implement RSA Encryption', subject: 'Computer Networks', dueDate: '2025-06-12', status: 'pending', submittedDate: null, marks: null },
  { id: 5, title: 'ML Assignment: Linear Regression Analysis', subject: 'Machine Learning', dueDate: '2025-06-03', status: 'submitted', submittedDate: '2025-06-02', marks: '45/50' },
  { id: 6, title: 'Write SRS Document for Canteen App', subject: 'Software Engineering', dueDate: '2025-06-15', status: 'overdue', submittedDate: null, marks: null },
  { id: 7, title: 'Heap Sort Implementation', subject: 'Data Structures', dueDate: '2025-05-28', status: 'submitted', submittedDate: '2025-05-27', marks: '50/50' },
];

export const projects = [
  { id: 1, title: 'SmartFarm IoT Dashboard', description: 'Real-time IoT sensor dashboard for smart agriculture using MQTT, Node.js and React.', tech: ['React', 'Node.js', 'MQTT', 'MongoDB'], github: '#', demo: '#', status: 'completed', image: 'https://placehold.co/320x180/06d6a0/ffffff?text=SmartFarm' },
  { id: 2, title: 'AI Resume Analyzer', description: 'NLP-based resume parser and ATS score calculator built with Python Flask and React frontend.', tech: ['Python', 'Flask', 'spaCy', 'React'], github: '#', demo: '#', status: 'completed', image: 'https://placehold.co/320x180/4361ee/ffffff?text=AI+Resume' },
  { id: 3, title: 'College ERP Portal', description: 'Full-featured ERP system for college administration with attendance, marks, and leave management.', tech: ['React', 'Django', 'PostgreSQL', 'Docker'], github: '#', demo: '#', status: 'in-progress', image: 'https://placehold.co/320x180/7209b7/ffffff?text=ERP+Portal' },
  { id: 4, title: 'Blockchain Certificate Verifier', description: 'Decentralized academic certificate issuance and verification using Ethereum and IPFS.', tech: ['Solidity', 'Ethereum', 'IPFS', 'React'], github: '#', demo: null, status: 'in-progress', image: 'https://placehold.co/320x180/f72585/ffffff?text=Blockchain' },
  { id: 5, title: 'E-Learning Platform', description: 'Video-based learning platform with quiz engine, progress tracking and JWT authentication.', tech: ['React', 'Express', 'MongoDB', 'AWS S3'], github: '#', demo: '#', status: 'completed', image: 'https://placehold.co/320x180/4cc9f0/111827?text=eLearning' },
];

export const library = [
  { id: 1, title: 'Introduction to Algorithms (CLRS)', type: 'ebook', subject: 'Data Structures', author: 'Cormen et al.', year: 2022, size: '8.4 MB' },
  { id: 2, title: 'Operating System Concepts – Silberschatz', type: 'ebook', subject: 'Operating Systems', author: 'Silberschatz', year: 2021, size: '12.1 MB' },
  { id: 3, title: 'CS601 Previous Year Questions 2022-23', type: 'question-paper', subject: 'Data Structures', author: 'Exam Cell', year: 2023, size: '0.8 MB' },
  { id: 4, title: 'Deep Learning – Ian Goodfellow', type: 'ebook', subject: 'Machine Learning', author: 'Goodfellow', year: 2020, size: '15.3 MB' },
  { id: 5, title: 'Research: Attention Is All You Need', type: 'research', subject: 'Machine Learning', author: 'Vaswani et al.', year: 2017, size: '0.6 MB' },
  { id: 6, title: 'CS604 End Semester 2023-24 QP', type: 'question-paper', subject: 'Computer Networks', author: 'Exam Cell', year: 2024, size: '1.1 MB' },
  { id: 7, title: 'Database System Concepts – Korth', type: 'ebook', subject: 'Database Management', author: 'Korth & Sudarshan', year: 2020, size: '10.2 MB' },
];

export const notifications = [
  { id: 1, type: 'assignment', icon: 'bi-clipboard-check', color: '#ef476f', title: 'Assignment Due Tomorrow', message: 'OS Lab: Process Synchronization is due on June 10', time: '1 hour ago', read: false },
  { id: 2, type: 'notes', icon: 'bi-file-earmark-text', color: '#4361ee', title: 'New Notes Uploaded', message: 'Prof. Ramesh uploaded "Graph Algorithms – BFS & DFS"', time: '3 hours ago', read: false },
  { id: 3, type: 'achievement', icon: 'bi-award', color: '#ffd166', title: 'Achievement Unlocked!', message: 'You earned the AWS Cloud Practitioner certificate.', time: '1 day ago', read: true },
  { id: 4, type: 'journal', icon: 'bi-journal-check', color: '#06d6a0', title: 'Journal Approved', message: 'IoT-Based Smart Agriculture System journal was approved.', time: '2 days ago', read: true },
  { id: 5, type: 'event', icon: 'bi-calendar-event', color: '#7209b7', title: 'Upcoming Event', message: 'Mid-Semester Exams begin on June 10. Please prepare!', time: '3 days ago', read: true },
  { id: 6, type: 'placement', icon: 'bi-briefcase', color: '#4cc9f0', title: 'Campus Placement Drive', message: 'TCS is visiting campus on June 25. Register by June 15.', time: '4 days ago', read: true },
];

export const placementResources = [
  { id: 1, title: 'Top 100 DSA Interview Questions', category: 'dsa', link: '#', icon: 'bi-code-slash', color: '#4361ee' },
  { id: 2, title: 'System Design Interview Guide', category: 'system-design', link: '#', icon: 'bi-diagram-3', color: '#7209b7' },
  { id: 3, title: 'Aptitude & Reasoning Practice', category: 'aptitude', link: '#', icon: 'bi-calculator', color: '#06d6a0' },
  { id: 4, title: 'Resume Writing Tips & Templates', category: 'resume', link: '#', icon: 'bi-person-vcard', color: '#ffd166' },
  { id: 5, title: 'Mock Interview – Frontend Dev', category: 'mock', link: '#', icon: 'bi-camera-video', color: '#f72585' },
  { id: 6, title: 'HR Interview Q&A Bank', category: 'hr', link: '#', icon: 'bi-chat-quote', color: '#4cc9f0' },
  { id: 7, title: 'LeetCode Curated 75 Problems', category: 'dsa', link: '#', icon: 'bi-lightning', color: '#fb8500' },
  { id: 8, title: 'GATE 2026 Preparation Resources', category: 'exam', link: '#', icon: 'bi-mortarboard', color: '#3a0ca3' },
];

export const jobNotifications = [
  { id: 1, type: 'government', branch: 'all', title: 'UPSC Civil Services 2025', org: 'UPSC', lastDate: '2025-08-15', link: '#', icon: 'bi-bank', color: '#e63946' },
  { id: 2, type: 'government', branch: 'non-cse', title: 'SSC JE Recruitment 2025', org: 'Staff Selection Commission', lastDate: '2025-07-20', link: '#', icon: 'bi-building-fill', color: '#457b9d' },
  { id: 3, type: 'government', branch: 'cse', title: 'ISRO Scientist/Engineer (CS)', org: 'ISRO', lastDate: '2025-06-30', link: '#', icon: 'bi-rocket-takeoff', color: '#ffb703' },
  { id: 4, type: 'private', branch: 'cse', title: 'Software Engineer - New Grad', org: 'Google', lastDate: '2025-06-15', link: '#', icon: 'bi-google', color: '#2a9d8f' },
  { id: 5, type: 'private', branch: 'allied', title: 'Data Scientist Intern', org: 'Microsoft', lastDate: '2025-07-01', link: '#', icon: 'bi-microsoft', color: '#0077b6' },
  { id: 6, type: 'private', branch: 'cse', title: 'Frontend Developer', org: 'Amazon', lastDate: '2025-06-25', link: '#', icon: 'bi-box-seam', color: '#f4a261' },
  { id: 7, type: 'private', branch: 'non-cse', title: 'Mechanical Design Engineer', org: 'L&T', lastDate: '2025-07-10', link: '#', icon: 'bi-gear', color: '#ef476f' },
  { id: 8, type: 'government', branch: 'allied', title: 'Cybersecurity Analyst', org: 'CERT-In', lastDate: '2025-08-01', link: '#', icon: 'bi-shield-lock', color: '#3a0ca3' },
  { id: 9, type: 'private', branch: 'all', title: 'Business Analyst', org: 'Deloitte', lastDate: '2025-06-10', link: '#', icon: 'bi-bar-chart-fill', color: '#06d6a0' },
];

export const academicTimeline = [
  { year: '2021', event: 'Joined CSE Department – 1st Year', icon: 'bi-mortarboard' },
  { year: '2022', event: 'Completed 2nd Year with SGPA 8.35 avg', icon: 'bi-journal-check' },
  { year: '2023', event: 'Won 1st place at TechFest Hackathon', icon: 'bi-trophy' },
  { year: '2024', event: 'Completed Summer Internship at Infosys', icon: 'bi-briefcase' },
  { year: '2025', event: 'Published Research Paper on IoT Agriculture', icon: 'bi-file-earmark-richtext' },
];

export const calendarEvents = {
  '2025-06-10': [{ title: 'Mid-Semester Exam', type: 'exam' }],
  '2025-06-15': [{ title: 'Project Presentation', type: 'academic' }],
  '2025-06-18': [{ title: 'Guest Lecture', type: 'event' }],
  '2025-06-20': [{ title: 'Hackathon Deadline', type: 'deadline' }],
  '2025-06-25': [{ title: 'TCS Placement Drive', type: 'placement' }],
};

export const chatBotResponses = {
  default: "I'm EduBot, your AI study assistant! Ask me about topics, get study tips, or request note summaries. How can I help you today? 📚",
  study: "For effective studying: 1️⃣ Use active recall over re-reading. 2️⃣ Space your revision sessions. 3️⃣ Teach concepts to solidify understanding. 4️⃣ Take regular 25-min focused sessions (Pomodoro). Want a study plan for a specific subject?",
  dsa: "For Data Structures & Algorithms, I recommend: Arrays → Linked Lists → Stacks/Queues → Trees → Graphs → Dynamic Programming. Practice on LeetCode daily. Start with easy problems and gradually increase difficulty. 💡",
  ml: "Machine Learning roadmap: Python basics → NumPy/Pandas → Scikit-Learn → Deep Learning (PyTorch/TF) → Projects. Key concepts: Linear Regression, Classification, Clustering, Neural Networks, CNN, RNN. 🤖",
  resume: "Resume tips: ✅ Quantify achievements. ✅ Use action verbs. ✅ Keep it to 1 page. ✅ Include GitHub/portfolio links. ✅ Tailor to each job. ✅ Use ATS-friendly formatting. Want me to review your resume structure?",
};
