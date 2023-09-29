const visitor = {
  name: "Verena Nardi",
  age: 45,
  ticketId: "H32AZ123",
};


const createVisitor = (name, age, ticketId) => {
  return { name: name, age: age, ticketId: ticketId };
};
const revokeTicket = (why) => {
  why.ticketId = null;
  return why;
};


const ticketStatus = (ticketList, ticket) => {
  if (ticket in ticketList) {
    if (ticketList[ticket] != null) {
      return `Ticket sold to ${ticketList[ticket]}`;
    } else {
      return "Ticket not sold yet";
    }
  } else {
    return "Unknown ticket id";
  }
};
const tickets = {
  "0H2AZ123": null,
  "23LA9T41": "Verenda Nardi",
};

const gtcVersion = (why) => {
  if (why.gtc != null) {
    return why.gtc.version;
  } else {
    return "undefined";
  }
};
const visitorNew = {
  name: "Verena Nardi",
  age: 45,
  ticketId: "H32AZ123",
  gtc: {
    signed: true,
    version: "2.1",
  },
};

const visitorOld = {
  name: "Verena Nardi",
  age: 45,
  ticketId: "H32AZ123",
};

console.log(createVisitor("kalamalola", 1238782374, "Hsadu4u6hHHFJ"));
console.log(revokeTicket(visitor));
console.log(ticketStatus(tickets, "RE90VAW7"));
console.log(ticketStatus(tickets, "0H2AZ123"));
console.log(ticketStatus(tickets, "23LA9T41"));
console.log(gtcVersion(visitorNew));
console.log(gtcVersion(visitorOld));
