const events = [
    {
        id: 1,
        name: "event-1",
        date: "2024-11-20",
        time: "11:00",
        status: "pending",
        category: "entertainment",
    },
    {
        id: 2,
        name: "event-2",
        date: "2024-11-20",
        time: "11:00",
        status: "pending",
        category: "entertainment",
    },
];

const users = [
    {
        id: 1,
        name: "Kofi Abotsi",
        age: 5,
        phone_number: "0541559369",
        password: "kirkkatamanso",
    },
];

const notifications = [
    {
        id: 1,
        title: "Event about to begin",
        status: "delivered",
        time: "11:00",
        event: "event-1",
    },
];

const attendees = [
    { id: 1, name: "John Doe", email: "john@example.com", event_id: 1 },
    { id: 2, name: "Jane Smith", email: "jane@example.com", event_id: 2 },
];

const tickets = [
    { id: 1, event_id: 1, attendee_id: 1, price: 100, status: "booked" },
    { id: 2, event_id: 2, attendee_id: 2, price: 50, status: "checked-in" },
];

const sponsors = [
    {
        id: 1,
        name: "Company A",
        event_id: 1,
        sponsor_type: "Gold",
        contribution: 5000,
    },
    {
        id: 2,
        name: "Company B",
        event_id: 2,
        sponsor_type: "Silver",
        contribution: 3000,
    },
];

module.exports = { events, users, notifications, attendees, tickets, sponsors };
