import { useState } from 'react';
import { IOSDevice } from '../components/mobile/IOSFrame';
import MobileShop from '../components/mobile/MobileShop';
import { QuizIntro, QuizStep, QuizResult } from '../components/mobile/Quiz';
import EventsScreen from '../components/mobile/EventsScreen';

const Phone = ({ initial = 'shop', caption }) => {
  const [screen, setScreen] = useState(initial);
  const [stepIdx, setStepIdx] = useState(0);
  const [answers, setAnswers] = useState({});

  const goTo = (s, arg) => {
    setScreen(s);
    if (s === 'quiz-step') setStepIdx(arg ?? 0);
  };
  const setAnswer = (i, v) => setAnswers(prev => ({ ...prev, [i]: v }));

  let content;
  if (screen === 'shop') content = <MobileShop goTo={goTo} />;
  else if (screen === 'quiz-intro') content = <QuizIntro goTo={goTo} />;
  else if (screen === 'quiz-step') content = <QuizStep step={stepIdx} answers={answers} setAnswer={setAnswer} goTo={goTo} />;
  else if (screen === 'quiz-result') content = <QuizResult answers={answers} goTo={goTo} />;
  else if (screen === 'events') content = <EventsScreen goTo={goTo} />;
  else content = <MobileShop goTo={goTo} />;

  return (
    <div className="frame-wrap">
      <IOSDevice dark={true} width={390} height={844}>{content}</IOSDevice>
      <div className="frame-caption">{caption}</div>
    </div>
  );
};

const MobilePreview = () => (
  <div style={{ background: 'oklch(0.10 0.008 60)', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 20px' }}>
    <div className="stage">
      <Phone initial="shop" caption="Shop home" />
      <Phone initial="quiz-step" caption="Wine & Spirits Finder" />
      <Phone initial="events" caption="Tastings & events" />
    </div>
  </div>
);

export default MobilePreview;
