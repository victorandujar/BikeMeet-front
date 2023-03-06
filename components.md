## DATA

# Data layer

- User:

- Name
- Email
- Password

- Events:

- Name
- Distance
- Type of surface
- Date of event
- Description

- Ui:

  - isLoading (boolean)

# Data modifications

- User:

  - login
  - logout

- Ui:

- set isLoading
- unset isLoading

- Events:

- Load events
- Like event (toggle)
- Create event
- Delete event
- Modify event

## COMPONENTS

# App

- Shows layout component

# Layout

- Shows app logo
- Shows navigation bar.

# Loader

- Shows the loader when isLoading is set to true

# Register Form

- Shows an input for the "name"
- Shows an input for the "password"
- Shows an input for the "confirm password"
- Shows an input for the "email"
- Shows a button to sign up
- On submit calls the action to register user.

# Login Form

- Shows an input for the "email"
- Shows an input for the "password"
- Shows a button to log in
- On submit calls the action to log in.

# Form

- Receives the create event action.
- Shows inputs to receive data to create/modify an event.
- Shows a button to submit data.
- On submit, executes the recived create event action.
- On submit, executes the recived modify event action.

# List of events

- Receives a list of events
- Shows a list of events.
- Shows an event card.
- Sends an event card component for every event in the list of events.

# Event card

- Receives an event.
- Receives delete event action.
- Receives modify event action.
- Shows an event name in a heading.
- Shows the image of an event.
- Shows the type of surface.
- Shows the distance of the route.
- Shows the date of the event.
- Shows an event card.
- Shows button to delete event
- Shows button to modify event
- Sends button icon to delete to button component
- Sends button icon to modify to button component
- Sends delete action to button component
- Sends modify actionn to button component
- Onclick executes the action to open detail page.

# Button

- Receives an icon
- Receives an action.
- Shows the icon insdie the button.
- On click submits the received action.
