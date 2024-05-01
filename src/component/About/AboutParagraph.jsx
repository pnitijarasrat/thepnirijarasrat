import React from "react";
import { FaHeart } from "react-icons/fa";

export default function AboutParagraph() {
  return (
    <div className="about-paragraph">
      <h2>Who am I ?</h2>
      <br />
      <p>
        I'm just an ordinary guy who found myself enjoy coding stuff when I was
        a 3rd year industrial engineering student at Chulalongkorn University.
        Life was miserable back then but I still managed to get through that
        rough year. And I'm about to graduate soon !!
      </p>
      <br />
      <h2>How do I get into this field ?</h2>
      <br />
      <p>
        IE has to learn almost every aspect of engineering, yes, including
        software development. It didn't attract me at first, it had never been
        since my first year learning <i>python</i>. The field that actually
        attracts me is web development, especially{" "}
        <b style={{ color: "#d3869b" }}>Frontend Development</b>. So I spent 3-4
        hours every night learning web development essentials from Udemy, Colt
        Steele's courses, he is a wonderful instructor. It has already been
        almost 2 years of constantly self learning ( at the time I was building
        this website )
      </p>
      <br />
      <h2>My perspective of Coding ?</h2>
      <br />
      <p>
        Code is just a <i>tool</i> which can be learned, including me even I
        always hate it. This is what I trust when I decided to dedicate my
        social life ( at the time ) and started learning from zero.
      </p>
      <br />
      <h2>My future plan ?</h2>
      <br />
      <p>
        Nothing much more than developing myself in every aspect, health, skills
        ( both soft and hard ), relationship with every people in my life. I
        hope that you ( reader ) would become another important person in my
        journey <FaHeart />
      </p>
    </div>
  );
}
