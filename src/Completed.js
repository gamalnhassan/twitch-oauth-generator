function Completed() {
  const urlParams = new URLSearchParams(window.location.hash.substr(1));
  const accessToken = urlParams.get('access_token');
  return (
      <div className="panel">
        <div className="panel_content">
          <h4>Twitch Chat OAuth Password Generator</h4>
          <p>Your OAuth token is ready!</p>
          <br></br>
          <div className="box">
          oauth:{accessToken}
          </div>
        </div>
        <div className="panel_tiles">
          <div className="tile outside left_outside"></div>
          <a href="#" className="tile panel_btn" onClick={copy(accessToken)}>Copy!</a>
          <div className="tile outside right_outside"></div>
        </div>
      </div>
  );
  }
  
function copy(accessToken) {
  navigator.clipboard.writeText('oauth:' + accessToken);
}

export default Completed;