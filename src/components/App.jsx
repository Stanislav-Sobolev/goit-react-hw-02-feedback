import { Feedback } from "./feedback/feedback";

export const App = () => {
  return (
    <div
      style={{
        marginLeft: '30px',
        
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Feedback></Feedback>
    </div>
  );
};
