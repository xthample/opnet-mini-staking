import { useState } from "react";

export default function App() {
  const [connected, setConnected] = useState(false);
  const [staked, setStaked] = useState(false);
  const [rewards, setRewards] = useState(0);
  const [status, setStatus] = useState("");

  const address = "tb1qxy...opnet";

  const connectWallet = () => {
    setConnected(true);
    setStatus("Wallet connected to OP_NET testnet");
  };

  const disconnect = () => {
    setConnected(false);
    setStaked(false);
    setRewards(0);
    setStatus("");
  };

  const stake = () => {
    setStaked(true);
    setStatus("Staking 0.001 tBTC...");
    setTimeout(() => {
      setStatus("Staked successfully ✅");
      setRewards(0.00002);
    }, 1500);
  };

  const claim = () => {
    setStatus("Claiming rewards...");
    setTimeout(() => {
      setStatus("Rewards claimed 🎉");
      setRewards(0);
    }, 1500);
  };

  return (
    <div className="container">
      <div className="card">

        <h1 className="title">
          <span className="dot"></span>
          OP_NET Staking
        </h1>

        <p className="subtitle">Earn yield on Bitcoin Layer 1</p>

        {!connected ? (
          <button className="btn" onClick={connectWallet}>
            Connect OP_WALLET
          </button>
        ) : (
          <>
            <div className="wallet-info">
              <p>Address</p>
              <strong>{address}</strong>

              <p style={{ marginTop: "15px" }}>Staked Amount</p>
              <div className="big-balance">
                {staked ? "0.001 tBTC" : "0 tBTC"}
              </div>

              <div className="apy">APY: 8% • OP_NET Testnet</div>
            </div>

            {!staked ? (
              <button className="btn" onClick={stake}>
                Stake 0.001 tBTC
              </button>
            ) : (
              <>
                <p className="status">
                  Pending Rewards: {rewards} tBTC
                </p>
                <button className="btn" onClick={claim}>
                  Claim Rewards
                </button>
              </>
            )}

            <button className="btn secondary" onClick={disconnect}>
              Disconnect
            </button>

            <p className="status">{status}</p>
          </>
        )}
      </div>
    </div>
  );
}