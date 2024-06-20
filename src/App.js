import React, { useEffect, useState } from "react";
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
import FAQ from "./components/FAQ";
import { Timeline, TimelineContent, TimelineItem } from "./components/Timeline";

const faqList = [
  {
    question: "What is Tonkeeper Battery?",
    answer:
      "Tonkeeper Battery allows you to use stablecoins or NFTs without needing native coins for gas fees. It is designed to simplify transactions for newcomers by removing the need to acquire native coins for gas.",
  },
  {
    question: "How do I top up my battery?",
    answer:
      "You can top up your battery via in-app purchases using a banking card or by sending TON or stablecoins to a special address. Simply go to Settings → Battery in the app to charge your battery.",
  },
  {
    question: "Which transactions are supported?",
    answer:
      "Currently, simple TON transfer transactions are supported. We are still testing the battery and will add support for more complex transactions in the future.",
  },
  {
    question: "Can I use Tonkeeper Battery for NFT transfers?",
    answer:
      "Yes, you can use Tonkeeper Battery to transfer NFTs without needing native coins for gas fees. This feature makes it easier to manage and transfer your digital assets.",
  },
  {
    question: "Is Tonkeeper Battery secure?",
    answer:
      "Yes, Tonkeeper Battery is designed with security in mind. All transactions are processed on the blockchain, and your private keys remain secure within the Tonkeeper app.",
  },
  {
    question: "How do I join the Battery Public Beta discussion group?",
    answer:
      "You can join our Battery Public Beta discussion group on Telegram to report feedback, ask questions, and share suggestions. Just follow this link: t.me/batterypublicbeta.",
  },
];

const words = [
  "Efficient and streamlined transactions",
  "Gasless payments",
  "Seamless blockchain experiences",
  "Innovative solutions for users",
  "Secure digital asset management",
  "Empowering financial freedom",
  "Accessible crypto transactions",
  "Transformative blockchain solutions",
  "Intuitive user-friendly interface",
  "Supportive community engagement",
];

const App = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => {
        let newIndex = prevIndex;
        while (newIndex === prevIndex) {
          newIndex = Math.floor(Math.random() * words.length);
        }
        return newIndex;
      });
    }, 3000); // Change interval time as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
      <Section id="home">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{ fontFamily: "Roboto, serif" }}
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            style={{
              fontSize: "3.5rem",
            }}
          >
            Tonkeeper Battery
            <br />
            <motion.span
              style={{
                display: "inline-block",
                marginLeft: "0.5rem",
                color: "#5FBD80",
              }}
              key={currentWordIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {words[currentWordIndex]}
            </motion.span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            A new way to use stablecoins and NFTs without worrying about gas
            fees
          </motion.p>
          <Button
            variant="contained"
            color="primary"
            style={{ backgroundColor: "#212f42f5", color: "#ffffff" }}
          >
            Get Started
          </Button>
        </motion.div>
      </Section>
      <Section id="how-it-works" title={"How It Works"}>
        <Timeline>
          <TimelineItem>
            <TimelineContent align="left">
              <Step
                title="Receive Tokens"
                description="Get stablecoins or NFTs directly to your wallet."
                icon={<WalletIcon sx={{ fontSize: 48, color: "#5FBD80" }} />}
              />
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineContent align="right">
              <Step
                title="Make Payments"
                description="Send tokens without worrying about gas fees."
                icon={<PaymentIcon sx={{ fontSize: 48, color: "#5FBD80" }} />}
              />
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineContent align="left">
              <Step
                title="Monitor Charges"
                description="View your battery status on the main screen."
                icon={<BatteryIcon sx={{ fontSize: 48, color: "#5FBD80" }} />}
              />
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Section>

      <Section id="use-cases" title={"Key Use Cases"}>
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

      <Section id="get-started" title={"Start using Tonkeeper Battery Today"}>
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
          style={{ backgroundColor: "#5FBD80", color: "#ffffff" }}
        >
          Join Now
        </Button>
      </Section>

      <Section id="faq" title={"FAQ"}>
        <FAQ faqList={faqList} />
      </Section>

      <Section id="contact" title={"Need Help?"}>
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
            href="https://t.me/help_tonkeeper_bot"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="contained"
              color="primary"
              style={{ backgroundColor: "#212f42f5", color: "#ffffff" }}
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
