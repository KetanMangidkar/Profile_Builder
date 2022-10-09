import React, { useState } from "react";

const Options = () => {
  // _________________________________________
  const [name, setName] = useState("ketan");
  const [gender, setGender] = useState("male");
  const [location, setLocation] = useState("pune, India");
  const [school, setSchoool] = useState("SCOE");
  const [degree, setDegree] = useState("Electronics");
  const [occupation, setOccupation] = useState("Frontend developer");
  const [religion, setReligionn] = useState("Hindu");
  const [desire, setDesire] = useState(
    `believes that meeting with the missionaries will help ${
      gender === "male" ? "he" : "she"
    } to be a more spiritual and righteous person`
  );

  // _________________________________________
  const [checkLocation, setCheckLocation] = useState(true);
  const [checkSchool, setCheckSchool] = useState(true);
  const [checkOccupation, setCheckOccupation] = useState(true);
  const [checkReligion, setCheckReligion] = useState(true);
  const [ckeckDesire, setCheckDesire] = useState(true);

  // _________________________________________
  const handleChangedName = (e) => {
    setName(e.target.value);
  };
  const handleChangeGender = (e) => {
    setGender(e.target.value);
  };
  const handleChangeLocation = (e) => {
    setLocation(e.target.value);
  };
  const handleChangeSchool = (e) => {
    setSchoool(e.target.value);
  };
  const handleChangeMajor = (e) => {
    setDegree(e.target.value);
  };
  const handleChangeOccupation = (e) => {
    setOccupation(e.target.value);
  };
  const handleChangeReligion = (e) => {
    setReligionn(e.target.value);
  };
  const handleChangedDesire = (e) => {
    setDesire(e.target.value);
  };

  // _________________________________________
  const handleCheckboxLocation = () => {
    setCheckLocation(!checkLocation);
  };
  const handleCheckboxSchool = () => {
    setCheckSchool(!checkSchool);
  };
  const handleCheckboxOccupation = () => {
    setCheckOccupation(!checkOccupation);
  };
  const handleCheckboxReligion = () => {
    setCheckReligion(!checkReligion);
  };
  const handleCheckboxDesire = () => {
    setCheckDesire(!ckeckDesire);
  };

  // _________________________________________
  const randomlyNames = () => {
    let Names = [
      "Josh",
      "Wes",
      "EJ",
      "Will",
      "Billy",
      "Avery",
      "Stuart",
      "Kaden",
      "Stephen",
      "Benji",
      "Carson",
      "Jacob",
      "Ryan",
      "Brady",
      "Nick",
      "Dwayne",
      "Savanna",
      "Maria",
      "Paige",
      "Jessica",
      "Maya",
      "Hannah",
      "Nicole",
      "Heather",
      "Maggie",
      "Amanda",
      "Kate",
      "",
    ];
    setName(Names[Math.floor(Math.random() * Names.length)]);
  };
  const randomlyLocations = () => {
    let Locations = [
      "Spanish Fork, UT",
      "Provo, UT",
      "Connecticut",
      "Alberta, Canada",
      "Logan, UT",
      "Burley, Idaho",
      "Sacramento, CA",
      "Texas but moved to Utah for school",
      "Chongqing, China",
      "Baltimore, Maryland",
      "Wyoming",
      "Rural West Tennessee",
      "Salt Lake",
      "the Seattle area",
      "the Orem/Lindon area of Utah",
      "Lyme, New Hampshire",
      "Philadelphia",
      "Vale, Oregon",
      "Mexico",
      "Santa Barbara, CA",
      "Denver, Colorado and moved to the Utah Valley for school",
      "Highlands Ranch, Colorado",
      "Michigan and came to Utah to help his dad take care of his mom",
      `New Mexico but moved to Provo to live with ${
        gender === "male" ? "his" : "her"
      } best friend`,
      "Southern Utah",
      "Ogden, Utah",
      "Payson, Utah",
      "Canada",
      "Texas",
      "Maine",
      "Kansas City, Missouri",
    ];
    setLocation(Locations[Math.floor(Math.random() * Locations.length)]);
  };
  const randomlySchools = () => {
    let Schools = ["BYU", "UVU", "Utah State", "the University of Utah"];
    setSchoool(Schools[Math.floor(Math.random() * Schools.length)]);
  };
  const randomlyDegrees = () => {
    let Degrees = [
      "Information Systems",
      "Business",
      "Child Development",
      "Accounting",
      "Experience Design and Management",
      "Art History",
      "Animation",
      "Chemistry",
      "Computer Science",
      "Mechanical Engineering",
      "Dance",
      "Dietetics",
      "English",
      "Exercise Science",
      "Psychology",
      "Graphic Design",
      "History",
      "Microbiology",
      "Statistics",
      "Sociology",
      "Wildlife Conservation",
      "Ancient Near-Eastern Studies",
      "Anthropology",
      "Family Science",
      "Public Relations with hopes of becoming a motivational speaker",
      "Communication Disorders",
      "Entrepreneurship",
      "Elementary Education",
      "to be a speech pathologist",
      "Animation at BYU with hopes to become an animator at Pixar",
      "in the nursing program",
      "Cybersecurity",
      "Information Technology",
      "Math Education",
    ];
    setDegree(Degrees[Math.floor(Math.random() * Degrees.length)]);
  };
  const randomlyOccupations = () => {
    let Occupation = [
      "janitor at a local high school",
      "elementary school teacher",
      "accountant for an advertising company",
      "journalist for a local newspaper",
      "musician",
      "regional manager of a paper company",
      "programmer for a web design company",
      "salesperson",
      "pastor for a local non-denominational Christian church",
      "database administrator",
      "fishing guide on the Provo river",
      "electrician",
      `TA at ${gender === "male" ? "his" : "her"} school`,
      "manager at a local restaurant",
      "supervisor at Lowe's",
      "lab assistant",
    ];
    setOccupation(Occupation[Math.floor(Math.random() * Occupation.length)]);
  };
  const randomlyreligious = () => {
    let Religion = [
      "in an atheist family, but due to some personal experiences, feels as if there might be some type of Divine Being",
      "in a Christian home with little activity within his religion",
      `never discussing religion in ${gender === "male" ? "his" : "her"} home`,
      "believing in God but only attends church with her grandma",
      "without much religious experience, but has made a lot of friends who are members of the Church while attending school",
      `Catholic but would consider ${
        gender === "male" ? "his" : "her"
      }self to be agnostic right now`,
      "without religion in the home, but has always been curious about God",
      "in a dysfunctional family that had little to no belief in God, or believed in a harsh deity",
      `in a community where religion was very polarized, and ${
        gender === "male" ? "he" : "she"
      } struggles with wanting to be a part of religion after having bad experiences from ${
        gender === "male" ? "his" : "her"
      } adolescence`,
      `with little religion in her house, but ${
        gender === "male" ? "his" : "her"
      } grandma is an active Catholic who takes ${
        gender === "male" ? "his" : "her"
      } to mass when she visits`,
      "in a family that always encouraged a belief in God, but never attended one church consistently",
      "non-religious, but has taken some world-religion classes in college",
      `without any religion in the home. For most of ${
        gender === "male" ? "his" : "her"
      } life, ${
        gender === "male" ? "he" : "she"
      } has never had any interest in spiritual things`,
      "Catholic, and went to church only on Christmas and Easter",
      "in a nontraditional family thatwas very focused on spirituality and connecting with the inner being through meditation and nature",
      `beliving in God, but never went to church growing up. ${
        gender === "male" ? "he" : "she"
      } has a strong belief in prayer`,
      "Christian, and reads the Bible frequently",
      "in no particular religion, but is very spiritual and feels very close to God",
      "Christian, and frequently attends a local non-denominational church",
      "to be very religious, leads a local Bible study group",
      "Catholic",
      `Buddhist, and considers ${
        gender === "male" ? "his" : "her"
      }self very spiritual`,
      "Christian, but rarely went to church",
      "atheist, and has no experience with spiritual things",
      "Lutheran, and has a strong belief in Christ and the Bible",
      "Christian, and frequently attends a local non-denominational church",
      "without any religion in the home, but is open to learning more about religion",
      `Christian, but lost ${
        gender === "male" ? "his" : "her"
      } faith in God as a teenager`,
      "Christian, but stopped going to church when they left home for college",
      `without any particular religious beliefs, and currently considers ${
        gender === "male" ? "his" : "her"
      }self agnostic (doesn't know if God exists or not)`,
      `believing in Christ because ${
        gender === "male" ? "he" : "she"
      } was taught to as ${gender === "male" ? "his" : "her"} grew up`,
    ];
    setReligionn(Religion[Math.floor(Math.random() * Religion.length)]);
  };
  const randomDesires = () => {
    let Desires = [
      "is having a difficult time in life and is looking for ways to find greater peace, joy, and purpose in life",
      "wants to learn more about what makes the Church of Jesus Christ of Latter-day Saints different from other Christian churches",
      "is meeting with the missionaries because of encouragment from a friend who is a member of the Church",
      `looking to grow closer to God and to know that God knows ${
        gender === "male" ? "him" : "her"
      }, listens to ${gender === "male" ? "his" : "her"}, and cares about ${
        gender === "male" ? "he" : "she"
      } and ${gender === "male" ? "his" : "her"} family`,
      `was recently diagnosed with cancer. When ${
        gender === "male" ? "he" : "she"
      } find out about the cancer,${gender === "male" ? "he" : "she"} went to ${
        gender === "male" ? "him" : "her"
      } for help. The pastor told ${
        gender === "male" ? "his" : "her"
      } that it was a result of God being displeased with ${
        gender === "male" ? "his" : "her"
      }. Fortunately, ${name} will likely recover from the cancer, but this experience caused ${
        gender === "male" ? "him" : "her"
      } to visit several other churches of different faiths, but none of them have felt right yet`,
      `grew up farming corn on ${
        gender === "male" ? "his" : "her"
      } parent’s farm but ${
        gender === "male" ? "his" : "her"
      } parents just recently got divorced and ${
        gender === "male" ? "he" : "she"
      } is worried about the effect the divorce is having on ${
        gender === "male" ? "his" : "her"
      } younger siblings. [${
        gender === "male" ? "he" : "she"
      } wants to know what ${
        gender === "male" ? "his" : "her"
      } individual purpose in life is as well as some clarity about what is going on with ${
        gender === "male" ? "his" : "her"
      } family. ${name} wants to feel a stronger connection to God and know what ${
        gender === "male" ? "he" : "she"
      } can do to make sure that ${
        gender === "male" ? "he" : "she"
      } has a better family in the future`,
      `has hit a bit of a rough patch in life right now with all the crazy things happening in the world and is looking for some of that happiness. ${
        gender === "male" ? "he" : "she"
      } talked to ${
        gender === "male" ? "his" : "her"
      } friend about it and the friend suggested ${name} meet with the missionaries. ${
        gender === "male" ? "he" : "she"
      } is hoping to learn how to be a better Christian so that ${
        gender === "male" ? "he" : "she"
      } can get through hard times`,
      `started experiencing some trials in ${
        gender === "male" ? "his" : "her"
      } teenage years that caused ${
        gender === "male" ? "him" : "her"
      } to turn to drugs and alcohol. ${name} has a lot of guilt and sadness because of some of ${
        gender === "male" ? "his" : "her"
      } past decisions, and is hoping the missionaries can help ${
        gender === "male" ? "him" : "her"
      } overcome this gulit and find greater happiness in life`,
      "is wondering if there is a higher power and if it can benefit",
      "is looking for a church to attend",
      "has recently lost a loved one, and is looking for ways to find peace during this difficult time",
    ];
    setDesire(Desires[Math.floor(Math.random() * Desires.length)]);
  };

  return (
    <section className="mainbox">
      <section className="optionBox">
        <h2>Options</h2>
        <div>
          {/* Name and gender box */}
          <div className="inputs">
            <label>Name</label>
            <input type="text" value={name} onChange={handleChangedName} />
            <label>Gender</label>
            <select
              name="gender"
              id="gender"
              onChange={(e) => handleChangeGender(e)}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <button onClick={randomlyNames}>Random Name</button>
          </div>

          {/* Location box */}
          <div className="inputs">
            <label>
              <input
                type="checkbox"
                className="checkbox"
                id="location"
                value="false"
                checked={checkLocation}
                onChange={handleCheckboxLocation}
              />
              Location
            </label>
            <input
              type="text"
              value={location}
              onChange={handleChangeLocation}
            />
            <button onClick={randomlyLocations}>Random Location</button>
          </div>

          {/* School and Major box */}
          <div className="inputs">
            <label>
              <input
                type="checkbox"
                className="checkbox"
                id="school"
                value="false"
                checked={checkSchool}
                onChange={handleCheckboxSchool}
              />
              School
            </label>
            <input type="text" value={school} onChange={handleChangeSchool} />
            <button onClick={randomlySchools}>Random School</button>
            <br />
            <label>Major</label>
            <input type="text" value={degree} onChange={handleChangeMajor} />
            <button onClick={randomlyDegrees}>Random Major</button>
          </div>

          {/* Occupation box */}
          <div className="inputs">
            <label>
              <input
                type="checkbox"
                className="checkbox"
                id="occupation"
                value="false"
                checked={checkOccupation}
                onChange={handleCheckboxOccupation}
              />
              Occupation
            </label>
            <input
              type="text"
              value={occupation}
              onChange={handleChangeOccupation}
            />
            <button onClick={randomlyOccupations}>Random Occupation</button>
          </div>

          {/* Religious Background box */}
          <div className="inputs">
            <label>
              <input
                type="checkbox"
                className="checkbox"
                id="religion"
                value="false"
                checked={checkReligion}
                onChange={handleCheckboxReligion}
              />
              Religious Background
            </label>
            <textarea
              value={religion}
              onChange={handleChangeReligion}
            ></textarea>
            <button onClick={randomlyreligious}>Random Religion</button>
          </div>

          {/*Box for reasons to meetings */}
          <div className="inputs">
            <label>
              <input
                type="checkbox"
                className="checkbox"
                id="reasons"
                value="false"
                checked={ckeckDesire}
                onChange={handleCheckboxDesire}
              />
              Reason for meeting with missionaries
            </label>
            <textarea value={desire} onChange={handleChangedDesire}></textarea>
            <button className="restoration" onClick={randomDesires}>
              Restoration
            </button>
            <button className="plan_of_salvation" onClick={randomDesires}>
              Plan of Salvation
            </button>
            <button className="gospel_of_christ" onClick={randomDesires}>
              Gospel of Christ
            </button>
            <button className="law_of_chastity" onClick={randomDesires}>
              Law of Chastity
            </button>
            <button className="word_of_wisdom" onClick={randomDesires}>
              Word of Wisdom
            </button>
            <button onClick={randomDesires}>Any Lesson</button>
          </div>
        </div>
      </section>

      <section className="resultBox">
        <h2>Results</h2>
        <div>
          {name} {checkLocation ? `is from ${location}, ` : null}
          {checkSchool
            ? `${
                gender === "male" ? "he" : "she"
              } is studying ${degree} at ${school}. `
            : null}
          {checkOccupation
            ? `${
                gender === "male" ? "He" : "She"
              } currently works as a ${occupation} `
            : null}
          {checkReligion
            ? `${gender === "male" ? "He" : "She"} ${religion}  `
            : null}
          {ckeckDesire
            ? `${gender === "male" ? "He" : "She"} ${desire} `
            : null}
        </div>
      </section>
    </section>
  );
};

export default Options;
