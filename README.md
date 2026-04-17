# Setup Instructions

## Installation

```bash
npm i
```

## Running the Development Server

```bash
npm run dev
```

> **Note:** Make sure you are in the project folder before running these commands.

## Romes Notes:

### ISSUES:
- the stories in the stories page are fake placeholders AHHHHHH
- need a picture for the second guy we quoted on the homepage
- the contact page does not work
- the donation defaults are too high and they do not work
- a lot of the state content is missing

### IDEAS:
- We could add the career pages to the navbar somehow
- I have been looking at ESlint, it could help keep the code clean and bug free without much added in the way of packages
- We could add dark mode, but its not at all necessary.
- We could put similar pages into components to reduce file size
- mobile optimizations
- have the odd footer links play an animation on the nav items they relate to
- the css no longer uses vars for colors so I should add that back
- soon I should do backend stuff (make the contact page actually email people, make the donation section work)
- make the pages with the gradeint stay at the point of the gradient they were at before when switching between pages that both have it


### DOING (first priority anyway) 
- messing with prettier and eslint
- making contact page work

## Contact form: EmailJS setup

This project uses EmailJS to send contact form messages from the client. To enable sending:

1. Create an account at https://www.emailjs.com and add an email service (e.g., SMTP or Gmail).
2. Create an email template that accepts `from_name`, `from_email`, `message`, and `to_email` (the code sets `to_email` to `christopher@noahcareercoachingapp.com`).
3. In the project root create a `.env` file and add the following Vite env vars (replace placeholders):

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_USER_ID=your_user_id
```

4. Restart the dev server: `npm run dev`.

Notes: if you prefer a different provider (Formspree, Netlify Forms, a server endpoint), I can adapt the code accordingly.
