Dynamic CTA Landing Page
This project is a simple, modern, and fully responsive single-page application (SPA) designed to demonstrate dynamic content manipulation using vanilla JavaScript and the Document Object Model (DOM) API. Its primary function is to provide a marketing team with an instantaneous tool for updating the main Call-to-Action (CTA) headline on the fly, without requiring a page reload.

Structure and Styling
The project is built using semantic HTML5 and styled with a combination of Tailwind CSS utility classes and custom CSS for advanced effects. This approach ensures the page is clean, responsive, and adheres to modern web standards.

The page includes the following key sections:

Header and Navigation: A persistent header with site branding and smooth navigation links.

Main Hero Area (<main>): Contains the primary, dynamic Call-to-Action headline (#main-cta-headline) and a supporting description.

Live CTA Editor (#update-cta): A dedicated section housing the simple form used to update the headline interactively.

Service Blocks (#services): A responsive three-column grid showcasing the startup's key offerings.

Footer: Contains basic contact information and copyright details.

Styling utilizes the Inter font family and a clean, modern color palette focused on Indigo tones, with subtle hover effects applied to navigation links and service blocks for enhanced user feedback.

How Interactivity Works
Interactivity is managed entirely within the activity_7.js file using the native JavaScript DOM API.

Key Mechanism: Instant Headline Update
Element Selection: The script first selects the three crucial elements from the DOM:

The update button (#update-cta-button).

The text input field (#new-cta-input).

The main headline element (#main-cta-headline).

Event Listener: An event listener is attached to the update button, triggering the handleCtaUpdate function upon a click event. The script also listens for the Enter keypress within the input field for improved usability.

DOM Manipulation: Inside the function, the script reads the text from the input field. If the input is not empty, it uses the .textContent property on the headline element to instantly replace the existing text with the user's new message.

This setup allows marketing staff to preview their new headline in a live environment before potentially rolling it out to a production setting, demonstrating the power of client-side DOM manipulation for dynamic user experiences.