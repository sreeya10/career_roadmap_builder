const careersData = {
    'Full Stack Developer': {
        skills: [
            { name: 'Frontend Development', description: 'HTML, CSS, JavaScript, React/Vue/Angular' },
            { name: 'Backend Development', description: 'Node.js, Python, Java, or PHP' },
            { name: 'Database Management', description: 'SQL and NoSQL databases' },
            { name: 'API Development', description: 'RESTful APIs and GraphQL' },
            { name: 'Version Control', description: 'Git and GitHub workflows' },
            { name: 'DevOps Basics', description: 'CI/CD, Docker, deployment' },
            { name: 'Authentication', description: 'JWT, OAuth, security best practices' },
            { name: 'Testing', description: 'Unit tests, integration tests' }
        ],
        projects: [
            { name: 'E-commerce Platform', description: 'Full shopping cart with payments' },
            { name: 'Social Media App', description: 'Real-time posts and messaging' },
            { name: 'Task Management System', description: 'Kanban board with teams' },
            { name: 'Blog Platform', description: 'CMS with rich text editor' },
            { name: 'Video Streaming Site', description: 'Upload and stream videos' }
        ],
        tools: ['VS Code', 'Git', 'React', 'Node.js', 'MongoDB', 'PostgreSQL', 'Docker', 'AWS'],
        roadmap: [
            { step: 'Frontend Basics', description: 'Master HTML, CSS, JavaScript. Build responsive websites.' },
            { step: 'Frontend Framework', description: 'Learn React, Vue, or Angular. Build SPAs.' },
            { step: 'Backend Development', description: 'Learn Node.js or Python. Build REST APIs.' },
            { step: 'Full Stack Projects', description: 'Combine frontend and backend. Deploy applications.' }
        ],
        careerPath: [
            { stage: 'Junior Full Stack Developer', description: 'Work on features across the stack under guidance.' },
            { stage: 'Full Stack Developer', description: 'Build complete applications independently.' },
            { stage: 'Senior Full Stack Developer', description: 'Lead projects and mentor junior developers.' },
            { stage: 'Tech Lead / Engineering Manager', description: 'Manage teams and architect solutions.' }
        ]
    },
    'Frontend Developer': {
        skills: [
            { name: 'HTML & CSS', description: 'Semantic markup and modern styling' },
            { name: 'JavaScript', description: 'ES6+, async/await, DOM manipulation' },
            { name: 'React/Vue/Angular', description: 'Component-based frameworks' },
            { name: 'Responsive Design', description: 'Mobile-first, CSS Grid, Flexbox' },
            { name: 'State Management', description: 'Redux, Vuex, or Context API' },
            { name: 'Build Tools', description: 'Webpack, Vite, npm/yarn' },
            { name: 'Performance', description: 'Optimization, lazy loading, caching' },
            { name: 'Accessibility', description: 'WCAG standards, screen readers' }
        ],
        projects: [
            { name: 'Portfolio Website', description: 'Showcase your work beautifully' },
            { name: 'Weather App', description: 'API integration with beautiful UI' },
            { name: 'Todo App', description: 'State management and local storage' },
            { name: 'E-commerce Frontend', description: 'Product listings and cart' },
            { name: 'Dashboard', description: 'Data visualization with charts' }
        ],
        tools: ['VS Code', 'React', 'Tailwind CSS', 'Figma', 'Chrome DevTools', 'Git', 'npm', 'Vercel'],
        roadmap: [
            { step: 'HTML/CSS Mastery', description: 'Build pixel-perfect layouts and responsive designs.' },
            { step: 'JavaScript Fundamentals', description: 'Learn modern JavaScript and DOM manipulation.' },
            { step: 'Framework Expertise', description: 'Master React, Vue, or Angular.' },
            { step: 'Advanced Topics', description: 'Performance optimization, accessibility, testing.' }
        ],
        careerPath: [
            { stage: 'Junior Frontend Developer', description: 'Build UI components and fix bugs.' },
            { stage: 'Frontend Developer', description: 'Create complete user interfaces independently.' },
            { stage: 'Senior Frontend Developer', description: 'Architect frontend systems and lead projects.' },
            { stage: 'Frontend Architect', description: 'Define frontend strategy and standards.' }
        ]
    },
    'Software Developer': {
        skills: [
            { name: 'Programming Fundamentals', description: 'Variables, loops, conditionals, functions' },
            { name: 'Data Structures', description: 'Arrays, linked lists, trees, graphs' },
            { name: 'Algorithms', description: 'Sorting, searching, dynamic programming' },
            { name: 'Object-Oriented Programming', description: 'Classes, inheritance, polymorphism' },
            { name: 'Version Control (Git)', description: 'Branching, merging, collaboration' },
            { name: 'Database Management', description: 'SQL, NoSQL, database design' },
            { name: 'Web Development', description: 'HTML, CSS, JavaScript' },
            { name: 'API Development', description: 'RESTful APIs, GraphQL' }
        ],
        projects: [
            { name: 'Personal Portfolio Website', description: 'Showcase your work and skills' },
            { name: 'Todo List Application', description: 'CRUD operations with database' },
            { name: 'Blog Platform', description: 'User authentication and content management' },
            { name: 'E-commerce Store', description: 'Shopping cart and payment integration' },
            { name: 'Social Media Clone', description: 'Real-time features and notifications' }
        ],
        tools: ['VS Code', 'Git', 'GitHub', 'Node.js', 'React', 'PostgreSQL', 'Docker', 'AWS'],
        roadmap: [
            { step: 'Beginner', description: 'Learn programming basics with Python or JavaScript. Focus on problem-solving and logic.' },
            { step: 'Intermediate', description: 'Master data structures and algorithms. Build small projects to practice.' },
            { step: 'Advanced', description: 'Learn frameworks, databases, and deployment. Contribute to open source.' },
            { step: 'Professional', description: 'Build full-stack applications. Learn system design and best practices.' }
        ],
        careerPath: [
            { stage: 'Junior Developer', description: 'Write code under supervision. Fix bugs and implement small features.' },
            { stage: 'Mid-Level Developer', description: 'Work independently on features. Participate in code reviews and architecture discussions.' },
            { stage: 'Senior Developer', description: 'Lead technical projects. Mentor junior developers and make architectural decisions.' },
            { stage: 'Tech Lead / Architect', description: 'Design system architecture. Guide team technical direction and strategic planning.' }
        ]
    },
    'Data Scientist': {
        skills: [
            { name: 'Python Programming', description: 'NumPy, Pandas, Matplotlib' },
            { name: 'Statistics & Probability', description: 'Hypothesis testing, distributions' },
            { name: 'Machine Learning', description: 'Supervised and unsupervised learning' },
            { name: 'Data Visualization', description: 'Tableau, Power BI, Plotly' },
            { name: 'SQL & Databases', description: 'Query optimization, data warehousing' },
            { name: 'Big Data Tools', description: 'Spark, Hadoop, distributed computing' },
            { name: 'Deep Learning', description: 'Neural networks, TensorFlow, PyTorch' },
            { name: 'Feature Engineering', description: 'Data preprocessing and transformation' }
        ],
        projects: [
            { name: 'Exploratory Data Analysis', description: 'Analyze real-world datasets' },
            { name: 'Predictive Model', description: 'Build regression or classification model' },
            { name: 'Customer Segmentation', description: 'Clustering analysis for marketing' },
            { name: 'Recommendation System', description: 'Collaborative filtering algorithm' },
            { name: 'Time Series Forecasting', description: 'Predict future trends from historical data' }
        ],
        tools: ['Python', 'Jupyter', 'Pandas', 'Scikit-learn', 'TensorFlow', 'SQL', 'Tableau', 'Git'],
        roadmap: [
            { step: 'Foundation', description: 'Learn Python and statistics. Practice data manipulation with Pandas.' },
            { step: 'Core Skills', description: 'Study machine learning algorithms. Work on Kaggle competitions.' },
            { step: 'Specialization', description: 'Focus on deep learning or NLP. Build domain expertise.' },
            { step: 'Production', description: 'Deploy models to production. Learn MLOps and model monitoring.' }
        ],
        careerPath: [
            { stage: 'Data Analyst', description: 'Clean and analyze data. Create reports and visualizations.' },
            { stage: 'Junior Data Scientist', description: 'Build predictive models. Work with senior scientists on projects.' },
            { stage: 'Data Scientist', description: 'Lead analytics projects. Communicate insights to stakeholders.' },
            { stage: 'Senior Data Scientist / ML Engineer', description: 'Design ML systems. Mentor team and drive innovation.' }
        ]
    },
    'UI/UX Designer': {
        skills: [
            { name: 'Design Principles', description: 'Color theory, typography, layout' },
            { name: 'User Research', description: 'Interviews, surveys, usability testing' },
            { name: 'Wireframing', description: 'Low and high fidelity mockups' },
            { name: 'Prototyping', description: 'Interactive prototypes and animations' },
            { name: 'Design Systems', description: 'Component libraries and style guides' },
            { name: 'Information Architecture', description: 'Site maps and user flows' },
            { name: 'Accessibility', description: 'WCAG guidelines and inclusive design' },
            { name: 'Front-end Basics', description: 'HTML, CSS for better collaboration' }
        ],
        projects: [
            { name: 'Mobile App Redesign', description: 'Improve existing app UX' },
            { name: 'E-commerce Website', description: 'Complete user journey design' },
            { name: 'Design System', description: 'Build reusable component library' },
            { name: 'Dashboard Interface', description: 'Data visualization and analytics' },
            { name: 'Landing Page', description: 'High-converting marketing page' }
        ],
        tools: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Miro', 'UserTesting', 'Zeplin', 'Illustrator'],
        roadmap: [
            { step: 'Basics', description: 'Learn design tools and principles. Study great designs.' },
            { step: 'UX Fundamentals', description: 'User research methods. Create user personas and journey maps.' },
            { step: 'Advanced Design', description: 'Master prototyping and interaction design. Build portfolio.' },
            { step: 'Professional', description: 'Lead design projects. Collaborate with developers and stakeholders.' }
        ],
        careerPath: [
            { stage: 'Junior Designer', description: 'Create mockups and assets. Assist senior designers on projects.' },
            { stage: 'UI/UX Designer', description: 'Own design projects end-to-end. Conduct user research.' },
            { stage: 'Senior Designer', description: 'Lead major initiatives. Mentor junior designers.' },
            { stage: 'Design Lead / Director', description: 'Set design vision and strategy. Manage design team.' }
        ]
    },
    'Machine Learning Engineer': {
        skills: [
            { name: 'Python & Libraries', description: 'NumPy, Pandas, Scikit-learn' },
            { name: 'Machine Learning Algorithms', description: 'Regression, classification, clustering' },
            { name: 'Deep Learning', description: 'Neural networks, CNN, RNN, Transformers' },
            { name: 'ML Frameworks', description: 'TensorFlow, PyTorch, Keras' },
            { name: 'MLOps', description: 'Model deployment, monitoring, versioning' },
            { name: 'Cloud Platforms', description: 'AWS SageMaker, GCP AI Platform' },
            { name: 'Data Engineering', description: 'ETL pipelines, data preprocessing' },
            { name: 'Model Optimization', description: 'Hyperparameter tuning, pruning' }
        ],
        projects: [
            { name: 'Image Classifier', description: 'CNN for object recognition' },
            { name: 'NLP Chatbot', description: 'Sentiment analysis and text generation' },
            { name: 'Recommendation Engine', description: 'Collaborative filtering system' },
            { name: 'Anomaly Detection', description: 'Fraud detection model' },
            { name: 'End-to-End ML Pipeline', description: 'Deploy model to production' }
        ],
        tools: ['Python', 'TensorFlow', 'PyTorch', 'Docker', 'Kubernetes', 'MLflow', 'AWS', 'Git'],
        roadmap: [
            { step: 'ML Fundamentals', description: 'Learn algorithms and mathematics behind ML.' },
            { step: 'Deep Learning', description: 'Master neural networks and frameworks.' },
            { step: 'MLOps', description: 'Learn model deployment and production systems.' },
            { step: 'Specialization', description: 'Focus on NLP, Computer Vision, or RL.' }
        ],
        careerPath: [
            { stage: 'ML Engineer I', description: 'Build and train models under guidance.' },
            { stage: 'ML Engineer II', description: 'Deploy models to production independently.' },
            { stage: 'Senior ML Engineer', description: 'Design ML systems and lead projects.' },
            { stage: 'ML Architect / Research Lead', description: 'Set ML strategy and research direction.' }
        ]
    },
    'DevOps Engineer': {
        skills: [
            { name: 'Linux Administration', description: 'Command line, shell scripting' },
            { name: 'CI/CD', description: 'Jenkins, GitLab CI, GitHub Actions' },
            { name: 'Containerization', description: 'Docker, Kubernetes orchestration' },
            { name: 'Cloud Platforms', description: 'AWS, Azure, or GCP services' },
            { name: 'Infrastructure as Code', description: 'Terraform, Ansible, CloudFormation' },
            { name: 'Monitoring', description: 'Prometheus, Grafana, ELK stack' },
            { name: 'Scripting', description: 'Bash, Python automation' },
            { name: 'Security', description: 'SSL/TLS, secrets management' }
        ],
        projects: [
            { name: 'CI/CD Pipeline', description: 'Automated testing and deployment' },
            { name: 'Kubernetes Cluster', description: 'Deploy microservices' },
            { name: 'Monitoring Dashboard', description: 'Track system metrics' },
            { name: 'Infrastructure Automation', description: 'Terraform for cloud resources' },
            { name: 'Log Aggregation', description: 'Centralized logging system' }
        ],
        tools: ['Linux', 'Docker', 'Kubernetes', 'Jenkins', 'Terraform', 'AWS', 'Git', 'Prometheus'],
        roadmap: [
            { step: 'Linux Basics', description: 'Master command line and system administration.' },
            { step: 'Automation', description: 'Learn CI/CD and scripting for automation.' },
            { step: 'Containerization', description: 'Master Docker and Kubernetes.' },
            { step: 'Cloud & IaC', description: 'Infrastructure as Code and cloud services.' }
        ],
        careerPath: [
            { stage: 'Junior DevOps Engineer', description: 'Maintain CI/CD pipelines and infrastructure.' },
            { stage: 'DevOps Engineer', description: 'Design and implement automation solutions.' },
            { stage: 'Senior DevOps Engineer', description: 'Lead infrastructure projects and architecture.' },
            { stage: 'DevOps Architect / SRE Lead', description: 'Define DevOps strategy and reliability.' }
        ]
    },
    'Cybersecurity Analyst': {
        skills: [
            { name: 'Network Security', description: 'Firewalls, VPNs, IDS/IPS' },
            { name: 'Security Fundamentals', description: 'CIA triad, threat modeling' },
            { name: 'Penetration Testing', description: 'Vulnerability assessment, exploitation' },
            { name: 'SIEM Tools', description: 'Splunk, QRadar, log analysis' },
            { name: 'Cryptography', description: 'Encryption, hashing, PKI' },
            { name: 'Compliance', description: 'GDPR, HIPAA, PCI-DSS' },
            { name: 'Incident Response', description: 'Threat detection and remediation' },
            { name: 'Security Tools', description: 'Wireshark, Metasploit, Nmap' }
        ],
        projects: [
            { name: 'Network Scan', description: 'Identify vulnerabilities in network' },
            { name: 'Security Audit', description: 'Assess organization security posture' },
            { name: 'SIEM Dashboard', description: 'Monitor security events' },
            { name: 'Incident Response Plan', description: 'Document response procedures' },
            { name: 'Security Awareness Training', description: 'Educate team on threats' }
        ],
        tools: ['Wireshark', 'Metasploit', 'Nmap', 'Burp Suite', 'Splunk', 'Kali Linux', 'Nessus', 'Python'],
        roadmap: [
            { step: 'Security Basics', description: 'Learn networking and security fundamentals.' },
            { step: 'Tools & Techniques', description: 'Master security tools and methodologies.' },
            { step: 'Certifications', description: 'Get CompTIA Security+, CEH, or CISSP.' },
            { step: 'Specialization', description: 'Focus on pentesting, forensics, or GRC.' }
        ],
        careerPath: [
            { stage: 'Security Analyst I', description: 'Monitor security events and alerts.' },
            { stage: 'Security Analyst II', description: 'Investigate incidents and vulnerabilities.' },
            { stage: 'Senior Security Analyst', description: 'Lead security projects and assessments.' },
            { stage: 'Security Architect / CISO', description: 'Define security strategy and governance.' }
        ]
    }
};

