import { useApp } from "../context/AppContext";
function StudentForm() {
  const { profile, updateField, resetProfile, courseOptions } = useApp();
  return (
    <section className="card form-card">
      <div className="section-title">
        <h2>Edit Student Details</h2>
        <p>Update the form and watch the profile preview change live.</p>
      </div>
      <label
        Student Name
        <input
          type="text"
          name="studentName"
          value={profile.studentName}
          onChange={(event) => updateField(event.target.name, event.target.value)}
          placeholder="Enter student name"
        />
      </label>
      <label>
        Grade
        <input
          type="number"
          name="grade"
          value={profile.grade}
          onChange={(event) => updateField(event.target.name, event.target.value)}
          placeholder="Enter grade"
        />
      </label>
      <label>
        Favorite Course
        <select
          name="favoriteCourse"
          value={profile.favoriteCourse}
          onChange={(event) => updateField(event.target.name, event.target.value)}
        >
          {courseOptions.map((course) => (
            <option key={course} value={course}>
              {course}
            </option>
          ))}
        </select>
      </label>
      <label>
        Learning Goa
        <textarea
          name="goal"
          value={profile.goal}
          onChange={(event) => updateField(event.target.name, event.target.value)}
          placeholder="Write a short goal"
          rows="4"
        />
      </label
      <label>
        Theme Color
        <input
          type="color"
          name="themeColor"
          value={profile.themeColor}
          onChange={(event) => updateField(event.target.name, event.target.value)}
        />
      </label>
      <button type="button" className="reset-btn" onClick={resetProfile}>
        Reset Profile
      </button>
    </section>
  );
}
export default StudentForm;