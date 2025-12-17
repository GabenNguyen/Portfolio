interface Props {
  name: string;
  email: string;
  message: string;
}

const ContactNotiEmail = ({ name, email, message }: Props) => {
  return (
    <html lang="en">
      <body style={{ backgroundColor: "#f3f4f6", padding: "16px" }}>
        <div
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            backgroundColor: "#ffffff",
            borderRadius: "12px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            padding: "24px",
            fontFamily: "sans-serif",
            color: "#111827",
          }}
        >
          <h1
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              marginBottom: "16px",
            }}
          >
            New Contact Form Submission
          </h1>

          <p style={{ marginBottom: "8px" }}>
            <strong>Name:</strong> {name}
          </p>

          <p style={{ marginBottom: "8px" }}>
            <strong>Email:</strong>{" "}
            <a
              href={`mailto:${email}`}
              style={{ color: "#3b82f6", textDecoration: "underline" }}
            >
              {email}
            </a>
          </p>

          <p style={{ marginBottom: "8px" }}>
            <strong>Message:</strong> {message}
          </p>

          <div
            style={{
              color: "#6b7280",
              fontSize: "12px",
              textAlign: "center",
              marginTop: "24px",
            }}
          >
            This email was sent from your Portfolio contact form.
          </div>
        </div>
      </body>
    </html>
  );
};

export default ContactNotiEmail;
