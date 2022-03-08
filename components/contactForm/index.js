import styles from "../../styles/contact-form.module.css";

const ContactForm = () => {
  return (
    <section className={styles.contact}>
      <h1>How can i help u</h1>
      <form className={styles.form}>
        <div className={styles.controls}>
          <div className={styles.control}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" required />
          </div>
          <div className={styles.control}>
            <label htmlFor="Name">Your Name</label>
            <input type="text" id="name" required />
          </div>
          <div className={styles.control}>
            <label htmlFor="mesage">Your mesage</label>
            <textarea id="mesage" rows={5} />
          </div>
          <div className={styles.actions}>
            <button>send mesage</button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
