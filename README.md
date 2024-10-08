### **Event Management API Project Guide for Interns**

---

Welcome to the **Event Management API Project**! This document will guide you through the project, including how to collaborate using Git, writing your entity’s API code, and the essential knowledge you need to complete your tasks.

---

## **1. Git Workflow**

### **Git Operations to Follow:**

1. **Fork the Repository**:
   - Go to the GitHub repository for the project.
   - Click the **Fork** button to create a copy of the repo under your account.

2. **Clone Your Forked Repo**:
   - Copy the link from your forked repository and run the following command in your terminal:
   ```bash
   git clone https://github.com/YOUR_USERNAME/event-management-api.git
   ```

3. **Create a Branch**:
   - Always create a branch for your work. This avoids working directly on the main branch.
   - Name the branch based on the feature you’re working on (e.g., `feature/attendees`):
   ```bash
   git checkout -b feature/attendees
   ```

4. **Make Your Changes**:
   - Write your code for the assigned entity in your branch.

5. **Commit Your Changes**:
   - After making changes, **stage** the files and commit them:
   ```bash
   git add .
   git commit -m "Add CRUD operations for attendees"
   ```

6. **Push the Branch to GitHub**:
   - Push your branch to your GitHub repository:
   ```bash
   git push origin feature/attendees
   ```

7. **Create a Pull Request**:
   - Go to the GitHub repo in your browser, and click the **Compare & Pull Request** button to submit your code for review.

8. **Review & Merge**:
   - After your code is reviewed, the pull request will be merged into the main branch.

---

## **2. Coding Guidelines**

Each intern is responsible for writing CRUD (Create, Read, Update, Delete) operations for their assigned **entity**. Here’s a step-by-step process to write the API logic:

### **Step 1: File Structure**
- All your code will go into the `/api` directory.
- Create a new file for your assigned entity, for example, `attendees.js`.

### **Step 2: CRUD Operations Example**
This example assumes you are writing for the **Attendees** entity. Adapt it to your assigned entity.

#### **Get All Attendees**:
```javascript
const { attendees } = require('../data/database');

// Get all attendees
function getAllAttendees(req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(attendees));
}

module.exports = { getAllAttendees };
```

#### **Get Attendee by ID**:
```javascript
function getAttendeeById(req, res, id) {
    const attendee = attendees.find(a => a.id === parseInt(id));
    
}

module.exports = { getAllAttendees, getAttendeeById };
```

#### **Create a New Attendee**:
```javascript
function createAttendee(req, res) {
    let body = '';
    req.on('data', chunk => { body += chunk.toString(); });
    req.on('end', () => {
        const { id, name, email, event_id } = JSON.parse(body);
        const newAttendee = { id, name, email, event_id };
        attendees.push(newAttendee);
        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(newAttendee));
    });
}

module.exports = { getAllAttendees, getAttendeeById, createAttendee };
```

#### **Update Attendee**:
```javascript
function updateAttendee(req, res, id) {
    let body = '';
    req.on('data', chunk => { body += chunk.toString(); });
    req.on('end', () => {
        const attendeeIndex = attendees.findIndex(a => a.id === parseInt(id));
        if (attendeeIndex !== -1) {
            const { name, email, event_id } = JSON.parse(body);
            attendees[attendeeIndex] = { id: parseInt(id), name, email, event_id };
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(attendees[attendeeIndex]));
        } else {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: "Attendee not found" }));
        }
    });
}

module.exports = { getAllAttendees, getAttendeeById, createAttendee, updateAttendee };
```

#### **Delete Attendee**:
```javascript
function deleteAttendee(req, res, id) {
    const attendeeIndex = attendees.findIndex(a => a.id === parseInt(id));
    
}

module.exports = { getAllAttendees, getAttendeeById, createAttendee, updateAttendee, deleteAttendee };
```

---

### **Step 3: Routing in `server.js`**

1. **Import Your API Logic** in `server.js`:
   ```javascript
   const { getAllAttendees, getAttendeeById, createAttendee, updateAttendee, deleteAttendee } = require('./api/attendees');
   ```

2. **Handle Requests for Attendees**:
   ```javascript
   const parsedURL = url.parse(req.url, true);
   const method = req.method;

   if (parsedURL.pathname === '/api/attendees' && method === 'GET') {
       getAllAttendees(req, res);
   } else if (parsedURL.pathname.startsWith('/api/attendees/') && method === 'GET') {
       const id = parsedURL.pathname.split('/')[3];
       getAttendeeById(req, res, id);
   } else if (parsedURL.pathname === '/api/attendees' && method === 'POST') {
       createAttendee(req, res);
   } else if (parsedURL.pathname.startsWith('/api/attendees/') && method === 'PUT') {
       const id = parsedURL.pathname.split('/')[3];
       updateAttendee(req, res, id);
   } else if (parsedURL.pathname.startsWith('/api/attendees/') && method === 'DELETE') {
       const id = parsedURL.pathname.split('/')[3];
       deleteAttendee(req, res, id);
   }
   ```

---

## **3. Knowledge You Need**

### **Key Concepts**:
- **Node.js**: Understanding how to create servers and handle HTTP requests.
- **CRUD Operations**: You’ll be writing functions that **Create**, **Read**, **Update**, and **Delete** records.
- **Modularity**: Keep code organized by splitting logic into different files (one file per entity).
- **HTTP Methods**: You will primarily work with `GET`, `POST`, `PUT`, and `DELETE` to manipulate your entity data.

### **JSON Format**:
- All data exchange in the API will be in **JSON format**. Make sure you understand how to handle JSON data in Node.js.

### **Basic Git Operations**:
- Fork, clone, create branches, commit changes, and create pull requests.
- Make sure to **never push directly to the main branch**.

---

## **4. Project Milestones**

1. **Fork and Clone the Repo**: Complete this step first.
2. **Create Your Entity’s API Logic**: Implement the necessary CRUD operations for your assigned entity.
3. **Test Your API Locally**: Use **Postman** or **curl** to test the API endpoints before creating a pull request.
To test your endpoint please comment out the other endpoints and their implementation
After testing succesfully, uncomment them
4. **Push Changes and Create Pull Requests**: Once tested, push your branch and submit a pull request for review