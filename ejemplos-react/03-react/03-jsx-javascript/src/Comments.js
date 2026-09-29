/**
 * Multiline JavaScript comment
 */
function Comments () {
	// Single line comment
  return (
    <div /*
      * Multiline comment within any component
      *
      */>
      <h1>The title</h1>
      {/* Comments could go this way too */}
      <p>This is some content</p>
    </div>
  );
}

export default Comments;
