# G-Suit Web Application
## Purpose
The G-Suit application is developed to monitor and visualize core muscle activation in the human body by collecting data through G-Suit gear integrated with sensors. The data collected from these sensors is stored and processed, allowing both physiotherapists and users to monitor muscle activation through the application.

### Contribution
## Fork Repository
Create a new branch: `git checkout -b branch_name`.<br>
Make changes and commit: `git commit - 'changes detail'`.<br>
Push the branch: `git push origin branch_name`.<br>
Submit a pull request

## Project Structure
gsuit-web-app/<br>
├─ backend/     # Node.js + Express + MongoDB (API server)<br>
└─ frontend/    # React (client UI)

## Technologies Used
### Frontend: React
### Backend: Node.js, Express.js, MongoDB Atlas (cloud)
### Database: MongoDB (free-tier via MongoDB Atlas)
### Other Tools: Git, GitHub, Webstorm

## Getting stated
### 1. Clone the Repository
<pre>git@github.com:lyn-jin/gsuit-web-app.git<br>
cd gsuit-web-app</pre>


### 2. Setup Backend
<pre>cd backend<br>
npm install
</pre>
#### MongoDB Setup
<pre>const uri = "mongodb+srv://rinzee404:5LMfe5aP9yQFgGgq@gsuit-cluster.eoi88rf.mongodb.net/?retryWrites=true&w=majority&appName=gsuit-cluster";
</pre>
#### Start the Backend Server
<pre>npm start</pre>
The backend will run on http://localhost:8000 (or any other port you set).

### 3. Setup Frontend
<pre>
cd frontend<br>
npm install<br>
npm start
</pre>
The frontend will run on http://localhost:3000

## Team
| Name         | Role              | Responsibility                  |
|--------------|-------------------|---------------------------------|
| Rinzin       | Backend Developer | API setup, MongoDB integration  |
| Rinzin & Vincent      | Frontend Dev      | React UI, Axios integration     |
| Ksenia & Praj         | Data Analyst      | EMG data processing & analysis  |
| Dawa         | BA                | Client communication, planning  |

