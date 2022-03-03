import Image from "next/image";
import classes from "./Hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src={"/images/max.png"}
          alt={"an image alt"}
          width={300}
          height={300}
        />
      </div>
      <h1 className={" "}>Hi, I am Max</h1>
      <p className={""}>
        I blog about web development - especially frontend frameworks like
        Angular or React.
      </p>
    </section>
  );
}

export default Hero;
