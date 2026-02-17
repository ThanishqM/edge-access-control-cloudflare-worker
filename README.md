# EdgeAccess – Cloudflare Edge Access Control Service

## Overview

EdgeAccess is a security-focused edge service built using Cloudflare Workers (Cloudflare for Students).  
It performs IP- and geo-based request filtering directly at the Cloudflare edge before traffic reaches origin servers.

This project simulates how modern edge networks enforce lightweight security and access policies at Internet scale with minimal latency.

---

## Live Deployment

Live URL: https://your-worker-name.your-subdomain.workers.dev  

(Replace with your actual deployed Worker URL.)

---

## Features

- Detects client IP using `CF-Connecting-IP`
- Reads geographic metadata via `request.cf.country`
- Enforces country-based access control policies
- Returns structured JSON security decisions
- Executes globally on Cloudflare’s edge network

---

## Architecture

```
Client Request
      ↓
Cloudflare Edge Network
      ↓
Cloudflare Worker (EdgeAccess)
      ↓
Access Decision Logic
      ↓
JSON Response (Allowed / Blocked)
```

The Worker executes at the edge, ensuring low-latency security enforcement close to the user.

---

## Tech Stack

- Cloudflare Workers
- JavaScript (Edge Runtime)
- Cloudflare Request Metadata (`CF-Connecting-IP`, `request.cf`)
- Cloudflare for Students Platform

---

## How It Works

1. A request reaches Cloudflare’s global edge network.
2. The Worker extracts:
   - Client IP
   - Country metadata
3. Access rules are evaluated (e.g., blocked countries).
4. The Worker returns a structured JSON response:
   - `200 OK` for allowed requests
   - `403 Forbidden` for blocked requests

Example blocked response:

```json
{
  "status": "blocked",
  "reason": "country_restriction",
  "ip": "xxx.xxx.xxx.xxx",
  "country": "XX"
}
```

---

## Why This Project

Cloudflare operates one of the world’s largest global edge networks.  
This project explores how edge-executed logic can:

- Reduce load on origin servers
- Enforce security policies early
- Improve response times
- Protect applications from unwanted traffic

It demonstrates understanding of:

- Edge computing
- Distributed traffic control
- Lightweight security enforcement
- Internet-scale design thinking

---

## Future Improvements

- KV-backed rate limiting
- ASN-based filtering
- Adaptive traffic heuristics
- Observability and metrics export
- Integration with Cloudflare Rules Engine

---

## Author

Thanishq Maddela  
Computer Science Student | Networking and Security Enthusiast  


This project is for educational and demonstration purposes.
