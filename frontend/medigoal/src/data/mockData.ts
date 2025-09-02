export interface Campaign {
  id: string;
  title: string;
  patientName: string;
  age: number;
  condition: string;
  city: string;
  story: string;
  targetAmount: number;
  raisedAmount: number;
  image: string;
  documents: string[];
  updates: Update[];
  contributors: Contributor[];
  isUrgent: boolean;
  category: 'children' | 'critical' | 'general';
  createdAt: string;
}

export interface Update {
  id: string;
  title: string;
  content: string;
  date: string;
  image?: string;
}

export interface Contributor {
  name: string;
  amount: number;
  date: string;
  isAnonymous: boolean;
}

export const mockCampaigns: Campaign[] = [
  {
    id: '1',
    title: 'Help Sarah Fight Leukemia',
    patientName: 'Sarah Johnson',
    age: 8,
    condition: 'Acute Lymphoblastic Leukemia',
    city: 'Mumbai, Maharashtra',
    story: 'Sarah is a bright 8-year-old who loves to paint and play with her friends. Recently diagnosed with Acute Lymphoblastic Leukemia, she needs immediate chemotherapy treatment. Her family has already spent their savings on initial treatments and urgently needs support for the ongoing medical expenses. The doctors are optimistic about her recovery with proper treatment, but the cost is overwhelming for her middle-class family. Sarah\'s parents work day and night, but medical bills are mounting faster than they can manage. Your support can help give Sarah the fighting chance she deserves.',
    targetAmount: 500000,
    raisedAmount: 245000,
    image: 'https://th.bing.com/th/id/OIP.nMw4zg8EbJvQYKli-WXbzQHaED?w=265&h=180&c=7&r=0&o=7&pid=1.7&rm=3',
    documents: ['medical-report-1.pdf', 'doctor-prescription.pdf', 'hospital-estimate.pdf'],
    updates: [
      {
        id: '1',
        title: 'Treatment Started Successfully',
        content: 'Sarah has begun her first round of chemotherapy. She is responding well to treatment and her spirits remain high. The medical team is optimistic about her progress.',
        date: '2024-01-15'
      },
      {
        id: '2',
        title: 'Second Round of Chemotherapy',
        content: 'Sarah completed her second round of treatment. Blood reports show positive improvements. Thank you to everyone who has supported us so far.',
        date: '2024-01-22'
      }
    ],
    contributors: [
      { name: 'John Smith', amount: 10000, date: '2024-01-10', isAnonymous: false },
      { name: 'Anonymous', amount: 5000, date: '2024-01-12', isAnonymous: true },
      { name: 'Maria Garcia', amount: 15000, date: '2024-01-14', isAnonymous: false },
      { name: 'Anonymous', amount: 25000, date: '2024-01-16', isAnonymous: true }
    ],
    isUrgent: true,
    category: 'children',
    createdAt: '2024-01-01'
  },
  {
    id: '2',
    title: 'Heart Surgery for Amit Kumar',
    patientName: 'Amit Patel',
    age: 45,
    condition: 'Coronary Artery Disease',
    city: 'Delhi, India',
    story: 'Amit is a hardworking father of two who recently suffered a major heart attack while working late at his office. He needs urgent bypass surgery, but his insurance doesn\'t cover the full cost. His family is struggling to arrange funds for this life-saving procedure. Amit has been the sole breadwinner for his family, supporting his elderly parents and two young children. The sudden medical emergency has left the family in financial distress. The doctors have advised immediate surgery to prevent further complications. Every day of delay increases the risk to Amit\'s life.',
    targetAmount: 750000,
    raisedAmount: 320000,
    image: 'https://scx2.b-cdn.net/gfx/news/2021/new-protocol-aims-for.jpg',
    documents: ['cardiac-report.pdf', 'surgery-estimate.pdf', 'insurance-documents.pdf'],
    updates: [
      {
        id: '2',
        title: 'Pre-surgery Tests Completed',
        content: 'All pre-operative tests have been completed successfully. Surgery has been scheduled for next week. Amit is in stable condition and ready for the procedure.',
        date: '2024-01-20'
      },

      {
        id: '2',
        title: 'final-surgery Completed',
        content: 'All pre-operative tests have been completed successfully. Surgery has been scheduled for next week. Amit is in stable condition and ready for the procedure.',
        date: '2025-08-10'
      }
    ],
    contributors: [
      { name: 'Priya Sharma', amount: 15000, date: '2024-01-08', isAnonymous: false },
      { name: 'Corporate Donor', amount: 25000, date: '2024-01-15', isAnonymous: false },
      { name: 'Anonymous', amount: 50000, date: '2024-01-18', isAnonymous: true }
    ],
    isUrgent: true,
    category: 'critical',
    createdAt: '2024-01-05'
  },
  {
    id: '3',
    title: 'Cancer Treatment for Meera',
    patientName: 'Meera Singh',
    age: 34,
    condition: 'Breast Cancer',
    city: 'Bangalore, Karnataka',
    story: 'Meera is a young mother who was recently diagnosed with stage 2 breast cancer during a routine check-up. She needs immediate chemotherapy and radiation therapy. Being the sole breadwinner of her family after her husband\'s accident last year, she needs financial support for her treatment. Meera works as a software developer and has been supporting her family of three children and mother-in-law. The diagnosis came as a shock, but early detection gives her a good chance of recovery with proper treatment. The treatment plan includes surgery, chemotherapy, and radiation therapy over the next 8 months.',
    targetAmount: 600000,
    raisedAmount: 180000,
    image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg',
    documents: ['biopsy-report.pdf', 'treatment-plan.pdf', 'oncologist-report.pdf'],
    updates: [
      {
        id: '3',
        title: 'Surgery Successful',
        content: 'Meera\'s surgery was successful. The tumor has been completely removed and pathology reports are positive. She will start chemotherapy next week.',
        date: '2024-01-25'
      }
    ],
    contributors: [
      { name: 'Rajesh Kumar', amount: 8000, date: '2024-01-18', isAnonymous: false },
      { name: 'Tech Community Fund', amount: 75000, date: '2024-01-20', isAnonymous: false }
    ],
    isUrgent: false,
    category: 'general',
    createdAt: '2024-01-10'
  },
  {
    id: '4',
    title: 'Kidney Transplant for Ravi',
    patientName: 'Ravi Gupta',
    age: 28,
    condition: 'Chronic Kidney Disease',
    city: 'Chennai, Tamil Nadu',
    story: 'Ravi is a young software engineer who has been battling chronic kidney disease for the past 3 years. His condition has deteriorated rapidly, and he now needs an urgent kidney transplant to survive. His brother has volunteered as a living donor, but the family needs help with the extensive surgical costs. Ravi has been on dialysis three times a week, which has severely impacted his quality of life and ability to work. The transplant offers him a chance to return to normal life and continue his career. The family has exhausted their savings on dialysis and medication costs.',
    targetAmount: 800000,
    raisedAmount: 425000,
    image: 'https://th.bing.com/th/id/OIP.6Cv0N6fthgmq9E-wp4w5OgHaEH?w=280&h=180&c=7&r=0&o=7&pid=1.7&rm=3',
    documents: ['kidney-function-test.pdf', 'transplant-evaluation.pdf', 'donor-compatibility.pdf'],
    updates: [
      {
        id: '4',
        title: 'Donor Match Confirmed',
        content: 'Great news! Ravi\'s brother is a perfect match for kidney donation. All compatibility tests have been completed successfully. Surgery preparations are underway.',
        date: '2024-01-22'
      },
      {
        id: '5',
        title: 'Pre-transplant Preparations Complete',
        content: 'Both Ravi and his brother have completed all pre-transplant evaluations. The surgery has been scheduled for next month at the leading transplant center.',
        date: '2024-01-28'
      }
    ],
    contributors: [
      { name: 'Tech Community', amount: 50000, date: '2024-01-16', isAnonymous: false },
      { name: 'Anonymous', amount: 20000, date: '2024-01-20', isAnonymous: true },
      { name: 'College Friends', amount: 35000, date: '2024-01-24', isAnonymous: false },
      { name: 'Anonymous', amount: 100000, date: '2024-01-26', isAnonymous: true }
    ],
    isUrgent: true,
    category: 'critical',
    createdAt: '2024-01-12'
  },
  {
    id: '5',
    title: 'Brain Tumor Surgery for Little Arjun',
    patientName: 'Arjun Verma',
    age: 6,
    condition: 'Brain Tumor',
    city: 'Pune, Maharashtra',
    story: 'Arjun is a cheerful 6-year-old who loves playing cricket with his friends. Recently, his parents noticed he was having frequent headaches and seizures. After multiple tests and scans, doctors discovered a brain tumor that requires immediate surgical removal. The family has exhausted their resources and needs urgent help for this critical surgery. Arjun\'s father works as a mechanic and mother is a homemaker. They have already sold their jewelry and borrowed money from relatives, but it\'s not enough for the expensive neurosurgery. The tumor is operable, and doctors are confident about a successful outcome with timely intervention.',
    targetAmount: 900000,
    raisedAmount: 567000,
    image: 'https://images.pexels.com/photos/1416736/pexels-photo-1416736.jpeg',
    documents: ['mri-scan.pdf', 'neurosurgeon-report.pdf', 'hospital-estimate.pdf'],
    updates: [
      {
        id: '6',
        title: 'Surgery Date Confirmed',
        content: 'Arjun\'s surgery has been scheduled for next week. The neurosurgeon is confident about the procedure. Pre-operative tests are all normal.',
        date: '2024-01-25'
      }
    ],
    contributors: [
      { name: 'School Community', amount: 35000, date: '2024-01-14', isAnonymous: false },
      { name: 'Local Business', amount: 45000, date: '2024-01-19', isAnonymous: false },
      { name: 'Anonymous', amount: 25000, date: '2024-01-21', isAnonymous: true },
      { name: 'Cricket Club', amount: 15000, date: '2024-01-23', isAnonymous: false }
    ],
    isUrgent: true,
    category: 'children',
    createdAt: '2024-01-08'
  },
  {
    id: '6',
    title: 'Liver Transplant for Sunita',
    patientName: 'Sunita Reddy',
    age: 52,
    condition: 'Liver Cirrhosis',
    city: 'Hyderabad, Telangana',
    story: 'Sunita is a devoted mother and grandmother who has been battling liver cirrhosis for the past two years. Her condition has worsened significantly, and doctors say she needs an urgent liver transplant to survive. Her daughter has volunteered as a living donor, but the family cannot afford the expensive procedure. Sunita has been a pillar of strength for her family, taking care of everyone despite her illness. The transplant is her only hope for survival, and the family has been desperately trying to arrange funds. Her husband is a retired teacher with limited pension, and the medical expenses have drained their savings.',
    targetAmount: 1200000,
    raisedAmount: 340000,
    image: 'https://images.pexels.com/photos/1181717/pexels-photo-1181717.jpeg',
    documents: ['liver-function-tests.pdf', 'transplant-evaluation.pdf', 'donor-assessment.pdf'],
    updates: [],
    contributors: [
      { name: 'Extended Family', amount: 75000, date: '2024-01-17', isAnonymous: false },
      { name: 'Anonymous', amount: 50000, date: '2024-01-19', isAnonymous: true },
      { name: 'Neighborhood Community', amount: 40000, date: '2024-01-22', isAnonymous: false }
    ],
    isUrgent: true,
    category: 'critical',
    createdAt: '2024-01-15'
  }
];

export const statistics = {
  fundraisersCreated: 12847,
  livesSaved: 8548,
  totalRaised: 56323789
};