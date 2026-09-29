function Variables2 () {
  const header = (
    <header>
      <h1>Title</h1>
      <p>
        This is the home
      </p>
    </header>
  );

  const content = (
    <main>
      <h2>Other title</h2>
      <p>This is other content</p>
    </main>
  );

  return (
    <div>
      {header}
      {content}
    </div>
  )
}

export default Variables2;
