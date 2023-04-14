
function Generate() {
    return (
        <div className="panel">
            <div className="panel_content">
                <h4>Twitch Chat OAuth Password Generator</h4>
                <h2>Generate Twitch OAuth Token</h2>
                <p>Generate an OAuth token to authenticate with Twitch IRC. This application uses the implicit grant flow for the Twitch API to retrieve your token. Your token will only be visible to your browser and not our server.</p>
                <br></br>
                Created by <a href="https://twitter.com/GamalNHassan" target={"_blank"}>@GamalNHassan</a>, 
                <span> </span>
                <a href="https://github.com/gamalnhassan/twitch-oauth-generator" target={"_blank"}>Source Code</a>
            </div>
            <div className="panel_tiles">
                <div className="tile outside left_outside"></div>
                <a href="#" className="tile panel_btn" onClick={openLink}>Generate</a>
                <div className="tile outside right_outside"></div>
            </div>
        </div>
    );
  }
  
function openLink() {
    //window.open("https://id.twitch.tv/oauth2/authorize?client_id=m3hlcp8pagcicmu1w0kc9cgjgffvvw&redirect_uri=https%3A%2F%2Ftwitch.gnh.dev%2Fcompleted%2F&response_type=token&scope=chat:read+chat:edit+channel:moderate+whispers:read+whispers:edit+channel_editor","_self");
    window.open("https://id.twitch.tv/oauth2/authorize?client_id=m3hlcp8pagcicmu1w0kc9cgjgffvvw&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcompleted%2F&response_type=token&scope=chat:read+chat:edit+channel:moderate+whispers:read+whispers:edit+channel_editor","_self");
}

export default Generate;