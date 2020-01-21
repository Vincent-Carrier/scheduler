import React from "react";
import classNames from 'classnames';
import "components/InterviewerListItem.scss";

export default function InterviewListItem({ id, name, avatar, selected, setInterviewer }) {
  return (
    <li className="interviewers__item" onClick={() => setInterviewer(id)}>
      <img
        className="interviewers__item-image"
        src="https://i.imgur.com/LpaY82x.png"
        alt="Sylvia Palmer"
      />
      Sylvia Palmer
    </li>
  );
}

