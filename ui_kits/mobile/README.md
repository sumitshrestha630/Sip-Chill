# Mobile — Sip & Chill

The mobile experience: shop home, the Wine & Spirits Finder quiz, and the events list. Shown as three iOS device frames side-by-side at the same scale.

## Screens

`index.html` renders three independently-interactive phones:

1. **Shop home** — logo, hero, category strip, Quiz CTA card, staff picks 2-col grid, "This week" events. Tap any tab to switch screens.
2. **Wine & Spirits Finder** — opens on Question 2 of 5. Progress dots top, conversational question in display italic, four answer cards. Back / Continue at the bottom. Walk all the way through to see the result screen.
3. **Tastings & events** — month label, filter chips (All / Tastings / Mixology / Classes), full feed of upcoming events with RSVP / waitlist buttons.

## Components

- `MobileShop.jsx` — `MobileShop`, `TabBar`
- `Quiz.jsx` — `QuizIntro`, `QuizStep`, `QuizResult`, plus the `QUIZ_QUESTIONS` data
- `Events.jsx` — `EventsScreen`
- `App.jsx` — `Phone` wrapper (per-frame screen state) + composition
- `ios-frame.jsx` — borrowed iOS device frame (dark mode)

Shared with the storefront:
- `../Icons.jsx`, `../Bottle.jsx`, `../data.js`

## Interactions

- Tap the bottom tab bar in any phone to jump between Shop / Finder / Events / You
- Inside the quiz, pick an option then Continue. Reach the end to see the recommendation card.
- Quiz CTA card on Shop home also jumps to the quiz intro
- All other links are decorative
