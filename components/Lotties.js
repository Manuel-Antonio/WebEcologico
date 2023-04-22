import { Player, Controls } from "@lottiefiles/react-lottie-player";

const LottiesResumen = () => {
  return (
    <Player
      autoplay
      loop
      src="https://assets7.lottiefiles.com/packages/lf20_7qcermoa.json"
      style={{ height: "400px", width: "400px" }}
    >
        <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
    </Player>
  );
};
const LottiesTotal = () => {
    return (
      <Player
        autoplay
        loop
        src="https://assets6.lottiefiles.com/packages/lf20_06a6pf9i.json"
        style={{ height: "400px", width: "400px" }}
      >
          <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
      </Player>
    );
  };
  const LottiesPendiente = () => {
    return (
      <Player
        autoplay
        loop
        src="https://assets7.lottiefiles.com/packages/lf20_WR6V8sDQJQ.json"
        style={{ height: "400px", width: "400px" }}
      >
          <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
      </Player>
    );
  };
  const LottiesCompletado = () => {
    return (
      <Player
        autoplay
        loop
        src="https://assets7.lottiefiles.com/packages/lf20_8I3LpOolYL.json"
        style={{ height: "400px", width: "400px" }}
      >
          <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
      </Player>
    );
  };
export {
    LottiesResumen,
    LottiesTotal,
    LottiesPendiente,
    LottiesCompletado
} 
