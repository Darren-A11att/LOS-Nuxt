<template>
  <div>
    <div class="mb-4 border-b border-secondary-200 pb-3">
      <h1 class="text-2xl font-semibold text-secondary-900">Reports & Analytics</h1>
      <p class="text-secondary-500">Track performance and view metrics for your loan processing</p>
    </div>
    
    <div class="mb-6">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="md:col-span-1">
          <div class="card mb-4">
            <div class="flex items-center justify-between mb-4">
              <h2 class="text-lg font-semibold text-secondary-900">Time Period</h2>
            </div>
            <div>
              <div class="flex flex-col space-y-4">
                <button class="text-left px-4 py-2 bg-primary-50 border border-primary-200 rounded-lg text-primary-700 font-medium">
                  Last 30 Days
                </button>
                <button class="text-left px-4 py-2 bg-white border border-secondary-200 rounded-lg text-secondary-700 hover:bg-secondary-50">
                  Last Quarter
                </button>
                <button class="text-left px-4 py-2 bg-white border border-secondary-200 rounded-lg text-secondary-700 hover:bg-secondary-50">
                  Last 6 Months
                </button>
                <button class="text-left px-4 py-2 bg-white border border-secondary-200 rounded-lg text-secondary-700 hover:bg-secondary-50">
                  Year to Date
                </button>
                <button class="text-left px-4 py-2 bg-white border border-secondary-200 rounded-lg text-secondary-700 hover:bg-secondary-50">
                  Last Year
                </button>
                <button class="text-left px-4 py-2 bg-white border border-secondary-200 rounded-lg text-secondary-700 hover:bg-secondary-50">
                  Custom Range...
                </button>
              </div>
            </div>
          </div>
          
          <div class="card">
            <div class="flex items-center justify-between mb-4">
              <h2 class="text-lg font-semibold text-secondary-900">Export Report</h2>
            </div>
            <div class="mb-4">
              <label for="report-type" class="block mb-2 text-sm font-medium text-secondary-700">Report Type</label>
              <select id="report-type" class="bg-secondary-50 border border-secondary-300 text-secondary-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5">
                <option selected>Application Summary</option>
                <option>Approval Metrics</option>
                <option>Processing Times</option>
                <option>Risk Analysis</option>
                <option>Financial Overview</option>
              </select>
            </div>
            <div class="mb-4">
              <label for="format" class="block mb-2 text-sm font-medium text-secondary-700">Format</label>
              <select id="format" class="bg-secondary-50 border border-secondary-300 text-secondary-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5">
                <option selected>PDF</option>
                <option>Excel</option>
                <option>CSV</option>
              </select>
            </div>
            <button class="w-full px-4 py-2 text-white bg-primary-600 rounded-md hover:bg-primary-700 font-medium text-sm">
              Generate Report
            </button>
          </div>
        </div>
        
        <div class="md:col-span-2">
          <div class="card mb-4">
            <div class="flex items-center justify-between mb-4">
              <h2 class="text-lg font-semibold text-secondary-900">Application Volume</h2>
              <div class="flex space-x-2">
                <button class="text-xs font-medium text-white bg-primary-600 py-1 px-3 rounded-lg">Monthly</button>
                <button class="text-xs font-medium text-secondary-500 hover:text-secondary-900 bg-secondary-100 py-1 px-3 rounded-lg">Weekly</button>
                <button class="text-xs font-medium text-secondary-500 hover:text-secondary-900 bg-secondary-100 py-1 px-3 rounded-lg">Daily</button>
              </div>
            </div>
            <div class="h-80">
              <!-- This is where a chart would be rendered -->
              <div class="h-full flex items-center justify-center bg-secondary-50 rounded-lg">
                <p class="text-secondary-400">Application Volume Chart (Monthly)</p>
              </div>
            </div>
          </div>
          
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
            <div class="card">
              <h2 class="text-lg font-semibold text-secondary-900 mb-4">Approval Rates</h2>
              <div class="h-64">
                <!-- This is where a chart would be rendered -->
                <div class="h-full flex items-center justify-center bg-secondary-50 rounded-lg">
                  <p class="text-secondary-400">Approval Rate Chart</p>
                </div>
              </div>
            </div>
            <div class="card">
              <h2 class="text-lg font-semibold text-secondary-900 mb-4">Average Loan Amount</h2>
              <div class="h-64">
                <!-- This is where a chart would be rendered -->
                <div class="h-full flex items-center justify-center bg-secondary-50 rounded-lg">
                  <p class="text-secondary-400">Loan Amount Chart</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="card">
            <h2 class="text-lg font-semibold text-secondary-900 mb-4">Key Metrics</h2>
            <div class="overflow-x-auto">
              <table class="w-full text-sm text-left text-secondary-500">
                <thead class="text-xs text-secondary-700 uppercase bg-secondary-50">
                  <tr>
                    <th scope="col" class="px-6 py-3">Metric</th>
                    <th scope="col" class="px-6 py-3">Current Period</th>
                    <th scope="col" class="px-6 py-3">Previous Period</th>
                    <th scope="col" class="px-6 py-3">Change</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(metric, index) in metrics" :key="index" class="bg-white border-b">
                    <td class="px-6 py-4 font-medium text-secondary-900">{{ metric.name }}</td>
                    <td class="px-6 py-4">{{ metric.current }}</td>
                    <td class="px-6 py-4">{{ metric.previous }}</td>
                    <td class="px-6 py-4" :class="getChangeClass(metric.change)">
                      <div class="flex items-center">
                        <svg v-if="metric.change > 0" class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                        </svg>
                        <svg v-if="metric.change < 0" class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                        </svg>
                        {{ metric.change > 0 ? '+' : '' }}{{ metric.change }}%
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
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

// Mock data for reports
const metrics = [
  {
    name: 'Total Applications',
    current: '245',
    previous: '198',
    change: 23.7
  },
  {
    name: 'Approval Rate',
    current: '68.2%',
    previous: '71.3%',
    change: -3.1
  },
  {
    name: 'Average Processing Time',
    current: '1.4 days',
    previous: '1.8 days',
    change: -22.2
  },
  {
    name: 'Average Loan Amount',
    current: '$32,540',
    previous: '$28,900',
    change: 12.6
  },
  {
    name: 'Default Rate',
    current: '2.1%',
    previous: '2.4%',
    change: -12.5
  },
  {
    name: 'Customer Satisfaction',
    current: '4.8/5',
    previous: '4.6/5',
    change: 4.3
  }
];

function getChangeClass(change) {
  // For metrics where a negative change is good (like processing time or default rate)
  // You might want to add logic to handle those specially
  if (change > 0) return 'text-success';
  if (change < 0) return 'text-danger';
  return 'text-secondary-500';
}
</script>