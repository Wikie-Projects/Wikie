const { users } = require('../data/database');

// Get all attendees
function getAllUsers(req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(users));
}

function getUserById(req, res, id) {
    const users = users.find(a => a.id === parseInt(id));
    
}

function createUser(req, res) {
    let body = '';
    req.on('data', chunk => { body += chunk.toString(); });
    req.on('end', () => {
        const { id, name, email, event_id } = JSON.parse(body);
        const newUser = { id, name, email, event_id };
        users.push(newUser);
        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(newUser));
    });
}

function updateUser(req, res, id) {
    let body = '';
    req.on('data', chunk => { body += chunk.toString(); });
    req.on('end', () => {
        const userIndex = users.findIndex(a => a.id === parseInt(id));
        if (userIndex !== -1) {
            const { name, email, event_id } = JSON.parse(body);
            user[userIndex] = { id: parseInt(id), name, email, event_id };
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(user[userIndex]));
        } else {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: "Attendee not found" }));
        }
    });
}



function deleteUser(req, res, id) {
    const attendeeIndex = attendees.findIndex(a => a.id === parseInt(id));
  
    if (attendeeIndex === -1) {
      // Attendee not found
      res.status(404).send({ message: 'User not found' });
    } else {
      // Remove attendee from array
      attendees.splice(UserIndex, 1);
      res.status(200).send({ message: 'User deleted successfully' });
    }
  }

  
module.exports = { getAllUsers, getUserById, createUser, updateUser, deleteUser};
  