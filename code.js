//debug
onEvent("button3", "click", function( ) {
  setScreen("debug");
});

onEvent("1280x720", "click", function( ) {
  setSize("titleScreen", 1280, 720);
  setSize("selectChar", 1280, 720);
  setSize("selectChar2", 1280, 720);
  setSize("tosScreen", 1280, 720);
  setSize("userInfoScreen", 1280, 720);
  setSize("welcomeScreen", 1280, 720);
  setSize("creditsScreen", 1280, 720);
  setSize("titleScreen", 1280, 720);
  setSize("titleScreen", 1280, 720);
});
onEvent("320x450", "click", function( ) {
  setSize("titleScreen", 320, 450);
  setSize("selectChar", 320, 450);
  setSize("selectChar2", 320, 450);
  setSize("tosScreen", 320, 450);
  setSize("userInfoScreen", 320, 450);
  setSize("welcomeScreen", 320, 450);
  setSize("creditsScreen", 320, 450);
  setSize("titleScreen", 320, 450);
  setSize("titleScreen", 320, 450);
});
//unused
onEvent("singleplayerButton", "click", function( ) {
  setScreen("singleplayer");
});
onEvent("multiplayerButton", "click", function( ) {
  setScreen("multiplayer");
});
//da
onEvent("gtselectChar", "click", function( ) {
  setScreen("selectChar");
});
onEvent("gtselectChar2", "click", function( ) {
  setScreen("selectChar2");
});
onEvent("gtselectChar3", "click", function( ) {
  setScreen("selectChar3");
});
onEvent("gttitleScreen", "click", function( ) {
  setScreen("titleScreen");
});
onEvent("gttosScreen", "click", function( ) {
  setScreen("tosScreen");
});
onEvent("gtuserInfoScreen", "click", function( ) {
  setScreen("userInfoScreen");
});
onEvent("gtwelcomeScreen", "click", function( ) {
  setScreen("welcomeScreen");
});
onEvent("gtuserInfoScreen", "click", function( ) {
  setScreen("userInfoScreen");
});
/*norm*/
onEvent("creditButton", "click", function( ) {
  setScreen("creditsScreen");
});
onEvent("selectCharButton", "click", function( ) {
  setScreen("selectChar");
});
//home
onEvent("HomeButtonM", "click", function( ) {
  setScreen("titleScreen");
});
onEvent("HomeButtonS", "click", function( ) {
  setScreen("titleScreen");
});
onEvent("HomeButton0", "click", function( ) {
  setScreen("titleScreen");
});
onEvent("HomeButton1", "click", function( ) {
  setScreen("titleScreen");
});
onEvent("HomeButton2", "click", function( ) {
  setScreen("titleScreen");
});
onEvent("HomeButton3", "click", function( ) {
  setScreen("titleScreen");
});
onEvent("HomeButton4", "click", function( ) {
  setScreen("titleScreen");
});
onEvent("HomeButton5", "click", function( ) {
  setScreen("titleScreen");
});
//frontChar
onEvent("nextChar1", "click", function( ) {
  setScreen("selectChar2");
});
onEvent("nextChar2", "click", function( ) {
  setScreen("selectChar3");
});
//backChar
onEvent("lastChar1", "click", function( ) {
  setScreen("selectChar");
});
onEvent("lastChar2", "click", function( ) {
  setScreen("selectChar2");
});
//selectingChar
onEvent("alexanderButton", "click", function( ) {
  setProperty("welcomeText", "text", "We regret to inform you that your previous exsitence ended on 12th of Febuary, 2065, following a large fall of a building");
  setProperty("userid.string.uinfo", "text", "UserID: 0004-4135-8619");
  setProperty("udate.string.uinfo", "text", "Upload Date: 12th of Febuary, 2065");
  setProperty("neuron.count.uinfo", "text", "503,602,584,628,324,789");
  setProperty("damage.info.string.uinfo", "text", "No significant damage has been found, some damage has been found across the body");
  setProperty("name.string.uinfo", "text", "Name: Alexander Wonder");
  setScreen("welcomeScreen");
});
//selectChar
onEvent("nextbutton.welcome.id1", "click", function( ) {
setScreen("userInfoScreen");
});
