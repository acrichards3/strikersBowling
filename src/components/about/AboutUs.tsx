import React from 'react';
import { Image } from 'react-bootstrap';

export default function AboutUs() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="title">The History of Strikers</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8">
          <p className="text">
            Strikers Entertainment Center was established in 1968 as a 10 lane
            bowling alley, it was originally known as Pine Ridge Lanes. In 1987,
            Pine Ridge Lanes was purchased by James Sager. James made major
            changes, including: a 16 lane increase, automatic scoring and a name
            change from Pine Ridge to Strikers Entertainment Center, as we know
            it today. In 2016, Strikers underwent new ownership by 3 brothers:
            Doug Carl, James Carl, and Brother in Law, Rob Sheets. Since the
            transition to the new ownership, they’ve made major changes. One of
            the key changes is the addition of Ridge Runners Sports Bar and
            Grill. The brothers felt that the community needed an atmosphere for
            those looking to have a leisurely hangout with some great friends
            over a cold drink. They have also introduced two pool tables, two
            volley ball courts, and five sets of horseshoes pits. The changes
            mentioned here are just the tip of the ice berg under the long-term
            plan for Strikers in serving the local community and creating an
            all-in-one center for fun and entertainment.
          </p>
        </div>
        <div className="col-lg-4">
          <Image
            src="https://scontent-ort2-1.xx.fbcdn.net/v/t39.30808-6/226035562_1621158218078086_5946673583817204801_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=TYbcgWNHQwcAX_ICwn9&_nc_ht=scontent-ort2-1.xx&oh=00_AT8fcx1EWBr4kmKjzCYN5YCQUbzL0eTTbs4UvvEQ2NnE-w&oe=62495032"
            alt="front-of-building"
            fluid
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h1 className="title">Our Mission</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p className="text">
            Strikers Entertainment Center is committed to providing a fun,
            wholesome and affordable entertainment experience for all
            generations. We desire to become the entertainment option of choice
            for the Northern Macomb County community though superior customer
            service and quality offerings. The attractions that we offer are:
          </p>
          <ul>
            <li>26 Brunswick bowling lanes</li>
            <li>Automatic scoring</li>
            <li>Live entertainment</li>
            <li>Arcade area</li>
            <li>2000 square foot, Ridge Runners Sports Bar</li>
            <li>2 Pool tables</li>
            <li>Outdoors patio with Tiki Bar</li>
            <li>2 beach volleyball courts</li>
            <li>5 sets of horseshoe pits</li>
          </ul>
          <p className="text">
            We also offer Party packages to cover all event needs, youth & adult
            bowling birthday packages. As you can see, we cover several
            categories of entertainment options. Where there is a need for fun,
            we're here to provide for our customers.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h1 className="title">Our Vision</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p className="text">
            We have big plans for Strikers Entertainment Center. Through
            understanding our customers, we will become the premiere Macomb
            County family entertainment destination. We may be picky about our
            quality but not our customers, we desire to instill a culture which
            attracts all family members, from Baby Boomers to Centennials. We
            strive to deliver the best guest relations, a clean atmosphere, fun
            times, and high quality food & beverage.
          </p>
        </div>
      </div>
    </div>
  );
}
