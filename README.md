EdgeAccess – Cloudflare Edge Access Control
 Overview

EdgeAccess is a security-focused Cloudflare Worker built using the Cloudflare for Students platform. It performs IP- and geo-based request filtering at the edge before traffic reaches origin servers.

 Features

Detects client IP using CF-Connecting-IP

Applies country-based access control rules

Returns structured JSON security responses

Executes globally on Cloudflare's edge network

 Why This Project

Cloudflare operates one of the world’s largest edge networks. This project explores how edge-level decision logic can enforce lightweight security controls with minimal latency.

Tech Stack

Cloudflare Workers (browser-based editor)

JavaScript

Edge runtime

 Future Improvements

KV-based rate limiting

ASN-based traffic rules

Metrics & observability integration
