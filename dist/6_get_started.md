---
layout: layout.liquid
title: "Get Started — Attentix AI"
---

# Get Started

## Hero Section

**Headline:** "From Zero to AI-Powered Intelligence in Days"

**Subheadline:** "Integration guides, API docs, and real code examples—everything you need to deploy Attentix in your environment."

**CTA Buttons:**
- Primary: "Start 14-Day Free Trial"
- Secondary: "View Full Docs"

**Visual:** Simple terminal/code editor interface showing a quick integration example

---

## Section 1: Three Ways to Get Started

**Headline:** "Pick Your Path"

### Path 1: Self-Service Evaluation (For Technical Teams)

**Timeline:** 2-3 hours of hands-on time

**What you'll do:**
1. Sign up for free trial (no credit card)
2. Upload sample CSV or connect to test database
3. Walk through 5-minute guided setup
4. Configure your first prediction model (UI-based, no coding required)
5. See predictions in real-time

**Outcome:** Working proof-of-concept you can show your team

**Best for:** Teams who want to explore independently

**[Start Free Trial →]**

---

### Path 2: Guided Technical Discovery (For Enterprises)

**Timeline:** 2-4 weeks (flexible)

**What happens:**
1. **Week 1:** You provide sample data (anonymized, <100 rows). We analyze feasibility.
2. **Week 2:** Technical deep-dive call (1h). We show how your data would flow through our platform.
3. **Week 3:** POC deployment in your environment (AWS/GCP/Azure). We handle setup.
4. **Week 4:** Results review + ROI calculation. Decide to proceed or pause.

**Cost:** Free (funded by Attentix)

**Success metric:** By week 4, you'll know: "Does this solve our problem?"

**Best for:** Organizations evaluating for production use

**[Schedule Discovery Call →]**

---

### Path 3: White-Glove Onboarding (For Fortune 500)

**Timeline:** 6-12 weeks (includes data integration, pilot, and go-live)

**What you get:**
- Dedicated implementation engineer
- Custom security & compliance review
- Private network deployment (option)
- Executive sponsorship (VP Engineering from Attentix)
- Success guarantees (we share risk)

**Cost:** Starts at $50K for full onboarding

**Best for:** Mission-critical deployments that require hands-on support

**[Contact Sales →]**

---

## Section 2: Quick-Start Guide (5 Minutes)

**Headline:** "The Fastest Way to Your First Prediction"

### Step 1: Create Account & Log In
```
Visit: app.attentix.ai
Email: your@company.com
Set password
Verify email (check inbox)
```

✅ **Done!** You're now in the dashboard.

---

### Step 2: Create Your First Project
- Click "New Project"
- Name it: "My First Forecast"
- Select industry: "General" (can change later)
- Click "Create"

✅ **Done!** Empty project ready.

---

### Step 3: Upload Data
- Click "Add Data Source"
- Choose: "Upload CSV" (or connect database)
- Download sample CSV template
- Fill with your data:
  - Column 1: Date (YYYY-MM-DD format)
  - Column 2: Metric 1 (numeric value)
  - Column 3: Metric 2 (numeric value)
  - ...
- Upload and validate

✅ **Done!** Data ingested.

---

### Step 4: Configure Your Model
- Click "Create Model"
- Choose task: "Forecast" or "Anomaly Detection"
- Select target metric (what to predict)
- Select features (what to use for prediction)
- Click "Auto-Configure" (we handle hyperparameter tuning)

✅ **Done!** Model training started (takes 2-5 minutes)

---

### Step 5: Make Your First Prediction
- Click "View Results"
- See your predictions in real-time
- Click on any prediction to see the attention heatmap (explains *why*)
- Download results as CSV

✅ **Done!** You have predictions with explainability.

---

## Section 3: Integration Guide

**Headline:** "Connect Your Data Sources"

### Supported Data Sources

**Databases:**
- ✅ PostgreSQL
- ✅ MySQL
- ✅ Snowflake
- ✅ BigQuery
- ✅ Redshift
- ✅ Databricks
- ✅ Spark

**Data Lakes:**
- ✅ S3 (AWS)
- ✅ GCS (Google Cloud)
- ✅ Azure Blob Storage
- ✅ ADLS (Azure Data Lake)

**Streaming:**
- ✅ Kafka
- ✅ AWS Kinesis
- ✅ Azure Event Hubs
- ✅ Pub/Sub (Google Cloud)

**APIs & Web:**
- ✅ REST APIs (generic)
- ✅ GraphQL APIs
- ✅ Third-party integrations (Salesforce, Slack, etc.)

**File Formats:**
- ✅ CSV, JSON, Parquet
- ✅ Excel (.xlsx)
- ✅ Avro

### Example: PostgreSQL Integration

**Code Example (Python):**

