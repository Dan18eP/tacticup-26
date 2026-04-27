# TactiCup 26

Where strategy defines the game.

## Academic subtitle
Interactive World Cup Simulator 2026

## Overview
TactiCup 26 is a web-based football simulation project focused on tactical decision-making, visual match representation, and real-time event simulation.

The platform allows users to explore the project through an informational homepage and access an initial simulator interface where teams, scoreboard, field view, and player distribution are visually represented.

## Current features
- Informational homepage with project presentation
- Navigation between homepage and simulator using React Router
- Initial simulator layout with scoreboard, controls, events panel, and match field
- Static player distribution over a football field
- Prototype structure ready for tactical controls and live simulation logic

## Planned features
- Team selection before the first match (Only one team per Campaign/Simulation)
- Tactical configuration by the user
- Real-time event engine using Server-Sent Events (SSE)
- Player statistics and team strength evaluation
- Dynamic movement and live match events
- Authentication and user session management
- Match history and saved simulations

## Tech stack
- React + Vite
- Node.js + Express
- Server-Sent Events (SSE)
- JavaScript
- CSS

## Repository structure
- `frontend/`: user interface
- `backend/`: API and simulation engine
- `docs/`: project documentation

## Status
Active development.

Current prototype includes:
- functional homepage,
- navigation to simulator page,
- initial visual simulator interface.

Backend simulation logic, authentication, and persistent data are still under development.

## Notes
This project is currently being developed as an academic prototype.  
The current version focuses on interface structure, navigation flow, and simulator visualization before integrating the full simulation engine and database support.