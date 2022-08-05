import React from "react";
import { MdDeleteForever, MdEditCalendar } from "react-icons/md";
{
  /*this is our note card component
here am using id,text,date,handleDeleteNote as props which have been defined in App.js*/
}

function Note({
  id,
  text,
  date,
  status,
  handleDelete,
  handleUpdate,
  handleChangeText,
}) {
  return (
    <div className="note">
      {/*This part will contain the main note's text part*/}
      {status ? (
        <textarea
          cols="10"
          rows="8"
          className=""
          onChange={(e) => handleChangeText(e, id)}
          value={text}
        />
      ) : (
        <span>{text}</span>
      )}
      {/*in the footer part of the note*/}

      <div className="note-footer">
        {/*it will store date on which the user is going to create the note*/}
        <small>{!status ? date : "300 Remaining"}</small>
        {/*this is for deleting the note using each note's unique id as parameter
                  so we have passed handleDeleteNote function as it's onClick event*/}
        {!status && (
          <MdDeleteForever
            onClick={() => handleDelete(id)}
            className="delete-icon"
            size="1.3em"
          />
        )}
      </div>

      {text && status ? (
        <button className="update" onClick={() => handleUpdate(id)}>
          Save
        </button>
      ) : (
        <MdEditCalendar
          className="icon-update"
          onClick={() => handleUpdate(id)}
        />
      )}
    </div>
  );
}

export default Note;
