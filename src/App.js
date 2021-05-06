import GoogleLogin from "react-google-login";

function App() {
  const handleLogin = async (googleData) => {
    const res = await fetch("/api/v1/auth/google", {
      method: "POST",
      body: JSON.stringify({
        "token": "googleData.tokenId",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(googleData.tokenId);
    const data = await res.json();
    if(res.status === 200)
    {
      // redirect here
    }
    else
    {
      //  error
    }
  };
  return (
    <GoogleLogin
      clientId="411323907320-ha03ooc391sr04og9c52cc3glc3ofsnk.apps.googleusercontent.com"
      buttonText="Log in with Google"
      onSuccess={handleLogin}
      onFailure={handleLogin}
      cookiePolicy={"single_host_origin"}
    />
  );
}

export default App;
