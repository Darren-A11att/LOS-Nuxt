<template>
  <div>
    <div class="mb-4 border-b border-secondary-200 pb-3">
      <div class="flex justify-between items-center">
        <div>
          <div class="flex items-center">
            <NuxtLink to="/applications" class="text-primary-600 hover:text-primary-800 mr-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </NuxtLink>
            <h1 class="text-2xl font-semibold text-secondary-900">Application {{ application.id }}</h1>
          </div>
          <p class="text-secondary-500">Submitted on {{ application.date }}</p>
        </div>
        <div class="flex space-x-2">
          <button v-if="application.status === 'pending' || application.status === 'review'" class="px-4 py-2 text-white bg-success rounded-md hover:bg-green-600 font-medium text-sm">Approve</button>
          <button v-if="application.status === 'pending' || application.status === 'review'" class="px-4 py-2 text-white bg-danger rounded-md hover:bg-red-600 font-medium text-sm">Reject</button>
          <button class="px-4 py-2 text-secondary-700 bg-white border border-secondary-300 rounded-md hover:bg-secondary-50 font-medium text-sm">Export</button>
        </div>
      </div>
    </div>
    
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
      <div class="lg:col-span-2">
        <div class="card mb-6">
          <h2 class="text-xl font-semibold text-secondary-900 mb-4">Applicant Information</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div class="mb-4">
                <label class="block text-sm font-medium text-secondary-700 mb-1">Full Name</label>
                <div class="text-secondary-900">{{ application.applicant }}</div>
              </div>
              <div class="mb-4">
                <label class="block text-sm font-medium text-secondary-700 mb-1">Email Address</label>
                <div class="text-secondary-900">{{ application.email }}</div>
              </div>
              <div class="mb-4">
                <label class="block text-sm font-medium text-secondary-700 mb-1">Phone Number</label>
                <div class="text-secondary-900">{{ application.phone }}</div>
              </div>
            </div>
            <div>
              <div class="mb-4">
                <label class="block text-sm font-medium text-secondary-700 mb-1">Date of Birth</label>
                <div class="text-secondary-900">{{ application.dob }}</div>
              </div>
              <div class="mb-4">
                <label class="block text-sm font-medium text-secondary-700 mb-1">Address</label>
                <div class="text-secondary-900">{{ application.address }}</div>
              </div>
              <div class="mb-4">
                <label class="block text-sm font-medium text-secondary-700 mb-1">Employment Status</label>
                <div class="text-secondary-900">{{ application.employment }}</div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="card mb-6">
          <h2 class="text-xl font-semibold text-secondary-900 mb-4">Loan Details</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div class="mb-4">
                <label class="block text-sm font-medium text-secondary-700 mb-1">Loan Amount</label>
                <div class="text-secondary-900">${{ application.amount.toLocaleString() }}</div>
              </div>
              <div class="mb-4">
                <label class="block text-sm font-medium text-secondary-700 mb-1">Loan Purpose</label>
                <div class="text-secondary-900">{{ application.purpose }}</div>
              </div>
              <div class="mb-4">
                <label class="block text-sm font-medium text-secondary-700 mb-1">Loan Term</label>
                <div class="text-secondary-900">{{ application.term }} months</div>
              </div>
            </div>
            <div>
              <div class="mb-4">
                <label class="block text-sm font-medium text-secondary-700 mb-1">Interest Rate</label>
                <div class="text-secondary-900">{{ application.interestRate }}%</div>
              </div>
              <div class="mb-4">
                <label class="block text-sm font-medium text-secondary-700 mb-1">Monthly Payment</label>
                <div class="text-secondary-900">${{ application.monthlyPayment.toLocaleString() }}</div>
              </div>
              <div class="mb-4">
                <label class="block text-sm font-medium text-secondary-700 mb-1">Total Repayment</label>
                <div class="text-secondary-900">${{ application.totalRepayment.toLocaleString() }}</div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="card mb-6">
          <h2 class="text-xl font-semibold text-secondary-900 mb-4">Financial Information</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div class="mb-4">
                <label class="block text-sm font-medium text-secondary-700 mb-1">Annual Income</label>
                <div class="text-secondary-900">${{ application.annualIncome.toLocaleString() }}</div>
              </div>
              <div class="mb-4">
                <label class="block text-sm font-medium text-secondary-700 mb-1">Monthly Expenses</label>
                <div class="text-secondary-900">${{ application.monthlyExpenses.toLocaleString() }}</div>
              </div>
              <div class="mb-4">
                <label class="block text-sm font-medium text-secondary-700 mb-1">Debt-to-Income Ratio</label>
                <div class="text-secondary-900">{{ application.dti }}%</div>
              </div>
            </div>
            <div>
              <div class="mb-4">
                <label class="block text-sm font-medium text-secondary-700 mb-1">Credit Score</label>
                <div class="font-semibold" :class="getCreditScoreClass(application.creditScore)">{{ application.creditScore }}</div>
              </div>
              <div class="mb-4">
                <label class="block text-sm font-medium text-secondary-700 mb-1">Existing Debts</label>
                <div class="text-secondary-900">${{ application.existingDebts.toLocaleString() }}</div>
              </div>
              <div class="mb-4">
                <label class="block text-sm font-medium text-secondary-700 mb-1">Bankruptcy History</label>
                <div class="text-secondary-900">{{ application.bankruptcyHistory ? 'Yes' : 'No' }}</div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="card">
          <h2 class="text-xl font-semibold text-secondary-900 mb-4">Documents</h2>
          <div class="space-y-4">
            <div v-for="(doc, index) in application.documents" :key="index" class="flex items-center justify-between p-4 bg-secondary-50 rounded-lg">
              <div class="flex items-center">
                <div class="p-2 bg-secondary-100 rounded mr-3">
                  <svg class="w-6 h-6 text-secondary-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <div class="text-secondary-900 font-medium">{{ doc.name }}</div>
                  <div class="text-sm text-secondary-500">{{ doc.size }} • Uploaded {{ doc.date }}</div>
                </div>
              </div>
              <button class="text-primary-600 hover:text-primary-800 font-medium">
                View
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div class="lg:col-span-1">
        <div class="card mb-6">
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-xl font-semibold text-secondary-900">Application Status</h2>
            <StatusBadge :status="application.status" />
          </div>
          <div class="space-y-4">
            <div class="relative pl-8">
              <div class="absolute left-0 top-1 w-5 h-5 bg-success rounded-full"></div>
              <div class="font-medium text-secondary-900">Application Submitted</div>
              <div class="text-sm text-secondary-500">Apr 23, 2024 at 10:34 AM</div>
            </div>
            <div class="relative pl-8">
              <div class="absolute left-0 top-1 w-5 h-5 bg-success rounded-full"></div>
              <div class="font-medium text-secondary-900">Document Verification</div>
              <div class="text-sm text-secondary-500">Apr 23, 2024 at 11:15 AM</div>
            </div>
            <div class="relative pl-8">
              <div class="absolute left-0 top-1 w-5 h-5 bg-primary-500 rounded-full animate-pulse"></div>
              <div class="font-medium text-secondary-900">Underwriting Review</div>
              <div class="text-sm text-secondary-500">In progress</div>
            </div>
            <div class="relative pl-8">
              <div class="absolute left-0 top-1 w-5 h-5 bg-secondary-300 rounded-full"></div>
              <div class="font-medium text-secondary-400">Final Decision</div>
              <div class="text-sm text-secondary-400">Pending</div>
            </div>
            <div class="relative pl-8">
              <div class="absolute left-0 top-1 w-5 h-5 bg-secondary-300 rounded-full"></div>
              <div class="font-medium text-secondary-400">Loan Processing</div>
              <div class="text-sm text-secondary-400">Pending</div>
            </div>
          </div>
        </div>
        
        <div class="card mb-6">
          <h2 class="text-xl font-semibold text-secondary-900 mb-4">Risk Assessment</h2>
          <div class="mb-4">
            <div class="flex justify-between mb-1">
              <span class="text-sm font-medium text-secondary-700">Overall Risk Score</span>
              <span class="text-sm font-medium text-secondary-700">{{ application.riskScore }}/100</span>
            </div>
            <div class="w-full bg-secondary-200 rounded-full h-2.5">
              <div :class="getRiskScoreClass(application.riskScore)" :style="`width: ${application.riskScore}%`" class="h-2.5 rounded-full"></div>
            </div>
          </div>
          <div class="space-y-3">
            <div class="flex justify-between">
              <div class="text-secondary-700">Credit History</div>
              <div class="font-medium" :class="getFactorClass(application.factors.creditHistory)">{{ application.factors.creditHistory }}</div>
            </div>
            <div class="flex justify-between">
              <div class="text-secondary-700">Income Stability</div>
              <div class="font-medium" :class="getFactorClass(application.factors.incomeStability)">{{ application.factors.incomeStability }}</div>
            </div>
            <div class="flex justify-between">
              <div class="text-secondary-700">Debt-to-Income</div>
              <div class="font-medium" :class="getFactorClass(application.factors.dti)">{{ application.factors.dti }}</div>
            </div>
            <div class="flex justify-between">
              <div class="text-secondary-700">Loan Amount</div>
              <div class="font-medium" :class="getFactorClass(application.factors.loanAmount)">{{ application.factors.loanAmount }}</div>
            </div>
            <div class="flex justify-between">
              <div class="text-secondary-700">Employment History</div>
              <div class="font-medium" :class="getFactorClass(application.factors.employment)">{{ application.factors.employment }}</div>
            </div>
          </div>
        </div>
        
        <div class="card">
          <h2 class="text-xl font-semibold text-secondary-900 mb-4">Assessment Notes</h2>
          <div class="space-y-4">
            <div v-for="(note, index) in application.notes" :key="index" class="pb-4 border-b border-secondary-200 last:border-0 last:pb-0">
              <div class="flex items-start mb-2">
                <div class="w-8 h-8 rounded-full flex items-center justify-center bg-primary-100 text-primary-700 font-medium mr-3">
                  {{ note.author.charAt(0) }}
                </div>
                <div>
                  <div class="flex items-baseline">
                    <span class="font-medium text-secondary-900 mr-2">{{ note.author }}</span>
                    <span class="text-xs text-secondary-500">{{ note.date }}</span>
                  </div>
                  <p class="text-secondary-700">{{ note.content }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-4">
            <textarea rows="3" class="block p-2.5 w-full text-sm text-secondary-900 bg-secondary-50 rounded-lg border border-secondary-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Add a note..."></textarea>
            <button class="mt-2 px-4 py-2 text-white bg-primary-600 rounded-md hover:bg-primary-700 font-medium text-sm">Add Note</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'default'
});

