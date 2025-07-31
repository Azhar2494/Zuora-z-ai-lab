// Sample data container
let sampleData = null;

// Load sample data with realistic figures and customer set
function loadSampleData() {
    sampleData = getSampleData();
    displayKpiMetrics();
    clearResults();
}

function clearResults() {
    [
        'billing-results',
        'revenue-results',
        'cpq-results',
        'collections-results',
        'zephr-results',
        'forecasting-results',
        'copilot-response',
    ].forEach(id => {
        document.getElementById(id).innerHTML = '';
    });
}

function displayKpiMetrics() {
    if (!sampleData) return;
    const kpiDiv = document.getElementById('kpi-metrics');
    kpiDiv.innerHTML = `
        <p><strong>Total Customers:</strong> ${sampleData.customers.length}</p>
        <p><strong>Monthly Recurring Revenue (MRR):</strong> $${sampleData.mrr.toLocaleString()}</p>
        <p><strong>Annual Recurring Revenue (ARR):</strong> $${sampleData.arr.toLocaleString()}</p>
        <p><strong>Churn Rate:</strong> ${sampleData.churnRate}%</p>
    `;
}

// Billing AI: Simulate smart retry result
function simulateBillingRetry() {
    if (!sampleData) return alert('Please load sample data first!');
    const successRate = 87; // Simulated payment retry success rate %
    document.getElementById('billing-results').innerHTML = `Smart Retry payment success rate: <strong>${successRate}%</strong>`;
}

// Revenue AI: Calculate total recognized revenue
function runRevenueScenario() {
    if (!sampleData) return alert('Please load sample data first!');
    const totalRecognized = sampleData.revenueRecognition.reduce((a, b) => a + b, 0);
    document.getElementById('revenue-results').innerHTML = `Total recognized revenue: <strong>$${totalRecognized.toLocaleString()}</strong>`;
}

// CPQ AI: Generate simulated quote
function generateQuote() {
    if (!sampleData) return alert('Please load sample data first!');
    const basePrice = 5000;
    const upsell = 1200;
    const quote = basePrice + upsell;
    document.getElementById('cpq-results').innerHTML = `Generated quote amount: <strong>$${quote}</strong>`;
}

// Collections AI: Predict risk and DSO
function predictCollectionsRisk() {
    if (!sampleData) return alert('Please load sample data first!');
    const riskLevel = 'Medium';
    const dso = 28.4;
    document.getElementById('collections-results').innerHTML = `Collections risk: <strong>${riskLevel}</strong>, Days Sales Outstanding (DSO): <strong>${dso}</strong>`;
}

// Zephr AI: Paywall conversion rate optimization
function optimizePaywall() {
    if (!sampleData) return alert('Please load sample data first!');
    const conversionRate = 28.3;
    document.getElementById('zephr-results').innerHTML = `Optimized conversion rate: <strong>${conversionRate}%</strong>`;
}

// Forecasting AI: Show next quarter revenue forecast
function runForecasting() {
    if (!sampleData) return alert('Please load sample data first!');
    const forecast = sampleData.forecast[0];
    document.getElementById('forecasting-results').innerHTML = `Forecast for next quarter: <strong>$${forecast.toLocaleString()}</strong>`;
}

// AI Copilot: Basic Q&A simulation
function askCopilot() {
    const query = document.getElementById('copilot-query').value.toLowerCase().trim();
    const responseDiv = document.getElementById('copilot-response');
    if (!sampleData) return alert('Please load sample data first!');
    if (!query) {
        responseDiv.innerHTML = "Please ask a question.";
        return;
    }

    if (query.includes('churn')) {
        responseDiv.innerHTML = `Current churn rate is <strong>${sampleData.churnRate}%</strong>. Proactive retention actions recommended.`;
    } else if (query.includes('mrr')) {
        responseDiv.innerHTML = `MRR currently stands at <strong>$${sampleData.mrr.toLocaleString()}</strong>.`;
    } else if (query.includes('forecast')) {
        responseDiv.innerHTML = `Next quarter revenue forecast is <strong>$${sampleData.forecast[0].toLocaleString()}</strong>.`;
    } else {
        responseDiv.innerHTML = "I'm here to assist you with subscription analytics. Try asking about churn, MRR, or forecast.";
    }
}

// Generate sample data
function getSampleData() {
    return {
        customers: Array(200).fill(0).map((_, i) => ({
            id: i + 1,
            name: `Customer ${i + 1}`,
            healthScore: Math.floor(Math.random() * 100),
        })),
        mrr: 2_760_000,
        arr: 33_000_000,
        churnRate: 7.3,
        revenueRecognition: [500_000, 750_000, 850_000, 650_000, 1_000_000],
        forecast: [8_400_000, 8_700_000, 9_000_000],
    };
}
