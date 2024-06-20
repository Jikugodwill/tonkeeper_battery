import React from "react";
import Layout from "./components/Layout";
import Section from "./components/Section";
import Step from "./components/Step";
import UseCase from "./components/UseCase";
import { Button } from "@mui/material";
import {
  BatteryChargingFull as BatteryIcon,
  Chat as ChatIcon,
  CreditCard as CardIcon,
  QueryBuilder as ClockIcon,
  AccountBalanceWallet as WalletIcon,
  Payment as PaymentIcon,
} from "@mui/icons-material";
import { motion } from "framer-motion";

const App = () => {
  return (
    <Layout>
      <Section id="home">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>Welcome to Tonkeeper Battery</h1>
          <p>
            We are excited to announce a major new feature: Tonkeeper Battery.
            It is in public beta and available on all mobile platforms starting
            today.
          </p>
          <Button
            variant="contained"
            color="primary"
            style={{ backgroundColor: "#00bcd4", color: "#ffffff" }}
          >
            Get Started
          </Button>
        </motion.div>
      </Section>

      <Section id="features">
        <motion.h2
          initial={{ opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Features
        </motion.h2>
        <Step
          title="Gasless Payments"
          description="Send and receive USDT, Notcoin, and other tokens without worrying about gas fees."
          icon={<PaymentIcon />}
        />
        <Step
          title="NFT Transfers"
          description="Easily transfer NFTs without needing native coins for fees."
          icon={<WalletIcon />}
        />
        <Step
          title="Funding Options"
          description="Top up your battery via in-app purchases or with TON/stablecoins."
          icon={<CardIcon />}
        />
      </Section>

      <Section id="how-it-works">
        <motion.h2
          initial={{ opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          How It Works
        </motion.h2>
        <Step
          title="Receive Tokens"
          description="Get stablecoins or NFTs directly to your wallet."
          icon={<WalletIcon />}
        />
        <Step
          title="Make Payments"
          description="Send tokens without worrying about gas fees."
          icon={<PaymentIcon />}
        />
        <Step
          title="Monitor Charges"
          description="View your battery status on the main screen."
          icon={<BatteryIcon />}
        />
      </Section>

      <Section id="use-cases">
        <motion.h2
          initial={{ opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Key Use Cases
        </motion.h2>
        <UseCase
          title="Gasless Payments"
          description="Send and receive USDT, Notcoin, and other tokens without worrying about gas fees."
        />
        <UseCase
          title="NFT Transfers"
          description="Easily transfer NFTs without needing native coins for fees."
        />
        <UseCase
          title="Funding Options"
          description="Top up your battery via in-app purchases or with TON/stablecoins."
        />
      </Section>

      <Section id="get-started">
        <motion.h2
          initial={{ opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Start Using Tonkeeper Battery Today
        </motion.h2>
        <Step
          title="Update the App"
          description="Update Tonkeeper on iOS or Android to version 4.3."
          icon={<BatteryIcon />}
        />
        <Step
          title="Top Up Battery"
          description="Navigate to Settings → Battery and charge up."
          icon={<PaymentIcon />}
        />
        <Step
          title="Join the Beta"
          description="Join our Battery Public Beta discussion group for feedback and suggestions."
          icon={<ChatIcon />}
        />
        <Button
          variant="contained"
          color="primary"
          style={{ backgroundColor: "#00bcd4", color: "#ffffff" }}
        >
          Join Now
        </Button>
      </Section>

      <Section id="faq">
        <motion.h2
          initial={{ opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.h3
          initial={{ opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          What is Tonkeeper Battery?
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Tonkeeper Battery is a feature that allows you to send and receive
          stablecoins and NFTs without needing native coins to pay for gas fees.
        </motion.p>
        <motion.h3
          initial={{ opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          How do I top up my battery?
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          You can top up your battery with a bank card, TON, or stablecoins via
          in-app purchases or by sending to battery.ton.
        </motion.p>
        <motion.h3
          initial={{ opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          What tokens are supported?
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Currently, we support USDT, Notcoin, and NFTs, with more tokens to be
          added in the future.
        </motion.p>
        <motion.h3
          initial={{ opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          How are transaction fees covered?
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Tonkeeper Battery automatically pays your transaction fees, so you
          don't have to worry about acquiring native coins for gas.
        </motion.p>
      </Section>

      <Section id="contact">
        <motion.h2
          initial={{ opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Need Help?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Join our support groups on Telegram for any assistance or questions.
        </motion.p>
        <div>
          <a
            href="https://t.me/TonkeeperSupport"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="contained"
              color="primary"
              style={{ backgroundColor: "#00bcd4", color: "#ffffff" }}
            >
              Join Support Group
            </Button>
          </a>
        </div>
      </Section>
    </Layout>
  );
};

export default App;