const route = useRoute();
const id = route.params.id;

// Mock data for a single application (normally would fetch this from API)
const application = {
  id: 'APP-2024-1089',
  applicant: 'Jane Cooper',
  email: 'jane.cooper@example.com',
  phone: '(555) 123-4567',
  dob: 'May 10, 1985',
  address: '123 Main St, Anytown, CA 90210',
  employment: 'Full-time',
  amount: 25000,
  purpose: 'Home Improvement',
  term: 36,
  interestRate: 7.5,
  monthlyPayment: 778.25,
  totalRepayment: 28017,
  date: 'Apr 23, 2024',
  status: 'review',
  annualIncome: 85000,
  monthlyExpenses: 3200,
  dti: 28,
  creditScore: 710,
  existingDebts: 12000,
  bankruptcyHistory: false,
  riskScore: 72,
  factors: {
    creditHistory: 'Good',
    incomeStability: 'Excellent',
    dti: 'Average',
    loanAmount: 'Low',
    employment: 'Good'
  },
  documents: [
    { name: 'ID Verification.pdf', size: '2.3 MB', date: 'Apr 23, 2024' },
    { name: 'Pay Stubs.pdf', size: '1.5 MB', date: 'Apr 23, 2024' },
    { name: 'Bank Statements.pdf', size: '3.8 MB', date: 'Apr 23, 2024' },
    { name: 'Tax Return 2023.pdf', size: '4.2 MB', date: 'Apr 23, 2024' }
  ],
  notes: [
    { 
      author: 'Michael Smith', 
      date: 'Apr 23, 2024 at 11:23 AM', 
      content: 'Applicant has a stable job history with current employer for 5 years. Credit score is within acceptable range.'
    },
    { 
      author: 'Lisa Johnson', 
      date: 'Apr 23, 2024 at 2:15 PM', 
      content: 'Need to verify the bank statements. Some deposits appear irregular. Requested additional documentation.'
    }
  ]
};

function getCreditScoreClass(score) {
  if (score >= 750) return 'text-success';
  if (score >= 650) return 'text-primary-600';
  if (score >= 580) return 'text-warning';
  return 'text-danger';
}

function getRiskScoreClass(score) {
  if (score >= 80) return 'bg-success';
  if (score >= 60) return 'bg-primary-600';
  if (score >= 40) return 'bg-warning';
  return 'bg-danger';
}

function getFactorClass(factor) {
  if (factor === 'Excellent') return 'text-success';
  if (factor === 'Good') return 'text-primary-600';
  if (factor === 'Average') return 'text-warning';
  if (factor === 'Poor') return 'text-danger';
  return 'text-secondary-700';
}
</script>