import { MeetingProvider } from "@videosdk.live/react-sdk";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MeetingAppProvider } from "./MeetingAppContextDef";
import { MeetingContainer } from "./meeting/MeetingContainer";
import { LeaveScreen } from "./components/screens/LeaveScreen";
import { JoiningScreen } from "./components/screens/JoiningScreen";
import HomeScreen from "./components/screens/HomeScreen"; // HomeScreen импортталады
import AboutScreen from "./components/screens/AboutScreen";
import CoursesScreen from "./components/screens/CoursesScreen";
import ContactScreen from "./components/screens/ContactScreen";
import PaymentScreen from "./components/screens/PaymentScreen";
import StudentReviewsScreen from "./components/screens/StudentReviewsScreen";
import TeacherRating from "./components/TeacherRating";
import TeacherDetail from "./components/TeacherDetail";
import Navbar from "./components/Navbar";
import Register from "./components/screens/Register";
import Login from "./components/screens/Login";
import Profile from "./components/screens/Profile";

function App() {
  const [token, setToken] = useState(""); // Токен
  const [meetingId, setMeetingId] = useState(""); // Meeting ID
  const [participantName, setParticipantName] = useState(""); // Қатысушының аты
  const [micOn, setMicOn] = useState(false); // Микрофонның күйі
  const [webcamOn, setWebcamOn] = useState(false); // Камераның күйі
  const [customAudioStream, setCustomAudioStream] = useState(null); // Арнайы аудио ағымы
  const [customVideoStream, setCustomVideoStream] = useState(null); // Арнайы бейне ағымы
  const [isMeetingStarted, setMeetingStarted] = useState(false); // Meeting басталды ма?
  const [isMeetingLeft, setIsMeetingLeft] = useState(false); // Meeting қалдырылды ма?

  const onClickStart = () => {
    if (token && meetingId) { 
      setMeetingStarted(true); 
    } else {
      console.log("Token немесе Meeting ID дұрыс орнатылмаған");
      
    }
  };
  useEffect(() => {
    const isMobile = window.matchMedia("only screen and (max-width: 768px)").matches;
    if (isMobile) {
      window.onbeforeunload = () => {
        return "Are you sure you want to exit?";
      };
    }
  }, []);

  return (
    <Router>
      <MeetingAppProvider>
        <div className="app">
          {/* Navbar */}
          <Navbar />

          {/* Routes */}
          <Routes>
            <Route path="/" element={<HomeScreen onClickStart={onClickStart} />} /> {/* HomeScreen-ге onClickStart функциясын өткіздік */}
            <Route path="/about" element={<AboutScreen />} />
            <Route path="/courses" element={<CoursesScreen />} />
            <Route path="/contact" element={<ContactScreen />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/payment" element={<PaymentScreen />} />
            <Route path="/student-reviews" element={<StudentReviewsScreen />} />
            <Route
              path="/meeting"
              element={
                isMeetingStarted ? (
                  <MeetingProvider
                    config={{
                      meetingId,
                      micEnabled: micOn,
                      webcamEnabled: webcamOn,
                      name: participantName || "TestUser",
                      multiStream: true,
                      customCameraVideoTrack: customVideoStream,
                      customMicrophoneAudioTrack: customAudioStream,
                    }}
                    token={token}
                    reinitialiseMeetingOnConfigChange={true}
                    joinWithoutUserInteraction={true}
                  >
                    <MeetingContainer
                      onMeetingLeave={() => {
                        setToken("");
                        setMeetingId("");
                        setParticipantName("");
                        setWebcamOn(false);
                        setMicOn(false);
                        setMeetingStarted(false);
                      }}
                      setIsMeetingLeft={setIsMeetingLeft}
                    />
                  </MeetingProvider>
                ) : isMeetingLeft ? (
                  <LeaveScreen setIsMeetingLeft={setIsMeetingLeft} />
                ) : (
                  <JoiningScreen
                    participantName={participantName}
                    setParticipantName={setParticipantName}
                    setMeetingId={setMeetingId}
                    setToken={setToken}
                    micOn={micOn}
                    setMicOn={setMicOn}
                    webcamOn={webcamOn}
                    setWebcamOn={setWebcamOn}
                    customAudioStream={customAudioStream}
                    setCustomAudioStream={setCustomAudioStream}
                    customVideoStream={customVideoStream}
                    setCustomVideoStream={setCustomVideoStream}
                    onClickStartMeeting={onClickStart} // Start meeting функциясын қосамыз
                    startMeeting={isMeetingStarted}
                    setIsMeetingLeft={setIsMeetingLeft}
                  />
                )
              }
            />
          </Routes>
        </div>
      </MeetingAppProvider>
    </Router>
  );
}

export default App;