```python
import attentix

# Initialize client
client = attentix.Client(api_key="your_api_key_here")

# Create connection
db = client.create_data_source(
    name="Production Database",
    type="postgresql",
    host="mydb.aws.rds.amazonaws.com",
    port=5432,
    database="analytics",
    username="attentix_user",
    password="secure_password"  # Use env vars!
)

# Define your query
query = """
    SELECT 
        date,
        revenue,
        customer_count,
        conversion_rate
    FROM metrics
    WHERE date >= NOW() - INTERVAL '2 years'
"""

# Create dataset from query
dataset = db.query(query, schedule="daily")

# Create model
model = client.create_model(
    name="Revenue Forecast",
    dataset=dataset,
    task="forecast",
    target="revenue",
    features=["customer_count", "conversion_rate"],
    horizon="7d"  # 7-day forecast
)

# Generate predictions
predictions = model.predict()
print(predictions.forecast)
```

**Output:**
```
Date        | Forecast | Confidence | Factors
------------|----------|------------|----------------------------------
2025-04-12  | $842K    | 94%        | Customer growth (+12%), Seasonality
2025-04-13  | $856K    | 92%        | Customer growth (+12%), Seasonality
2025-04-14  | $821K    | 91%        | Market headwinds (-3%), Seasonality
```

---

### Example: REST API Integration

**If you don't want to use Python, use our REST API:**

```bash
# Get predictions via curl
curl -X POST https://api.attentix.ai/v1/predictions \
  -H "Authorization: Bearer your_api_key" \
  -H "Content-Type: application/json" \
  -d '{
    "model_id": "model_abc123",
    "data": [
      {"date": "2025-04-12", "customer_count": 45000},
      {"date": "2025-04-13", "customer_count": 45500}
    ]
  }'
```

**Response:**
```json
{
  "predictions": [
    {
      "date": "2025-04-12",
      "forecast": 842000,
      "confidence": 0.94,
      "attention_factors": {
        "customer_growth": 0.45,
        "seasonality": 0.38,
        "market_trend": 0.17
      }
    }
  ]
}
```

---

## Section 4: Pre-Built Templates by Industry

**Headline:** "Start with Proven Models"

### Financial Services Template

**Pre-configured for:**
- Risk forecasting
- Trading signal detection
- Portfolio stress testing
- Counterparty analysis

**Typical setup time:** 1 day (vs. 3 weeks to build from scratch)

**[Deploy Finance Template →]**

---

### Healthcare Template

**Pre-configured for:**
- Patient outcome prediction
- Diagnostic support
- Resource allocation
- Admission forecasting

**HIPAA-ready:** Yes (encryption, audit trails, consent workflow)

**[Deploy Healthcare Template →]**

---

### Supply Chain Template

**Pre-configured for:**
- Demand forecasting
- Supplier risk assessment
- Logistics optimization
- Inventory planning

**[Deploy Supply Chain Template →]**

---

### Retail & E-Commerce Template

**Pre-configured for:**
- Revenue forecasting
- Demand by SKU
- Personalized recommendations
- Churn prediction

**[Deploy Retail Template →]**

---

## Section 5: API Reference

**Headline:** "Full API Documentation"

### Core Endpoints

**Create Model:**
```
POST /v1/models
Content-Type: application/json

{
  "name": "My Model",
  "dataset_id": "ds_123",
  "task": "forecast",
  "target": "revenue",
  "features": ["metric1", "metric2"],
  "model_type": "attention-ensemble"
}
```

**Get Predictions:**
```
POST /v1/models/{model_id}/predict
{
  "data": [...]
}
```

**Stream Real-Time Predictions:**
```
GET /v1/models/{model_id}/stream
# WebSocket connection for live updates
```

**[Full OpenAPI Reference →]** (Interactive Swagger docs)

---

## Section 6: Common Patterns & Recipes

**Headline:** "Copy-Paste Solutions"

### Pattern 1: Daily Scheduled Forecasts
"I want predictions automatically generated every morning at 9 AM and emailed to my team."

**Solution:**
```python
# Set up scheduler
model.schedule_predictions(
    frequency="daily",
    time="09:00 UTC",
    output={
        "format": "csv",
        "destination": "email",
        "recipients": ["team@mycompany.com"]
    }
)
```

**[Full Recipe + Code →]**

---

### Pattern 2: Real-Time Alerts
"Trigger a Slack message if the anomaly score exceeds 0.8."

**Solution:**
```python
# Create trigger
model.create_trigger(
    condition="anomaly_score > 0.8",
    action="slack",
    webhook_url="https://hooks.slack.com/...",
    message="⚠️ Anomaly detected: {{anomaly_details}}"
)
```

**[Full Recipe + Code →]**

---

### Pattern 3: A/B Testing Models
"Deploy two models and gradually shift traffic to the better one."

**Solution:**
```python
# Set up canary deployment
model_v2.deploy(
    canary_percentage=10,  # 10% of traffic
    metric_to_compare="prediction_accuracy",
    auto_promote_if_better_by=5  # Promote if 5% better
)
```

**[Full Recipe + Code →]**

---

## Section 7: Troubleshooting

