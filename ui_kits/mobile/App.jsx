// Root mobile app — shows three iOS device frames side-by-side, each at a key screen.
// Wired so clicks navigate within each frame independently.

const Phone = ({ initial = "shop", caption }) => {
  const [screen, setScreen] = React.useState(initial);
  const [stepIdx, setStepIdx] = React.useState(0);
  const [answers, setAnswers] = React.useState({});

  const goTo = (s, arg) => {
    setScreen(s);
    if (s === "quiz-step") setStepIdx(arg ?? 0);
  };
  const setAnswer = (i, v) => setAnswers(prev => ({ ...prev, [i]: v }));

  let content;
  if (screen === "shop") content = <MobileShop goTo={goTo}/>;
  else if (screen === "quiz-intro") content = <QuizIntro goTo={goTo}/>;
  else if (screen === "quiz-step") content = <QuizStep step={stepIdx} answers={answers} setAnswer={setAnswer} goTo={goTo}/>;
  else if (screen === "quiz-result") content = <QuizResult answers={answers} goTo={goTo}/>;
  else if (screen === "events") content = <EventsScreen goTo={goTo}/>;
  else content = <MobileShop goTo={goTo}/>;

  return (
    <div className="frame-wrap" data-screen-label={`Mobile · ${caption}`}>
      <IOSDevice dark={true} width={390} height={844}>
        {content}
      </IOSDevice>
      <div className="frame-caption">{caption}</div>
    </div>
  );
};

const MobileApp = () => (
  <div className="stage">
    <Phone initial="shop" caption="Shop home"/>
    <Phone initial="quiz-step" caption="Wine & Spirits Finder"/>
    <Phone initial="events" caption="Tastings & events"/>
  </div>
);

ReactDOM.createRoot(document.getElementById("root")).render(<MobileApp/>);
