import React from "react";

const Options = () => {
  return (
    <section className="optionBox">
      <h2>Options</h2>
      <form>
        {/* Name and gender box */}
        <div className="inputs">
          <label>Name</label>
          <input type="text" />
          <label>Gender</label>
          <select name="gender" id="gender">
            <option>Male</option>
            <option>Female</option>
          </select>
          <button>Random Name</button>
        </div>

        {/* Location box */}
        <div className="inputs">
          <label>
            <input type="checkbox" className="checkbox" id="location" />
            Location
          </label>
          <input type="text" />
          <button>Random Location</button>
        </div>

        {/* School and Major box */}
        <div className="inputs">
          <label>
            <input type="checkbox" className="checkbox" id="school" />
            School
          </label>
          <input type="text" />
          <button>Random School</button>
          <br />
          <label>Major</label>
          <input type="text" />
          <button>Random Major</button>
        </div>

        {/* Occupation box */}
        <div className="inputs">
          <label>
            <input type="checkbox" className="checkbox" id="occupation" />
            Occupation
          </label>
          <input type="text" />
          <button>Random Occupation</button>
        </div>

        {/* Religious Background box */}
        <div className="inputs">
          <label>
            <input type="checkbox" className="checkbox" id="religion" />
            Religious Background
          </label>
          <textarea></textarea>
          <button>Random Religion</button>
        </div>

        {/*Box for reasons to meetings */}
        <div className="inputs">
          <label>
            <input type="checkbox" className="checkbox" id="reasons" />
            Reason for meeting with missionaries
          </label>
          <textarea></textarea>
          <button class="restoration">Restoration</button>
          <button class="plan_of_salvation">Plan of Salvation</button>
          <button class="gospel_of_christ">Gospel of Christ</button>
          <button class="law_of_chastity">Law of Chastity</button>
          <button class="word_of_wisdom">Word of Wisdom</button>
          <button>Any Lesson</button>
        </div>
      </form>
    </section>
  );
};

export default Options;