**Headline:** "Common Issues & Solutions"

### Q: My predictions seem off. Is the model wrong?
**A:** Check these first:
1. Data quality: Missing values? Outliers? Run our diagnostic tool: `model.diagnose()`
2. Feature scaling: Non-normalized features can throw off predictions. Solution: `model.auto_scale = True`
3. Train/test split: Is your test data truly held-out? Or are you over-fitting?

**[Deeper troubleshooting guide →]**

---

### Q: How do I know if my model is ready for production?
**A:** Use our readiness checklist:
- [ ] Accuracy metric meets threshold (you define)
- [ ] Backtest showed it would have worked historically
- [ ] Data quality score > 90%
- [ ] Explainability score > 85% (attention weights align with domain knowledge)
- [ ] Inference latency < 500ms
- [ ] You've reviewed the top 20 predictions manually

**[Full Readiness Checklist →]**

---

## Section 8: Pricing & Plans

**Headline:** "Simple, Transparent Pricing"

### Pricing Tiers

| Tier | Monthly Data | Inference Requests | Price | Best For |
|------|----------|--|-------|----------|
| **Starter** | 1TB | 1M | $2,400/mo | POC, evaluation |
| **Scale** | 10TB | 10M | $18,000/mo | Growing teams |
| **Enterprise** | 100TB+ | 100M+ | Custom | Mission-critical |

**Included in all plans:**
- Unlimited models and datasets
- API access
- Historical backtesting
- Standard support (email)
- 99.9% uptime SLA

**Add-ons:**
- Premium support (1h response): +$2,000/mo
- Private cloud deployment: Custom pricing
- Custom SLA: Negotiable

**[View Full Pricing →]**

---

## Section 9: Case Study: From Zero to Production

**Headline:** "See How [Company] Got to Predictions in 4 Weeks"

**Scenario:**
- Financial services company
- Goal: Predict portfolio risk
- Starting point: Spreadsheets + basic Excel models

**Week 1:**
- Day 1-2: Onboarding + setup
- Day 3-5: Data integration (3 data sources)
- **Outcome:** Data flowing in

**Week 2:**
- Day 8-10: Model configuration
- Day 11-12: First predictions generated
- Day 14: Internal review + adjustments
- **Outcome:** 85% accuracy on historical data

**Week 3:**
- Day 15-17: Backtest on 2 years of data
- Day 18-19: Deploy to staging
- Day 20-21: Prod deployment (10% traffic)
- **Outcome:** Live predictions in production

**Week 4:**
- Day 22-28: Monitoring + optimization
- **Outcome:** 100% confidence, full production scale

**Results:**
- Early risk detection: 72-hour lead time
- Cost savings: $2.1M in first 90 days
- Team effort: 120 hours (vs. 800 hours to build custom)

**[Read Full Case Study PDF →]** (gated)

---

## Section 10: Community & Support

**Headline:** "You're Not Alone"

### Support Channels

- **Email:** support@attentix.ai (all plans)
- **Slack:** Community Slack (join [link])
- **Forum:** community.attentix.ai
- **Docs:** https://docs.attentix.ai
- **GitHub:** github.com/attentixai/examples

### Premium Support

- **Priority response:** 1 hour (vs. 24 hours standard)
- **Technical architect:** Dedicated engineer for implementation
- **Custom consulting:** $250/hr

---

## Section 11: FAQ

**Headline:** "Questions?"

### Q: Is my data safe?
**A:** Yes. We encrypt data at rest (AES-256) and in transit (TLS 1.3). We're SOC2 compliant and HIPAA-eligible for healthcare. [Security page →]

### Q: What if I need to switch to another vendor?
**A:** Your data stays yours. Export anytime. We're cloud-agnostic—no lock-in. Data export is free; historical model performance data is included.

### Q: What's your SLA?
**A:** 99.9% uptime on Starter/Scale. 99.99% on Enterprise. [SLA details →]

---

## CTA Section

### Ready to Get Started?

**Start Your 14-Day Free Trial**
- No credit card required
- Full features included
- Sample datasets included

**[Start Free Trial →]**

---

### Need Custom Onboarding?

**Schedule a call with our solutions architect**
- 30-minute discovery
- No pressure—just exploration
- [calendly: embedded]

**[Schedule Call →]**

---

## Footer

- Documentation: https://docs.attentix.ai
- Community: community.attentix.ai
- Support: support@attentix.ai
- Status Page: status.attentix.ai
- Blog: blog.attentix.ai

---

## Design Notes

- **Color Scheme:** Precision Noir with code syntax highlighting (Monokai theme)
- **Typography:** Mono-font for code blocks, sans-serif for explanatory text
- **Code Examples:** Copyable, with language tabs (Python, Bash, JavaScript)
- **Interactive Elements:** Expandable FAQs, live API explorer (Swagger)
- **Accessibility:** All code blocks have text alternatives; no images required to understand
- **Responsiveness:** Mobile-friendly with collapsible navigation for deep content
