import CardInput from "./CardInput";

function EditCard(props) {
  let entries = Object.entries(props.movie);

  return (
    <div id="updateForm" className="bg-dark p-4 d-flex flex-column gap-4">
      {entries.map((element, index) => (
        <CardInput
          entries={element}
          key={index}
          handleChange={props.handleChange}
        />
      ))}
    </div>
  );
}

export default EditCard;