function getCareerData(careerName) {
    if (careersData[careerName]) {
        return careersData[careerName];
    }
    
    return {
        skills: [
            { name: 'Core Skill 1', description: 'Fundamental knowledge in the field' },
            { name: 'Core Skill 2', description: 'Technical competency required' },
            { name: 'Core Skill 3', description: 'Industry-specific expertise' },
            { name: 'Core Skill 4', description: 'Advanced techniques and methods' },
            { name: 'Communication', description: 'Effective verbal and written skills' },
            { name: 'Problem Solving', description: 'Analytical and critical thinking' }
        ],
        projects: [
            { name: 'Beginner Project', description: 'Start with fundamentals' },
            { name: 'Intermediate Project', description: 'Build practical applications' },
            { name: 'Advanced Project', description: 'Complex real-world solution' },
            { name: 'Portfolio Showcase', description: 'Demonstrate your expertise' }
        ],
        tools: ['Industry Tool 1', 'Industry Tool 2', 'Industry Tool 3', 'Industry Tool 4'],
        roadmap: [
            { step: 'Foundation', description: 'Learn basics and core concepts' },
            { step: 'Intermediate', description: 'Develop practical skills' },
            { step: 'Advanced', description: 'Master advanced techniques' },
            { step: 'Expert', description: 'Become industry leader' }
        ],
        careerPath: [
            { stage: 'Entry Level', description: 'Start your career journey' },
            { stage: 'Mid Level', description: 'Gain experience and expertise' },
            { stage: 'Senior Level', description: 'Lead projects and teams' },
            { stage: 'Expert / Director', description: 'Strategic leadership role' }
        ]
    };
}
