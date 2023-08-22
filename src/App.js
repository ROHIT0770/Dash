import { SessionProvider } from "next-auth/react";

function App({ Component, props, session }) {
  return (
    <SessionProvider session={session}>
      <Component {...props} />
    </SessionProvider>
  );
}

export default App;
