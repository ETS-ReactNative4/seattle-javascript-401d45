function Results({ data }) {

  return (
    <div id="results-container">
      <div data-testid="headers">
        <h3>Response Headers</h3>
        <code>
          <pre>
            {JSON.stringify(data.headers, null, 2)}
          </pre>
        </code>
      </div>
      <div data-testid="response">
        <h3>Response Data</h3>
        <code>
          <pre>
            {JSON.stringify(data.response, null, 2)}
          </pre>
        </code>
      </div>
    </div>
  )

}

export default Results;
