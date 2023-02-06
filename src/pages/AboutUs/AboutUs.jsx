import s from "./../AboutUs/AboutUs.module.css";
import { resources } from "../../resources/resources";

function AboutUs() {
  const { Greeting } = resources.AboutUs;
  return (
    <div>
      <div className={s.greeting} style={{backgroundImage: `url(${Greeting})`}}>
        <div className={s.greeting_text} >
          <h1>Блог о кофе</h1>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
            saepe eum impedit doloribus obcaecati rem vel, voluptate adipisci
            nam, nesciunt architecto quos animi reprehenderit quas, dolorem est
            eos consequuntur deserunt!
          </span>
        </div>
      </div>
    </div>
  );
}
export default AboutUs;
