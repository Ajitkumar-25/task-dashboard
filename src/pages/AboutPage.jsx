const AboutPage = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center", color: "#333" }}>
        About Task Manager App
      </h1>
      <p style={{ fontSize: "1.1rem", lineHeight: "1.6", color: "#555" }}>
        Welcome to the Task Manager App! 
      </p>

      <h2 style={{ color: "#333" }}>Features:</h2>
      <ul style={{ fontSize: "1.1rem", color: "#444", lineHeight: "1.6" }}>
        <li>✔ Add, Edit, and Delete tasks</li>
        <li>✔ Mark tasks as completed or pending</li>
        <li>
          ✔ Filter tasks based on status (All, Completed, Pending, Overdue)
        </li>
        <li>✔ View detailed information of each task</li>
        <li>✔ Responsive layout for easy access on both desktop and mobile</li>
      </ul>

      <h2 style={{ color: "#333" }}>Technology Stack:</h2>
      <p style={{ fontSize: "1.1rem", color: "#555", lineHeight: "1.6" }}>
        This app is built using modern technologies to provide a fast and
        seamless experience:
      </p>
      <ul style={{ fontSize: "1.1rem", color: "#444", lineHeight: "1.6" }}>
        <li>✔ React (with React Router for routing)</li>
        <li>✔ Redux for state management</li>
        <li>✔ Material-UI for modern UI components</li>
      </ul>

    </div>
  );
};

export default AboutPage;
