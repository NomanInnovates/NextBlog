import Image from "next/image";
import classes from "../../styles/Hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}><Image src={} alt={"an image alt"} width={} /></div>
      <h1 className={classes.image}>Hi, I am Max</h1>
      <p className={classes.image}>
          I blog about web development - especially frontend frameworks like Angular or React. 
      </p>
    </section>
  );
}

export default Hero;
