const http = require("http");
const url = require("url");

// Import the API modules
const { getAllEvents, getEventById, createEvent } = require("./api/events");
const { getAllUsers, getUserById } = require("./api/users");
const {
    getAllNotifications,
    getNotificationById,
    createNotification,
    deleteNotification,
} = require("./api/notifications");
const {
    getAllNotifications,
    getNotificationById,
    createNotification,
    deleteNotification,
} = require("./api/notifications");
const {
    getAllAttendees,
    getAttendeeById,
    createAttendees,
    deleteAttendee,
} = require("./api/attendees");
const {
    getAllTickets,
    getTicketById,
    createTicket,
    deleteTicket,
} = require("./api/tickets");
const {
    getAllSponsors,
    getSponsorById,
    createSponsor,
    deleteSponsor,
} = require("./api/sponsors");

const server = http.createServer((req, res) => {
    const parsedURL = url.parse(req.url, true);
    const method = req.method;

    // Route for events
    if (parsedURL.pathname === "/api/events" && method === "GET") {
        getAllEvents(req, res);
    } else if (
        parsedURL.pathname.startsWith("/api/events/") &&
        method === "GET"
    ) {
        const id = parsedURL.pathname.split("/")[3];
        getEventById(req, res, id);
    } else if (parsedURL.pathname === "/api/events" && method === "POST") {
        createEvent(req, res);
    }

    // Route for users
    else if (parsedURL.pathname === "/api/users" && method === "GET") {
        getAllUsers(req, res);
    } else if (
        parsedURL.pathname.startsWith("/api/users/") &&
        method === "GET"
    ) {
        const id = parsedURL.pathname.split("/")[3];
        getUserById(req, res, id);
    }

    // Route for notifications
    else if (parsedURL.pathname === "/api/notifications" && method === "GET") {
        getAllNotifications(req, res);
    } else if (
        parsedURL.pathname.startsWith("/api/notifications/") &&
        method === "GET"
    ) {
        const id = parsedURL.pathname.split("/")[3];
        getNotificationById(req, res, id);
    } else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Route not found" }));
    }
});

const PORT = 5050;
server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
