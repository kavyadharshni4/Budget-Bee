# Budget Bee - Expense Tracker

Budget Bee is a full-stack web application designed to help users track their expenses, visualize their spending habits, and manage their monthly budgets effectively.

## 🚀 Features

- **User Authentication**: Secure signup and login functionality using JWT and bcrypt.
- **Dashboard**: A comprehensive overview of your financial status, including total balance, income, and expenses.
- **Expense Management**: Easily add, edit, and delete expense entries.
- **Visual Analytics**: Interactive charts (Doughnut charts) to visualize spending by category.
- **Transaction History**: A detailed list of all past transactions.
- **Profile Management**: Manage user account details.

## 🛠️ Tech Stack

**Frontend:**
- React.js
- React Router DOM
- Chart.js
- CSS3 (Vanilla)

**Backend:**
- Node.js
- Express.js
- MongoDB (Mongoose)
- JSON Web Tokens (JWT)
- Bcrypt.js

## ⚙️ Installation and Setup

### Prerequisites
- Node.js installed
- MongoDB account/instance

### 1. Clone the repository
```bash
git clone https://github.com/kavyadharshni4/Budget-Bee.git
cd Budget-Bee
```

### 2. Backend Setup
```bash
cd server
npm install
```
Create a `.env` file in the `server` directory and add your configurations:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```
Start the server:
```bash
npm start
```

### 3. Frontend Setup
```bash
cd ../client
npm install
npm start
```
The application will be available at `http://localhost:3000`.

## 📂 Project Structure

```text
Budget-Bee/
├── client/           # React frontend
│   ├── src/
│   │   ├── Components/
│   │   ├── Pages/
│   │   └── assets/
├── server/           # Node.js/Express backend
│   ├── Controller/
│   ├── Model/
│   ├── Router/
│   └── config/
└── README.md
```

## 📄 License
This project is licensed under the ISC License.
