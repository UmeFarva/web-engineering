function generateInvitations(guests, ...additionalDetails) {
    return guests.map((guest) => {
      const { name, age, rsvp } = guest;
      let invitationMessage = `Dear ${name},<br>`;
      invitationMessage += `We cordially invite you to our party!<br>`;
      invitationMessage += `Please join us for a night of fun and celebration.<br>`;
  
      if (additionalDetails.length > 0) {
        invitationMessage += `${additionalDetails.join('<br>')}<br>`;
      }
  
      invitationMessage += `RSVP: ${rsvp ? 'Yes' : 'No'}<br>`;
      invitationMessage += `Looking forward to seeing you!<br><br>`;
      return invitationMessage;
    });
  }
  
  const guests = [
    { name: "Muhammad", age: 32, rsvp: true },
    { name: "Jazib", age: 33, rsvp: false },
    { name: "Ahmed", age: 28, rsvp: true }
  ];
  
  const additionalDetails = [
    "Date: March 23, 2024",
    "Time: 2:00 PM",
    "Location: Sukkur IBA"
  ];
  
  const invitations = generateInvitations(guests, ...additionalDetails);
  
  const invitationsContainer = document.getElementById("invitations");
  invitations.forEach((invitation, index) => {
    const invitationElement = document.createElement("div");
    invitationElement.classList.add("invitation");
    invitationElement.innerHTML = `<h2>Invitation ${index + 1}</h2>
      <p>${invitation}</p>`;
    invitationsContainer.appendChild(invitationElement);
  });