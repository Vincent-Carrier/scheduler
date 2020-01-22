import React, { useState } from "react";
import InterviewerList from "../InterviewerList";
import Button from "../Button";

export default function Form({
  interviewers,
  interviewer: _interviewer,
  name: _name,
  onSave,
  onCancel
}) {
  const [interviewer, setInterviewer] = useState(_interviewer || null);
  const [name, setName] = useState(_name || "");

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off">
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            value={name}
            placeholder="Enter Student Name"
            onChange={e => setName(e.target.value)}
          />
        </form>
        <InterviewerList
          interviewers={interviewers}
          interviewer={interviewer}
          onChange={setInterviewer}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onCancel={onCancel}>
            Cancel
          </Button>
          <Button confirm onSave={onSave}>
            Save
          </Button>
        </section>
      </section>
    </main>
  );
}
